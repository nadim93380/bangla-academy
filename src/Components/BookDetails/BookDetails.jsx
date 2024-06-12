import { useEffect } from "react";
import { useLoaderData, useParams, } from "react-router-dom";

const BookDetails = () => {

    const allbooks = useLoaderData();
    const { id } = useParams()


    const targetBook = allbooks.find(book => book.id === parseInt(id));
    console.log(targetBook)


    return (
        <div className="p-9 bg-base-200">
            <div className="flex justify-between flex-col lg:flex-row">
                <img src={targetBook.image} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="border text-right">
                    <h1 className="text-5xl font-bold">{targetBook.bookName}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi ipsa voluptate libero et dolorem nobis reprehenderit assumenda cum eum sed eligendi, placeat officiis reiciendis voluptatem dignissimos dolore quis?</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;