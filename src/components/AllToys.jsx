import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import setTitle from "../Hook/TitleHook";

const AllToys = () => {
    setTitle("All Toy");
    const [searchText, setSearchText] = useState("");
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allToys")
            .then((res) => res.json())
            .then((data) => setToys(data));
    }, []);

    const handleSearch = () => {
        fetch(`http://localhost:5000/searchToy/${searchText}`)
            .then((res) => res.json())
            .then((data) => setToys(data));
    };

    return (
        <div className="max-w-7xl mx-auto mt-14">
            <div className="p-2 text-center">
                <input
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    className="p-1 input input-bordered"
                    placeholder="Enter Toy Name"
                    type="text"
                />
                <button
                    onClick={handleSearch}
                    className="btn ml-5"
                >
                    Search
                </button>
            </div>
            <div className="overflow-x-auto w-full mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SELLER</th>
                            <th>TOY NAME</th>
                            <th>SUB CATEGORY</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys.map((toy) => (
                            <tr key={toy._id}>
                                <td>{toy.seller}</td>
                                <td>{toy.name}</td>
                                <td>{toy.category}</td>
                                <td>{toy.price}</td>
                                <td>{toy.quantity}</td>
                                <td>
                                    <button className="btn btn-success">
                                        <Link to={`/allToys/${toy._id}`}>
                                            View Details
                                        </Link>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;
