import React from "react";
import { useTranslation } from "react-i18next";
const Education: React.FC = () => {
    const { t } = useTranslation("global");

    return (
        <section
            id="education"
            className="h-screen flex flex-col items-center justify-center bg-slate-800/50 p-2"
        >
            <img
                className="absolute -z-0 opacity-20"
                src="https://upload.wikimedia.org/wikipedia/commons/7/70/Logo_univpecs.svg"
                alt=""
            />
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-4xl text-slate-300 mb-2 tracking-widest">
                    {t("education.university.name")}
                </h2>
                <h3 className="text-xl text-slate-400 mb-10 tracking-widest">
                    {t("education.university.field")}
                </h3>
                <p className="w-3/4 text-center text-slate-400">
                    {t("education.university.body")}
                </p>
                <p className="mt-10 text-slate-600">
                    {t("education.university.graduation")}
                </p>
            </div>
            <div className="mt-20 text-slate-400">
                <p className="mb-2 text-lg">{t("education.misc.title")}</p>
                <p>{t("education.misc.drivingLicense")}</p>
                <p>{t("education.misc.languageCertification")}</p>
            </div>
        </section>
    );
};

export default Education;
