import { useEffect } from "react";
import NavBarComponent from "./NavBar";
import { useState } from 'react';
import Home from "./Home";

function Dashboard() {

    const [language, setLanguage] = useState("ES");

    useEffect(() => {

    }, [language])  

    return(
        <div>
            <NavBarComponent 
                language={language} 
                setLanguage={setLanguage}
            />
            <Home 
                language={language} 
                setLanguage={setLanguage}/>
        </div>
    )
}

export default Dashboard;