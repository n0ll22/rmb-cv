import React from "react";
import Card from "../Card/Card";
import { useTranslation } from "react-i18next";

const Experience: React.FC = () => {
    const { t } = useTranslation("global");
    return (
        <section
            id="experience"
            className="min-h-screen flex flex-col items-center justify-center p-2"
        >
            <h2 className="text-4xl text-slate-300 mb-2 tracking-widest">
                {t("experience.head")}
            </h2>
            <h3 className="text-xl text-slate-400 mb-10 tracking-widest">
                {t("experience.body")}
            </h3>
            <div className="flex flex-wrap items-center justify-center">
                <Card
                    img="assets\Images\dnd.jpg"
                    title={"Household DnD"}
                    id="HouseholdDnD"
                />
                <Card
                    img="assets\Images\hamburger.jpeg"
                    title={"Calorie Calculator"}
                    id="Calorie-Calculator"
                />
                <Card
                    img="assets\Images\wallofshame.png"
                    title={"Wall of Shame"}
                    id="HallOfShame
"
                />
            </div>
        </section>
    );
};

export default Experience;
