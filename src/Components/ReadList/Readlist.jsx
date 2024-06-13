
import { getFromLocalStorage } from "../../Utilities/LocalStorage";
import ListCard from "../listCard/ListCard";
import { useEffect, useState } from "react";


const Readlist = () => {
    const [allbooks, setAllBooks] = useState([])
    
    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setAllBooks(data))
    }, [])


    const readIdStorage = getFromLocalStorage()
    
    const targetBooks = allbooks.filter(tbook => readIdStorage.includes(tbook.id));
    
    
    
    
    return (
        <div>
            <h4>Hlw From Read List </h4>
            <div className="space-y-3">
                {
                    targetBooks.map(book=> <ListCard key={book.id} book={book}></ListCard>)
                }
            </div>
        </div>
    );
};

export default Readlist;