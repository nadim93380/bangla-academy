
import ListCard from "../listCard/ListCard";
import { useEffect, useState } from "react";


const Readlist = () => {
    const [allbooks, setAllBooks] = useState([])
    
    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setAllBooks(data))
    }, [])
    console.log(allbooks)

    
    
    
    return (
        <div>
            <h4>Hlw From Read List </h4>
            <ListCard></ListCard>
        </div>
    );
};

export default Readlist;