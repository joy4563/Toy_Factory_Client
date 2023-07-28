import { Link } from "react-router-dom";
import bannerImg from "./../../assets/all_avengers.jpg";
// 
const Banner = () => {
    return (
        <div className="bg-violet-900 max-w-7xl mx-auto p-5 rounded-xl mt-10">
            <div>
                <div className="md:flex md:items-center">
                    <div className="text-white">
                        <p className="font-bold text-2xl md:text-3xl md:w-3/4 mb-8 p-3 md:p-0">
                            Welcome to {" "}
                            <span className="text-orange-500 text-3xl">
                                Avengers toys,
                            </span>{" "}
                            where dreams and imagination collide!
                        </p>
                        <p className="text-xl md:w-3/4 text-justify mb-8 p-3 md:p-0">
                            Welcome to the Marvel Universe's ultimate
                            destination for all Avengers fans and toy
                            enthusiasts! Prepare to embark on an exhilarating
                            journey as you delve into our extensive collection
                            of Avengers toys that capture the very essence of
                            heroism, camaraderie, and epic adventure.
                        </p>
                        <Link to='/allToys'>
                            <button className="btn bg-blue-500 p-3 mb-4">
                                Explore More
                            </button>
                        </Link>
                    </div>
                    <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <img
                            src={bannerImg}
                            alt=""
                            className="img-fluid p-3  rounded-xl md:p-0 "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

