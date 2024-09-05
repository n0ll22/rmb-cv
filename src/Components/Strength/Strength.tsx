import React from "react";
import ScrollDown from "../ScrollDown/ScrollDown";

const Strength: React.FC = () => {
    function handleScrolling(id: string): void {
        const location = document.getElementById(id);
        if (location) {
            location.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <section
            id="strength"
            className="min-h-screen flex flex-col items-center justify-center bg-slate-800/50 space-y-5 p-2"
        >
            <h1 className="text-4xl text-slate-300 py-10">My Strengths</h1>
            <div className="flex justify-around w-full flex-wrap">
                <div className="w-64">
                    <h2 className="text-xl font-bold bg-slate-200 text-slate-800 rounded-lg py-4 px-2 mb-4">
                        Main Strengths:
                    </h2>
                    <ul className="list-disc text-slate-400">
                        <li className="ml-5">
                            <b>M</b>ongoDB
                        </li>
                        <li className="ml-5">
                            <b>E</b>xpressJS
                        </li>
                        <li className="ml-5">
                            <b>R</b>eactJS + TypeScript
                        </li>
                        <li className="ml-5">
                            <b>N</b>odeJS
                        </li>
                        <li className="ml-5">TailwindCSS</li>
                    </ul>
                </div>
                <div className="w-64">
                    <h2 className="text-xl font-bold bg-slate-200 text-slate-800 rounded-lg py-4 px-2 mb-4">
                        Also Know:
                    </h2>
                    <ul className="list-disc text-slate-400">
                        <li className="ml-5">Java + SpringBoot</li>
                        <li className="ml-5">C# + ASP.NET</li>
                        <li className="ml-5">PHP</li>
                        <li className="ml-5">Python</li>
                        <li className="ml-5">SCSS/SASS</li>
                    </ul>
                </div>
                <div className="w-64">
                    <h2 className="text-xl font-bold bg-slate-200 text-slate-800 rounded-lg py-4 px-2 mb-4">
                        Personality:
                    </h2>
                    <ul className="list-disc text-slate-400">
                        <li className="ml-5">Hard-working</li>
                        <li className="ml-5">Charismatic</li>
                        <li className="ml-5">Collaborative</li>
                        <li className="ml-5">Adaptable</li>
                    </ul>
                </div>
            </div>
            <p className="text-slate-400">
                I am always open to learn something new!
            </p>
            <div className="absolute translate-y-96">
                <ScrollDown handleScrolling={handleScrolling} />
            </div>
        </section>
    );
};

export default Strength;
