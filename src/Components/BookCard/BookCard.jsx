/* eslint-disable react/prop-types */

const BookCard = ({ book }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={book.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="flex justify-around items-center px-10 mt-3">
            {
                book.tags.map((tag,idx) => <button key={idx}  className="btn rounded-full text-green-400">{tag}</button>)
            }
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{book.bookName}</h2>
                <p>By : {book.author}</p>
                <div className="card-actions border-t-2 pt-5 w-full flex justify-between">
                    <div>{book.category}</div>
                    <div>{book.rating}</div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;