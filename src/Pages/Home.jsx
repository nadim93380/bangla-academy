import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import BookCard from "../Components/BookCard/BookCard";

const Home = () => {
    const allbooks = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className="py-8 bg-slate-200 text-center text-4xl font-bold rounded-xl">
                <h4>Books</h4>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    allbooks.map(book => <BookCard key={book.id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default Home;