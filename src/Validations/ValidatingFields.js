import React, { Children, Component } from "react";
import { isEmpty, isNil } from "ramda";
import { Form } from "semantic-ui-react";

export class ValidatingFields extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ""
    };
  }

  static isPresent(value) {
    return !isEmpty(value) && !isNil(value);
  }

  static getValue(value, selected) {
    if (this.isPresent(value)) return value;
    return selected;
  }

  validate() {
    const value = ValidatingFields.getValue(
      this.props.children.props.value,
      this.props.children.props.selected
    );
    const failedValidator = this.props.validate.find(validator =>
      validator(value)
    );

    if (failedValidator) {
      this.setState({
        error: failedValidator(value)
      });
    } else {
      this.setState({
        error: ""
      });
    }
  }

  componentDidMount() {
    this.validate();
  }

  componentDidUpdate(prevProps, prevState) {
    const previousValue =
      prevProps.children.props.value || prevProps.children.props.selected;
    const value =
      this.props.children.props.value || this.props.children.props.selected;

    if (previousValue !== value || prevProps.validate !== this.props.validate) {
      this.validate();
    }

    if (prevProps.error.length <= 0 && this.state.error.length > 0) {
      this.props.errorHandler(this.props.children.props.name, this.state.error);
    } else if (prevProps.error.length > 0 && this.state.error.length <= 0) {
      this.props.errorHandler(this.props.children.props.name);
    }
  }

  render() {
    const childrenWithoutLabel = Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        label: undefined
      });
    });
    return (
    <Form.Field error={this.state.error.length > 0} disabled={this.props.children.props.disabled}>
        {this.props.children.props.label && <label>{this.props.children.props.label}</label>}
        {childrenWithoutLabel}
    {this.state.error && <small style={{color:'#db2828'}}>{this.state.error}</small>}
        </Form.Field>
    );
  }
}

export default ValidatingFields;
