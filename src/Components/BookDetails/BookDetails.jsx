
import { useLoaderData, useParams, } from "react-router-dom";
import { addToLocalStorage, addToWLocalStorage, getFromLocalStorage, getWFromLocalStorage } from "../../Utilities/LocalStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BookDetails = () => {
    
    
    const allbooks = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    

    const targetBook = allbooks.find(book => book.id === idInt);

    const handleRead = idInt => {
        const readStorage = getFromLocalStorage()
        const exists = readStorage.find(readId => readId === idInt)
        if (!exists) {
            addToLocalStorage(idInt)
            toast('Added to the Read Books')
        } else {
            toast.error('Already Added To Read Books')
        }
    }

    const handleWishlist = idInt => {
        const readStorage = getFromLocalStorage()
        const existsReadList = readStorage.find(readId => readId === idInt)
        const WStorage = getWFromLocalStorage()
        const exists = WStorage.find(WId => WId === idInt)

        if (existsReadList) {
            toast.error('Already Marked As Read')
        }
        else if (!exists) {
            addToWLocalStorage(idInt)
            toast('Added to the Wishlist')
        } else {
            toast.error('Already Added To Wishlist')
        }
    }


    return (
        <div className="p-9 ">
            <div className="flex justify-center gap-6 flex-col lg:flex-row">
                <div className="bg-base-200 p-10 rounded-lg"><img src={targetBook.image} className=" w-full object-cover rounded-lg shadow-2xl" /></div>
                <div className="ml-6 space-y-3">
                    <h1 className="text-5xl font-bold pb-3 border-b-2">{targetBook.bookName}</h1>
                    <p className="pb-3 border-b-2">By {targetBook.author}</p>
                    <div className="pb-3 border-b-2 space-y-3 ">
                        <p className=""><span className="font-bold">Review : </span>{targetBook.review}</p>
                        <div className="flex items-center gap-4">
                            <h4>Tag</h4>
                            <div>
                                {
                                    targetBook.tags.map((tag, idx) => <div key={idx} className="btn rounded-full text-green-400 mr-2">{tag}</div>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full lg:w-2/3">
                        <h4>Number Of Pages : </h4>
                        <p className="font-bold">{targetBook.totalPages}</p>
                    </div>
                    <div className="flex justify-between items-center w-full lg:w-2/3">
                        <h4>Publisher : </h4>
                        <p className="font-bold">{targetBook.publisher}</p>
                    </div>
                    <div className="flex justify-between items-center w-full lg:w-2/3">
                        <h4>Year Of Publishing : </h4>
                        <p className="font-bold">{targetBook.yearOfPublishing}</p>
                    </div>
                    <div className="flex justify-between items-center w-full lg:w-2/3">
                        <h4>Rating : </h4>
                        <p className="font-bold">{targetBook.rating}</p>
                    </div>

                    <div className="flex items-center gap-3 font-bold">
                        <button onClick={() => handleRead(idInt)} className="btn px-7">Read</button>
                        <button onClick={()=>handleWishlist(idInt)} className="btn bg-sky-400">Wishlist</button>
                    </div>

                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetails;