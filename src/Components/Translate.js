// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
const options = [
    {
        label: 'Aficans',
        value: "af"
    },
    {
        label: 'Arabic',
        value: "ar"
    },
    {
        label: 'Hindi',
        value: "hi"
    }
];


function Translate() {

    const [lang, setLang] = useState(options[0]);
    const [text, setText] = useState('');
    return (

        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Text:</label>

                   <input type="text" placeholder="Enter Text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>

            </div>

            <Dropdown options={options} selected={lang} onSelect={setLang} label="select a language" />

            <hr />
            <h3 className="ui header">
                output:
            </h3>
            <Convert text={text} language={lang}/>
        </div>
    )
}

export default Translate;