import React, { useState, useEffect , useRef } from "react";


function Dropdown(props){
    const rendered=props.options.map((option)=>{

        if(option.value===props.selected.value){
            return null;
        }
        return (
            <div  className="item" onClick={()=>props.onSelect(option)} key={option.value}>
                {option.label}
            </div>
        );


    });

    const [open , setOpen]=useState(false);
    const ref= useRef();

    useEffect(()=>{
        document.body.addEventListener("click",(e)=>{
            if(ref.current.contains(e.target)){
                return;
            }
            setOpen(false);
            
           

        },{capture:true});
    },[]);

    return (

        <div ref={ref} className="ui form">
            <div className="field">
                <label  className="label">{props.label}</label>
                <div
                onClick={()=>setOpen(!open)}
                 className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{props.selected.label}</div>
                    <div className={`menu ${open ? 'visible transition':''}`}>
                        {rendered}
                    </div>
                </div>
            </div>
        </div>
    );
   
};

export default Dropdown;