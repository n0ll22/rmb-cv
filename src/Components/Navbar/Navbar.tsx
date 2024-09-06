import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
    const [t, i18n] = useTranslation("global");

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 750);
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 750);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleJump = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setIsDropdownOpen(false); // Close dropdown after clicking
    };
    return (
        <nav className="fixed flex w-full justify-between z-20 bg-slate-900">
            <div className="w-1/4 flex items-center">
                <h1 className="tracking-widest text-2xl ml-10">RMB</h1>
            </div>

            <div className="flex w-1/4 items-center justify-center">
                <button onClick={() => handleChangeLanguage("en")}>EN</button>
                <p className="mx-2"> | </p>
                <button onClick={() => handleChangeLanguage("hu")}>HU</button>
            </div>

            {isMobileView ? (
                <div className="relative w-1/4">
                    <button
                        onClick={toggleDropdown}
                        className="w-full text-center py-5 cursor-pointer transition hover:bg-slate-800"
                    >
                        Menu
                    </button>
                    {isDropdownOpen && (
                        <ul className="absolute w-full bg-slate-900">
                            <li
                                className={`hover:bg-slate-800 w-full text-center py-5 cursor-pointer transition ${
                                    activeSection === "about"
                                        ? "bg-slate-800"
                                        : ""
                                }`}
                                onClick={() => handleJump("about")}
                            >
                                {t("navbar.options.aboutMe")}
                            </li>
                            <li
                                className={`hover:bg-slate-800 w-full text-center py-5 cursor-pointer transition ${
                                    activeSection === "education"
                                        ? "bg-slate-800"
                                        : ""
                                }`}
                                onClick={() => handleJump("education")}
                            >
                                {t("navbar.options.education")}
                            </li>
                            <li
                                className={`hover:bg-slate-800 w-full text-center py-5 cursor-pointer transition ${
                                    activeSection === "experience"
                                        ? "bg-slate-800"
                                        : ""
                                }`}
                                onClick={() => handleJump("experience")}
                            >
                                {t("navbar.options.experience")}
                            </li>
                            <li
                                className={`hover:bg-slate-800 w-full text-center py-5 cursor-pointer transition ${
                                    activeSection === "strength"
                                        ? "bg-slate-800"
                                        : ""
                                }`}
                                onClick={() => handleJump("strength")}
                            >
                                {t("navbar.options.strength")}
                            </li>
                        </ul>
                    )}
                </div>
            ) : (
                <div className="w-2/4">
                    <ul className="flex justify-around items-center">
                        <li
                            className={`hover:bg-slate-800 w-1/4 text-center py-5 cursor-pointer transition ${
                                activeSection === "about" ? "bg-slate-800" : ""
                            }`}
                            onClick={() => handleJump("about")}
                        >
                            {t("navbar.options.aboutMe")}
                        </li>
                        <li
                            className={`hover:bg-slate-800 w-1/4 text-center py-5 cursor-pointer transition ${
                                activeSection === "education"
                                    ? "bg-slate-800"
                                    : ""
                            }`}
                            onClick={() => handleJump("education")}
                        >
                            {t("navbar.options.education")}
                        </li>
                        <li
                            className={`hover:bg-slate-800 w-1/4 text-center py-5 cursor-pointer transition ${
                                activeSection === "experience"
                                    ? "bg-slate-800"
                                    : ""
                            }`}
                            onClick={() => handleJump("experience")}
                        >
                            {t("navbar.options.experience")}
                        </li>
                        <li
                            className={`hover:bg-slate-800 w-1/4 text-center py-5 cursor-pointer transition ${
                                activeSection === "strength"
                                    ? "bg-slate-800"
                                    : ""
                            }`}
                            onClick={() => handleJump("strength")}
                        >
                            {t("navbar.options.strength")}
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
