
// import { useEffect, useState } from "react";
import ListCard from "../Components/listCard/ListCard";


const Wishlist = () => {
    // const [allbooks, setAllBooks] = useState([])
    
    // useEffect(() => {
    //     fetch("fakeData1.json")
    //         .then(res => res.json())
    //         .then(data => setAllBooks(data))
    // }, [])
    // console.log(allbooks)
    
    return (
        <div>
            <h3>Hello From Wishlis</h3>
            <div>
                <ListCard></ListCard>
            </div>
        </div>
    );
};

export default Wishlist;