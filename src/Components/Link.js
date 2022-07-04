import React from "react";


function Link(props) {
    const onClick = (e) => {
        
        e.preventDefault();

        //for changing url without refreshing
        window.history.pushState({},"",props.href);

        const navEvent=new PopStateEvent("popstate");
        window.dispatchEvent(navEvent);

    }

    return <a onClick={onClick} className={props.className} href={props.href}>{props.children}</a>
}

export default Link;