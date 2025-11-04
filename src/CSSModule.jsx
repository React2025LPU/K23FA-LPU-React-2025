

import sty from './CSSModule.module.css'
import sty1 from './CSSModule1.module.css'
console.log(sty);
console.log(sty1);
function CSSModule(){
    return(
        <div className={sty1.mystyle}>
            <h2>This is CSSModule Styling</h2>
        </div>
    )

}

export default CSSModule;