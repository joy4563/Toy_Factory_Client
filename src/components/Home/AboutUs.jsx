import person from "../../assets/groot1.jpg";
import parts from "../../assets/ironMan3.jpg";

const AboutUs = () => {
    return (
        <div className="max-w-7xl mx-auto mt-20" data-aos="zoom-in-up">
            <h3 className="mb-10 font-extrabold text-5xl text-center text-sky-500">
                About us
            </h3>
            <div className="hero bg-base-200 p-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div
                        className="lg:w-1/2 relative"
                        data-aos="fade-right"
                        data-aos-offset="500"
                        data-aos-duration="800"
                    >
                        <img
                            src={person}
                            className="w-3/4 rounded-lg shadow-2xl"
                        />
                        <img
                            src={parts}
                            className="w-1/2 absolute right-5 top-1/2 rounded-xl border-8 border-white shadow-2xl"
                        />
                    </div>
                    <div
                        className="lg:w-1/2"
                        data-aos="fade-left"
                        data-aos-offset="500"
                        data-aos-duration="800"
                    >
                        <h1 className="md:text-5xl text-3xl font-bold">
                            Looking for something to proudly display in your
                            collection? 
                        </h1>
                        <p className="py-6 text-justify text-lg">
                            At Avengers Assemble, we believe that every fan,
                            both young and young-at-heart, deserves the chance
                            to experience the thrill of joining Earth's
                            Mightiest Heroes in their quest to protect the world
                            from menacing villains and unimaginable threats.
                            That's why we've curated a vast array of handpicked
                            Avengers toys, ranging from action figures,
                            playsets, and vehicles to collectibles and beyond.
                        </p>

                        <button className="btn btn-warning">
                            Get More Info
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
