import React from "react";

export default function CHefComponent(props){

return (
<div style={{textAlign: 'center',border: "1px solid #ccc",borderRadius:"20px"}}>
<img src={props.img} alt="" style={{width:"200px",height:"200px",borderRadius: '50%' }}></img>
<h1 style={{color:"rgb(243, 243, 94)"}}> {props.name}</h1>
<p><strong> {props.specialist}</strong></p>
<p style={{ padding:"30px"}}> {props.info}</p>
</div>


)} 