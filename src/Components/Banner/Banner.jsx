import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 rounded-xl h-[554px] px-14 mb-8">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?t=st=1718192100~exp=1718195700~hmac=a156a81e05cac1ea68c8bbfe134f799ff38afe4beaea69afc512b366088c4bb9&w=740" className="max-w-sm rounded-lg" />
                    <div className="space-y-3">
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                        <Link to='/listedbooks' className="btn btn-active btn-accent font-bold">View The List</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;