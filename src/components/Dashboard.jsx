import NavBarComponent from "./NavBar";
import Home from "./Home";
import AboutMe from "./AboutMe";

function Dashboard() {

    return(
        <div>
            <NavBarComponent/>
            <Home/>
            <AboutMe/>
        </div>
    )
}

export default Dashboard;