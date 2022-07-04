import React, { useState } from "react";
import Search from "./Components/Search";

import Accordian from "./Components/Accordian";
import Dropdown from "./Components/Dropdown";

import Translate from "./Components/Translate";
import Route from "./Components/Route";
import Header from "./Components/Header";


function App(){
    const items=[
        {
            title:"what is React?",
            content:"react is a front end javascript framework",
        },

        {
            title:"what use  React?",
            content:"react is a favourite js library among engineers",
        },

        {
            title:"how do use  React?",
            content:"You use recat by creating components",
        }

    ]


    const options=[
        {
            label:"the color Red",
            value:"red"
        },
        {
            label:"the color blue",
            value:"blue"
        },
        {
            label:"the color green",
            value:"green"
        },
    ];

   

   
    return (
        
        <div>
            <Header />
           <Route path="/">
            <Accordian items={items} />

           </Route>

           <Route path="/list">
            <Search />

           </Route>

           <Route path="/dropdown">
            <Dropdown label="select a color"  options={options} />

           </Route>

           <Route path="/translate">
            <Translate />

           </Route>

           
        </div>
    )
}


export default App;