import React from "react";
import ScrollDown from "../ScrollDown/ScrollDown";
import { useTranslation } from "react-i18next";

const Strength: React.FC = () => {
    const { t } = useTranslation("global");
    const personalityTraits = t("strength.personality.body", {
        returnObjects: true,
    }) as string[];

    console.log(personalityTraits);

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
            <h1 className="text-4xl text-slate-300 py-10">
                {t("strength.title")}
            </h1>
            <div className="flex justify-around w-full flex-wrap">
                <div className="w-64 p-4">
                    <h2 className="text-xl font-bold bg-slate-200 text-slate-800 rounded-lg py-4 px-2 mb-4">
                        {t("strength.main")}
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
                <div className="w-64 p-4">
                    <h2 className="text-xl font-bold bg-slate-200 text-slate-800 rounded-lg py-4 px-2 mb-4">
                        {t("strength.secondary")}
                    </h2>
                    <ul className="list-disc text-slate-400">
                        <li className="ml-5">Java + SpringBoot</li>
                        <li className="ml-5">C# + ASP.NET</li>
                        <li className="ml-5">PHP</li>
                        <li className="ml-5">Python</li>
                        <li className="ml-5">SCSS/SASS</li>
                    </ul>
                </div>
                <div className="w-64 p-4">
                    <h2 className="text-xl font-bold bg-slate-200 text-slate-800 rounded-lg py-4 px-2 mb-4">
                        {t("strength.personality.title")}
                    </h2>
                    <ul className="list-disc text-slate-400">
                        {personalityTraits.map(
                            (trait: string, index: number) => (
                                <li className="ml-5" key={index}>
                                    {trait}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
            <p className="text-slate-400">{t("strength.footnote")}</p>
            <div>
                <div className="">
                    <ScrollDown handleScrolling={handleScrolling} />
                </div>
            </div>
        </section>
    );
};

export default Strength;
