import React from "react"
class EventHandling1 extends React.Component{

    // handleEvent() {

    //     return alert("Thanks")
        
    // }

    handleEvent = () => alert("Thanks")
    render(){
        return(
            <div>
                <h1> This is Event Handling Class Component</h1>
                <button onClick={this.handleEvent}>Click Here</button>
            </div>
        )
    }
}

export default EventHandling1