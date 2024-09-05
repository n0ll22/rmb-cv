import React from "react";

type Props = {
    img: string;
    title: string;
    id: string;
};

const Card: React.FC<Props> = ({ img, title, id }) => {
    return (
        <a
            href={"https://github.com/vinnix169/" + id}
            className="w-64 hover:bg-slate-800 text-slate-500 hover:text-white rounded-xl transition-all hover:scale-105 m-2 p-2"
            target="_blank"
        >
            <img className="rounded-lg w-full" src={img} alt={title} />
            <h4 className="text-center py-2">{title}</h4>
        </a>
    );
};

export default Card;
