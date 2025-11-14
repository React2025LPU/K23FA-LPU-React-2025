
import React from "react";
class StateClassComp extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    increase = () =>{
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
            <div>
                <h1>Likes : {this.state.count}</h1>
                <button onClick={this.increase}>Like</button>
                </div>
        )
    }
}

export default StateClassComp;