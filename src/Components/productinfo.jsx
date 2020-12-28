import React, { Component } from "react";
import { Header } from "./Header";
import DataGrid from "react-data-grid";
import "react-data-grid/dist/react-data-grid.css";
import { AdminHistory } from "../Networks/Usercall";
import { Popup, Icon } from "semantic-ui-react";

const authToken = localStorage.getItem("token");
const AuthStr = `sessionid=${authToken}`;

export class AdminPage extends Component {
  state = {
    rows: [
      { id: 0, title: "Example" },
      { id: 1, title: "Demo" }
    ]
  };

  componentDidMount() {
    AdminHistory(this.props.token).then(res => {
      this.setState({
        rows: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <Header {...this.props} />
        <DataGrid
          filterable
          allowCsvExport
          actionCell={({ row }) => (
            <div>
              <Popup trigger={<Icon circular link name="pencil" />} />
            </div>
          )}
          columns={[
            {
              key: "id",
              name: "ID",
              filterable: true,
              sortable: true
            },
            {
              key: "title",
              name: "Title",
              filterable: true,
              sortable: true
            },
            {
              key: "id",
              name: "ID",
              filterable: true,
              sortable: true
            }
          ]}
          rows={this.state.rows}
        />
      </div>
    );
  }
}

export default AdminPage;
