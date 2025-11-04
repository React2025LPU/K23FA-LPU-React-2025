
import React from "react";
class DashboardClassComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            color:"Red",
            year: 2000
        }
    }
    changeState = () =>{
        this.setState({year:2025})
    }
    render(){
        return(

            <div>
                <h2>This is the Dashboard Class Component. the color of the dashboard is {this.state.color} and year is {this.state.year} </h2>
                <button onClick={this.changeState}>Change year</button>
            </div>
        )
    }
}

export default DashboardClassComponent;