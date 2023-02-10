import React from "react";
import MenuItems from "../DB/MenuItems";
import { CiShoppingBasket } from "react-icons/ci";

const Header = () => {
    return (
        <div>
            <header className="flex container items-center justify-between mt-8">
                <div className="flex items-end gap-1">
                    <h1 className="text-3xl font-bold font-oswald">AJ</h1>
                    <span className="font-light font-oswald">Store.</span>
                </div>
                <div className="flex list-none gap-10">
                    {MenuItems.map((item) => {
                        return (
                            <li
                                key={item.id}
                                className="cursor-pointer hover:scale-110 transition duration-200 hover:text-violet-600">
                                {item.title}
                            </li>
                        );
                    })}
                </div>
                <div className="relative cursor-pointer">
                    <CiShoppingBasket className="text-3xl" />
                    <span className="absolute -top-2 right-0 left-5 bottom-0 flex items-center justify-center w-2 h-2 bg-violet-500 text-ms p-3 rounded-full text-white">
                        0
                    </span>
                </div>
            </header>
        </div>
    );
};

export default Header;
