

function LaptopComponent(props){

    const {brand,color} = props;
    return(
        <div>
            {/* <h1>this is my laptop component. 
                The brand of laptop is {pro.brand}. 
                the color is {pro.color}.
                 The manufacturing year is {pro.year}</h1>
            <p>The ram is : {pro.con.ram} and ssd : {pro.con.ssd}</p>
            <p>The versions are : {pro.ver[0]} and {pro.ver[1]}</p> */}
            <h1> The brand of laptop is {brand}. the color is {color}</h1>
        </div>
    )

}

export default LaptopComponent;