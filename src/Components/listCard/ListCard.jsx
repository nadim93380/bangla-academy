/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ListCard = ({ book }) => {

    return (
        <div>
            <div className="rounded-lg bg-base-200 px-6 py-6">
                <div className="flex flex-col lg:flex-row gap-6">
                    <img src={book.image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{book.bookName}</h1>
                        <p className="my-3">By <span className="font-bold">{book.author}</span></p>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-2">
                                <p className="font-bold">Tags : </p>
                                {book.tags.map((tag, idx) => <button className="btn rounded-full text-green-500 bg-slate-200" key={idx}>{tag}</button>)}
                            </div>
                            <p>Year Of Publishing : <span className="font-bold">{book.yearOfPublishing}</span></p>
                        </div>
                        <div className="flex items-center gap-5 py-5 border-b-2 mb-4">
                            <p>Publisher : <span className="font-bold">{book.publisher}</span></p>
                            <p>Page : <span className="font-bold">{book.totalPages}</span></p>
                        </div>
                        <div className="flex gap-3">
                            <button className="btn bg-blue-100 text-blue-700 rounded-full">Category : {book.category}</button>
                            <button className="btn bg-green-200 text-green-800 rounded-full">Rating : {book.rating}</button>
                            <Link to={`/book/${book.id}`} className="btn btn-accent rounded-full">View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListCard;