import React from "react";
import { Link } from "react-router-dom";

const MaleHero = ({ male }) => {
    const { id, name, rating, price, img } = male;

    return (
        <div>
            <div className="card w-96 bg-slate-200 shadow-xl flex flex-col items-center">
                <figure className="px-5 pt-10">
                    <img src={img} alt="" className="rounded-xl h-48" />
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title text-xl">{name}</h2>
                    <p>
                        <span className="text-lg font-bold">Ratings: </span>{" "}
                        {rating}
                    </p>
                    <p>
                        <span className="text-lg font-bold">Price: </span>
                         {price}
                    </p>
                    <div className="card-actions">
                        <Link to={`/${id}`}>
                            <button className="btn btn-success">
                                Show Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MaleHero;
