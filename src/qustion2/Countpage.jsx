import { useState } from "react";
import './CountPage.css'
function CountPage() {
    const [inc, setinc]  = useState(0)
    return(
        
        <div className="container">
            <div className="count">{inc}</div>
            <div>
                <button className="btn" onClick={()=> setinc(inc - 1)}>Decrement</button>
                <button className="btn" onClick={()=> setinc(inc + 1)}>Increment</button>
            </div>

        </div>
    )
}
export default CountPage;