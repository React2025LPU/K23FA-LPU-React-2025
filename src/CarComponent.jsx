
import React from "react";
class CarComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>This is Car Class Component. The model is {this.props.model}</h1>
            </div>
        )
    }
}

export default CarComponent;