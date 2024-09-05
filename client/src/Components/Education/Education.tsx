import React from "react";
const Education: React.FC = () => {
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
                    University of Pécs
                </h2>
                <h3 className="text-xl text-slate-400 mb-10 tracking-widest">
                    Computer Science BSc
                </h3>
                <p className="w-3/4 text-center text-slate-400">
                    Thanks to my University, I have gained some experience in
                    many programming languages since 2022. I have always been a
                    diligent student, and always passed in all IT subjects. I
                    expect only one year until graduation, and I would stay at
                    your company too!
                </p>
                <p className="mt-10 text-slate-600">
                    Expected Graduation: 2025 summer
                </p>
            </div>
            <div className="mt-20 text-slate-400">
                <p className="mb-2 text-lg">I also have:</p>
                <p>Level B2 Complex Language Certificate in English</p>
                <p>Level B driving licence since 2021</p>
            </div>
        </section>
    );
};

export default Education;
