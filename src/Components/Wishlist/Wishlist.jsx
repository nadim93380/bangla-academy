import { useLoaderData } from "react-router-dom";
import { getWFromLocalStorage } from "../../Utilities/LocalStorage";
import ListCard from "../listCard/ListCard";


const Wishlist = () => {
    const allbooks = useLoaderData()
    
    const wIdStorage = getWFromLocalStorage()
    
    const targetBooks = allbooks.filter(tbook => wIdStorage.includes(tbook.id));

    return (
        <div>
            <div>
                {
                    targetBooks.map(book=><ListCard key={book.id} book={book}></ListCard>)
                }
            </div>
            
        </div>
    );
};

export default Wishlist;