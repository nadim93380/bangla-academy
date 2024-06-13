import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-[100vh] flex justify-center items-center flex-col gap-3">
            <h3>404 Page Not Found</h3>
            <Link to='/' className="btn">Go To Home Page</Link>
        </div>
    );
};

export default ErrorPage;