import React from 'react';
import "./component3.css";

const Component3 = (props) => {
    return (
        <div className='component3'>
            <p className='left-corner'>Compliance Status</p>
            <div className='status'>
<p className='p'>{props.details.heading}</p>
<p className='p1'>{props.details.t1}</p>
<p className='p2'>{props.details.t2}</p>
<p className='p3'>{props.details.t3}</p>


        </div>
        </div>
    )
}

export default Component3
