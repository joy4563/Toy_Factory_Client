import React, { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FemaleHero from "./FemaleHero";
import Villains from "./Villains";
import MaleHero from "./MaleHero";

const Catagories = () => {
    const [categories, setCategories] = useState([]);
    const [villains, setVillains] = useState([]);
    const [femaleHero, setFemaleHero] = useState([]);
    const [maleHero, setMaleHero] = useState([]);

    useEffect(() => {
        fetch("toys.json")
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    useEffect(() => {
        const selectedVillain = categories.filter(
            (category) => category.subCategory === "villain"
        );
        const selectedfFemaleHero = categories.filter(
            (category) => category.subCategory === "femaleHero"
        );
        const selectedMaleHero = categories.filter(
            (category) => category.subCategory === "maleHero"
        );

        setVillains(selectedVillain);
        setFemaleHero(selectedfFemaleHero);
        setMaleHero(selectedMaleHero);
    }, [categories]);
    // console.log(femaleHero);

    return (
        <div className="max-w-7xl mx-auto mt-20" data-aos="zoom-in-up">
            <h2 className="text-4xl text-center font-bold mb-10">
                Categ<span className="text-orange-500">ories</span>
            </h2>
            
            <div className="px-5 mx-auto flex items-center content-center">
                <Tabs>
                <TabList>
                    <Tab>Hero</Tab>
                    <Tab>Heroin</Tab>
                    <Tab>Villain</Tab>
                </TabList>

                <TabPanel>
                    <div className="flex flex-col md:flex-row gap-4">
                        {maleHero.map((male) => (
                            <MaleHero key={male.id} male={male}></MaleHero>
                        ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="flex flex-col md:flex-row gap-4">
                        {femaleHero.map((female) => (
                            <FemaleHero
                                key={female.id}
                                female={female}
                            ></FemaleHero>
                        ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="flex flex-col md:flex-row gap-4">
                        {villains.map((villain) => (
                            <Villains
                                key={villain.id}
                                villain={villain}
                            ></Villains>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default Catagories;
