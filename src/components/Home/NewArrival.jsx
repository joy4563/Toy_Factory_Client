import React from "react";
import img2 from "../../assets/groot1.jpg";
import img3 from "../../assets/groot2.jpg";
import img4 from "../../assets/hulk1.jpg";
import img5 from "../../assets/ironMan1.jpg";
import img6 from "../../assets/thanos2.jpg";
import img7 from "../../assets/ironMan3.jpg";
import img8 from "../../assets/chitaru.jpg";
import img9 from "../../assets/modok.jpg";



const NewArrival = () => {
    return (
        <div className="mt-3 container mx-auto">
            {" "}
            <h2 className="mb-10 font-extrabold text-5xl text-center">
                New <span className="text-sky-500">Arrival</span>
            </h2>
            <div className="grid  justify-items-center	 sm:grid-cols-2  lg:grid-cols-4 ">
                <img
                    src={img2}
                    alt=""
                    className="h-[50vh] w-[50vh] lg:h-[25vh] lg:w-[25vh] rounded-lg border border-blue-800 mb-3"
                />
                <img
                    src={img3}
                    alt=""
                    className="h-[50vh] w-[50vh] lg:h-[25vh] lg:w-[25vh] rounded-lg border border-blue-800 mb-3"
                />
                <img
                    src={img4}
                    alt=""
                    className="h-[50vh] w-[50vh] lg:h-[25vh] lg:w-[25vh] rounded-lg border border-blue-800 mb-3"
                />
                <img
                    src={img5}
                    alt=""
                    className="h-[50vh] w-[50vh] lg:h-[25vh] lg:w-[25vh] rounded-lg border border-blue-800 mb-3"
                />
                <img
                    src={img6}
                    alt=""
                    className="h-[50vh] w-[50vh] lg:h-[25vh] lg:w-[25vh] rounded-lg border border-blue-800 mb-3"
                />
                <img
                    src={img7}
                    alt=""
                    className="h-[50vh] w-[50vh] lg:h-[25vh] lg:w-[25vh] rounded-lg border border-blue-800 mb-3"
                />
                <img
                    src={img8}
                    alt=""
                    className="h-[50vh] w-[50vh] lg:h-[25vh] lg:w-[25vh] rounded-lg border border-blue-800 mb-3"
                />
                <img
                    src={img9}
                    alt=""
                    className="h-[50vh] w-[50vh] lg:h-[25vh] lg:w-[25vh] rounded-lg border border-blue-800 mb-3"
                />
            </div>
        </div>
    );
};

export default NewArrival;
