import React from 'react';

function Component2 (props){
    const hfc2 = 'Hello from Component2...CHILD';
    const c2 = 'Component2 ';
    return(
        <div>
        
            <p>{hfc2}</p>
            <p>{c2}{props.con.disp}</p>
            <p>{props.con.counter}</p>    
            <button type="button" onClick={() => props.inc() }>COUNT INC</button><br/><br/><br/>
            <button type="button" onClick={() => props.dec() }>calling props chiled to parent</button>
        </div>
    )
}

export default Component2;