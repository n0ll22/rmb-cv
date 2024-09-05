import React from "react";
import { FaCircleChevronDown } from "react-icons/fa6";

interface Props {
    handleScrolling(id: string): void;
}

const ScrollDown: React.FC<Props> = ({ handleScrolling }) => {
    return (
        <button
            className="text-4xl animate-bounce"
            onClick={() => handleScrolling("footer")}
        >
            <FaCircleChevronDown />
        </button>
    );
};

export default ScrollDown;
