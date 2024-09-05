import React from "react";
import Card from "../Card/Card";

const Experience: React.FC = () => {
    return (
        <section
            id="experience"
            className="min-h-screen flex flex-col items-center justify-center p-2"
        >
            <h2 className="text-4xl text-slate-300 mb-2 tracking-widest">
                Experience
            </h2>
            <h3 className="text-xl text-slate-400 mb-10 tracking-widest">
                Take a look at my private projects!
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
