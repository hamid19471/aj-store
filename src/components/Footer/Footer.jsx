import React from "react";
import MenuItems from "../DB/MenuItems";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
const Footer = () => {
    return (
        <div>
            <footer className="container flex flex-col md:flex-row items-top justify-between gap-5 border border-t-gray-300 pt-10 w-full mt-10">
                <div className="flex flex-col gap-2 md:w-1/3 ">
                    <div className="flex items-end">
                        <h1 className="text-5xl font-bold font-oswald">AJ</h1>
                        <span className="font-light font-oswald">Store.</span>
                    </div>
                    <p className="text-sm font-light mt-2 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quod. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Quisquam, quod.Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quod.
                    </p>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-xl font-bold font-oswald border border-b-slate-700 border-b-2 pb-2">
                        useful links
                    </h1>
                    <ul className="list-none mt-2">
                        {MenuItems.map((item) => {
                            return (
                                <li
                                    key={item.id}
                                    className="cursor-pointer hover:scale-110 transition duration-200 hover:text-violet-600 text-slate-600 mt-2">
                                    {item.title}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-xl font-bold font-oswald border border-b-slate-700 border-b-2 pb-2">
                        contact us
                    </h1>
                    <ul className="list-none mt-2">
                        <li className="text-slate-600 mt-2 flex items-center gap-2">
                            <BsTelephone className="text-lg text-violet-700" />
                            <span>+91 1234567890</span>
                        </li>
                        <li className="text-slate-600 mt-2 flex items-center gap-2">
                            <CiLocationOn className="text-xl text-violet-700" />
                            <span>Iran, Tehran</span>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
