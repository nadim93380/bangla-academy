import { useLoaderData } from "react-router-dom";
import Rechart from "../Components/Rechart/Rechart";


const PagesToRead = () => {
    const allbooks = useLoaderData()
    return (
        <div>
            <h4 className="text-4xl font-bold text-center">Hello From Pages To Read</h4>
            <div className="w-11/12 lg:w-full">
                <Rechart allbooks={allbooks}></Rechart>
            </div>
        </div>
    );
};

export default PagesToRead;