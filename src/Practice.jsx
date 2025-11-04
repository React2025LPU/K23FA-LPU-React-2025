
import React from "react";
class Practice extends React.Component{
    render(){

        // return React.createElement('h1',{style:{color:"red"}},
        //     'This is heading by createelement');

        return React.createElement('div',{style:{backgroundColor:"yellow"}}, 
            React.createElement('h2',{style:{color:"green"}},
                'This is heading 2'));
    }
}
export default Practice;