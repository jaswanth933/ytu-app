import {  useState,useEffect} from "react";

const Route=(props)=>{
    const [currentPath,setCurrentPath]=useState(window.location.pathname);
    useEffect(()=>{
        const onLocation = ()=>{
            setCurrentPath(window.location.pathname)
        };
        window.addEventListener('popstate', onLocation);
        return ()=>{
            window.removeEventListener('popstate',onLocation)
        }

    },[]);

    return currentPath===props.path?props.children : null;




}
export default Route;