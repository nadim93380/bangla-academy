import { useLoaderData } from "react-router-dom";
import { getFromLocalStorage } from "../../Utilities/LocalStorage";
import ListCard from "../listCard/ListCard";



const Readlist = () => {
    
    const allbooks = useLoaderData()
    


    const readIdStorage = getFromLocalStorage()
    
    const targetBooks = allbooks.filter(tbook => readIdStorage.includes(tbook.id));
    
    
    
    
    return (
        <div>
            <div>
                {
                    targetBooks.map(book=> <ListCard key={book.id} book={book}></ListCard>)
                }
            </div>
        </div>
    );
};

export default Readlist;