
import { NavLink, Outlet } from "react-router-dom";



const ListedBooks = () => {
    
    return (
        <div>
            <div className="py-8 bg-slate-200 text-center text-4xl font-bold rounded-xl">
                <h4>Books</h4>
            </div>
            <div className="flex justify-center my-5">
                <details className="dropdown">
                    <summary className="m-1 btn btn-success">Short By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </details>
            </div>
            <div>
                <div className="flex border-b-4">
                    <NavLink to="/listedbooks" end className={({ isActive }) =>isActive ? "border border-b-0 px-4 py-2 rounded-t-lg -mb-1 bg-white" : "px-4 py-2 border-b-4 -mb-1 bg-white"}>Read Books</NavLink>
                    <NavLink to="/listedbooks/wishlist" end className={({ isActive }) =>isActive ? "border border-b-0 px-4 py-2 rounded-t-lg -mb-1 bg-white" : "px-4 py-2 border-b-4 -mb-1 bg-white"}>Wishlist Books</NavLink>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;