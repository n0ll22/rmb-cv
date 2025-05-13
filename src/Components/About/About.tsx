import React from "react";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation("global");

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-around flex-wrap p-2 pt-10"
    >
      <div className="flex flex-col items-center">
        <div
          className="w-64 h-64 bg-center bg-cover rounded-full"
          style={{
            backgroundImage: 'url("./images/me.png")',
          }}
        ></div>
        <h2 className="text-wrap text-4xl text-slate-300 tracking-widest mt-10">
          {t("about.name")}
        </h2>
      </div>
      <div className="max-w-[500px]">
        <h2 className="text-center text-3xl mb-10 text-slate-300">
          {t("about.introduction.head")}
        </h2>
        <p className="text-color text-slate-400">
          {t("about.introduction.body")}
        </p>
      </div>
    </section>
  );
};

export default About;
