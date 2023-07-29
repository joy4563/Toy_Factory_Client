import { useLoaderData, useParams } from "react-router-dom";

const CategoryDetails = () => {
    const id = useParams().id;
    // console.log(id);
    const allToysInfo = useLoaderData();
    // console.log(allToysInfo);
    const selectedId = allToysInfo.find((n) => n.id == id);
    // console.log(selectedId);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mt-14 container mx-auto">
            <div>
                <p className="font-bold text-4xl text-blue-600 mb-5">
                    {selectedId.title}
                </p>
                <p className="font-bold text-3xl mb-3">{selectedId.name}</p>
                <p className="text-xl">Price: {selectedId.price}</p>
                <p className="text-xl">Quality: {selectedId.quality}</p>
                <p className="mb-5 text-xl">Ratings: {selectedId.rating}</p>
                <p className="font-bold">{selectedId.description}</p>
            </div>
            <div>
                <img src={selectedId.img} alt="" className="rounded-lg" />
            </div>
        </div>
    );
};

export default CategoryDetails;
