import React from 'react'
import "./component2.css";
import { useState } from 'react';

const Component2 = () => {
    const [name,setName] = useState("Text Area to enter Status and submit");
    const handleChange=(event)=>{
        setName(event.target.value)
    }
    return (
        <div className='component2'>
            <div className='part-1'><span>Control Details</span>
              <p className='title'>Title :<span style={{"font-size":"12px"}}><br/>title</span></p>
              <p className='subtitle'>Sub Title<br/>
              <p className='sub'>1.1.3 text goes here from description pulled from database</p></p>
              <p className='w2'>Click for Guidance</p>
            </div>
                <div className='part-2'>
                    <p className='heading-1'>Status Details</p>
                   <p > <textarea  className="textarea" value={name} onChange={handleChange}/></p>
                </div>
                <div className='part-3'>
                    <p className='history'>History</p>
                    <p className='s1'>
                        <p className='s1-1'>Some status text goes here..<span className='span'>Dec 6,2021</span> </p>
                    </p>
                     <p className='s2'>
                        <p className='s1-1'>Some status text goes here..<span className='span'>Dec 12,2021</span> </p>
                    </p>
                </div>
                <div className='part-4'>
                   <p className='t1'>Owner(s) & Reviewer(s)</p>
                   <p className='t2'>Product Owner: <span className='span-1'>@jdsk</span></p>
                   <p className='t3'>Reviewer : <span className='span-1'>@seed</span></p>
                </div>
                <div className='part-5'>
                    <p className='u-1'>Status</p>
                    <p className='u-2'>In Progress</p>
                </div>
                <div className='part-6'>
                    <p className='v-1'>File attachments</p>
                  <p className='v2'>file 1 <span className='v21'>07/09/21</span></p>
                  <p className='v3'></p>
                  <p className='v4'>file 2 <span className='v41'>07/29/21</span></p>
                  <p className='v5'></p>
                  <p className='v6'>file 3 <span className='v61'>08/02/21</span></p>
                  <p className='v7'></p>
                  <p className='v8'>file 4 <span className='v81'>08/12/21</span></p>
                  <p className='v9'></p>
                  <p className='w1'>Attach File</p>
                  
                 </div>
        </div>
    )
}

export default Component2
