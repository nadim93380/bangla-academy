import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";

const MainLayout = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;