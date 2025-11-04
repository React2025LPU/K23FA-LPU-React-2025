
import './JSXBasics.css'
let x = 30;
let brand = "Dell"
let cn = "myclass"
const LED = {
    name: "Panasonic",
    price: 50
}

function mul(marks){

    return marks * 3;

}

const myfunc = ()=>{
                alert("popUP")
            }

const Style1 = {
    color : "green",
    backgroundColor:"yellow"

}
function JSXBasics(){
    return(
        <div style={Style1}>
            <h2>The multiplication of 5 and 2 is : {5 * 2}</h2>
            <p>The value of x is : {x}</p>
            <p>The brand of laptop is {brand}</p>
            <p>The marks are : {mul(5)}</p>
            <p>The BrandName of the: {LED.name} and {LED.price} </p>
            <button onClick={myfunc} disabled={false}>Click me</button>
        </div>

    )
}

export default JSXBasics