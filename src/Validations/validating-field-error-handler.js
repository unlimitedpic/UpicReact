import { append, without } from "ramda";

export default function(name, error){
    if (!this.state.error.includes(name) && error){
        this.setState((prevState)=>({error:append(name.prevState.error)}));
    } else if (this.state.error.includes(name) && !error){
        this.setState((prevState) =>({error:without([name],prevState.error)}));
    }
}