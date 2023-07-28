import { useEffect } from "react";

const setTitle = (title) => {
    useEffect(() => {
        document.title = `AvengerAssemble | ${title}`;
    }, [title]);
};

export default setTitle;
