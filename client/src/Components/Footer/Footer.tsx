import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";

const Footer: React.FC = () => {
    return (
        <footer
            id="footer"
            className="flex flex-col justify-center items-center min-h-64 p-2"
        >
            <div>
                <h2 className="text-4xl font-medium text-center">
                    Contact me!
                </h2>
                <div className="flex text-4xl justify-center space-x-4 py-2">
                    <a
                        className="flex items-center cursor-pointer"
                        href="https://github.com/vinnix169"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <FaGithubSquare />
                    </a>
                    <a
                        className="flex items-center cursor-pointer"
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=remibende@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <HiOutlineMail />
                    </a>
                    <a
                        className="flex items-center cursor-pointer"
                        href="https://www.facebook.com/remibende22"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaSquareFacebook />
                    </a>
                </div>
            </div>
            <p className="flex items-center">
                <span className="text-3xl mr-1">
                    {" "}
                    <MdContactPhone />
                </span>
                : +36 30 272 6167
            </p>
            <p className="mt-20 w-3/4 text-slate-600">
                If for some reason you wouldn't contact me, please let me know
                why since this is the way I can learn to be a better programmer!
            </p>
            <p className="mt-5 w-3/4 text-slate-600">
                This page was created with Vite React TypeScript by me.
            </p>
        </footer>
    );
};

export default Footer;
