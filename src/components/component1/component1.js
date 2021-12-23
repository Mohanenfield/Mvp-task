import React from 'react';
import { Card , ListGroup,Table, DropdownButton, Dropdown } from "react-bootstrap";
import "./component1.css";
import {useTable} from "react-table";
import { useState } from 'react';


const Component1 = (props) => {
const [show , setShow] = useState(false);
const [show1 , setShow1] = useState(false);
const [show2 , setShow2] = useState(false);

const Show = () =>{
  setShow(show => !show);
  
}
const Show1 = () =>{
  setShow1(show1 => !show1);
  
}
const Show2 = () =>{
  setShow2(show2 => !show2);
  
}


    return (
       
            <div className='component1'>
  <p>Project Title Goes Here</p>
  
  <Table responsive='xl'>
    
    <tbody className='table'>
      <tr >
        <td className='row1' style={{"background-color":"rgba(187, 221, 254, 0.5)"}}>{props.title.name1} <br />req1 description goes here in a list
        
</td>
<td>
<button type = "button" className = "btn btn-default dropdown-toggle"   onClick={Show}>
</button>
</td>
{/* <td> <button type="checkbox" className='checkbox'></button></td>
<td> <button type="checkbox" className='checkbox'></button></td>
<td> <button type="checkbox" className='checkbox'></button></td> */}
</tr>
<tr>
  
  {show && props.dropdown.map((e)=>{
    // if(setShow==true){
      
      return(
        <tr><td>{e.name}</td>
        {/* <td> <button type="checkbox" className='checkbox'></button></td>
<td> <button type="checkbox" className='checkbox'></button></td>
<td> <button type="checkbox" className='checkbox'></button></td> */}
</tr>
        
      )
    
  })}
</tr>

      
<tr >
        <td className='row1' style={{"background-color":"rgba(187, 221, 254, 0.5)"}}>{props.title.name2} <br />req2 description goes here in a list
        
</td>
<td>
<button type = "button" className = "btn btn-default dropdown-toggle"   onClick={Show1}>
</button>
</td>
{/* <td> <button type="checkbox" className='checkbox'></button></td>
<td> <button type="checkbox" className='checkbox'></button></td>
<td> <button type="checkbox" className='checkbox'></button></td> */}
</tr>
<tr>
  
  {show1 && props.dropdown1.map((e)=>{
    // if(setShow==true){
      
      return(
        <tr>
        <td>{e.name}</td></tr>
      )
    
  })}
</tr>
<tr >
        <td className='row1' style={{"background-color":"rgba(187, 221, 254, 0.5)"}}>{props.title.name3} <br />req3 description goes here in a list
        
</td>
<td>
<button type = "button" className = "btn btn-default dropdown-toggle"   onClick={Show2}>
</button>
</td>
{/* <td> <button type="checkbox" className='checkbox'></button></td>
<td> <button type="checkbox" className='checkbox'></button></td>
<td> <button type="checkbox" className='checkbox'></button></td> */}
</tr>
<tr>
  
  {show2 && props.dropdown2.map((e)=>{
    // if(setShow==true){
      
      return(
        <tr>
        <td>{e.name}</td></tr>
      )
    
  })}
</tr>
    </tbody>
  </Table>
  
</div>
       
    )
}

export default Component1
