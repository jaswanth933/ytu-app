import React,{useState} from 'react';


function Accordian({ items }) {
    const [activeIndex,setActiveIndex] = useState(null);

    const onTitleClick=(index)=>{
        setActiveIndex(index);

    }

    const rendered = items.map((elements,index) => {

        const active =index === activeIndex ? "active": "";

        return (
            <React.Fragment key={elements.title}>
                <div className={`title ${active}`} onClick={()=>onTitleClick(index)} >
                   
                        <i className="dropdown icon"></i>
                        {elements.title}
                    </div>
                    <div className={`content ${active} `}>
                        <p>{elements.content}</p>
                    </div>
               
            </React.Fragment>
        );

    });

    return (
        <div className='ui styled accordion'>

            {rendered}

            


        </div>
    );
}

export default Accordian;