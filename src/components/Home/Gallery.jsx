import img1 from "../../assets/cap1.jpg";
import img2 from "../../assets/groot1.jpg";
import img3 from "../../assets/groot2.jpg";
import img4 from "../../assets/hulk1.jpg";
import img5 from "../../assets/ironMan1.jpg";
import img6 from "../../assets/ironMan2.jpg";
import img7 from "../../assets/ironMan3.jpg";
import img8 from "../../assets/thanos1.jpg";
import img9 from "../../assets/thor1.jpg";
import img10 from "../../assets/thor2.jpg";

const Gallery = () => {
    return (
        <div className="max-w-7xl mx-auto mt-14 ">
            <h2 className="mb-10 font-extrabold text-5xl text-center">
                Toys <span className="text-sky-500">Gallery</span>
            </h2>
            <marquee
                direction="left"
                className="bg-zinc-300 p-6 rounded-xl"
                scrollamount="20"
                
            >
                <div className="flex gap-5">
                    <img
                        src={img1}
                        alt=""
                        className="w-80 h-48 border border-indigo-950 p-1 rounded-xl"
                    />
                    <img
                        src={img2}
                        alt=""
                        className="w-80 h-48 border border-indigo-950 p-1 rounded-xl"
                    />
                    <img
                        src={img3}
                        alt=""
                        className="w-80 h-48 border border-indigo-950 p-1 rounded-xl"
                    />
                    <img
                        src={img4}
                        alt=""
                        className="w-80 h-48 border border-indigo-950 p-1 rounded-xl"
                    />
                    <img
                        src={img5}
                        alt=""
                        className="w-80 h-48 border border-indigo-950 p-1 rounded-xl"
                    />
                    <img
                        src={img6}
                        alt=""
                        className="w-80 h-48 border border-indigo-950 p-1 rounded-xl"
                    />
                    <img
                        src={img7}
                        alt=""
                        className="w-80 h-48 border border-indigo-950 p-1 rounded-xl"
                    />
                    <img
                        src={img8}
                        alt=""
                        className="w-80 h-48 border border-indigo-950 p-1 rounded-xl"
                    />
                    <img
                        src={img9}
                        alt=""
                        className="w-80 h-48 border border-indigo-950 p-1 rounded-xl"
                    />
                    <img
                        src={img10}
                        alt=""
                        className="w-80 h-48 border border-indigo-950 p-1 rounded-xl"
                    />
                </div>
            </marquee>
            <marquee
                direction="right"
                className="bg-zinc-300 p-6 rounded-xl"
                scrollamount="20"
                
            >
                <div className="flex gap-5">
                    <img
                        src={img1}
                        alt=""
                        className="w-80 h-48 border border-indigo-950 p-1 rounded-xl"
                    />
                    <img
                        src={img2}
                        alt=""
                        className="w-80 h-48 border border-indigo-950 p-1 rounded-xl"
                    />
                    <img
                        src={img3}
                        alt=""
                        className="w-80 h-48 border border-indigo-950 p-1 rounded-xl"
                    />
                    <img
                        src={img4}
                        alt=""
                        className="w-80 h-48 border border-indigo-950 p-1 rounded-xl"
                    />
                    <img
                        src={img5}
                        alt=""
                        className="w-80 h-48 border border-indigo-950 p-1 rounded-xl"
                    />
                    <img
                        src={img6}
                        alt=""
                        className="w-80 h-48 border border-indigo-950 p-1 rounded-xl"
                    />
                    <img
                        src={img7}
                        alt=""
                        className="w-80 h-48 border border-indigo-950 p-1 rounded-xl"
                    />
                    <img
                        src={img8}
                        alt=""
                        className="w-80 h-48 border border-indigo-950 p-1 rounded-xl"
                    />
                    <img
                        src={img9}
                        alt=""
                        className="w-80 h-48 border border-indigo-950 p-1 rounded-xl"
                    />
                    <img
                        src={img10}
                        alt=""
                        className="w-80 h-48 border border-indigo-950 p-1 rounded-xl"
                    />
                </div>
            </marquee>
        </div>
    );
};

export default Gallery;
