import React from "react";
import Categories from "../DB/Categories";
import divider from "../../assets/images/divider.png";
const CategorySection = () => {
    return (
        <div>
            <div className="flex flex-col items-center mb-10">
                <h1 className="text-4xl font-oswald font-semibold text-center mt-10 pb-2 tracking-tight">
                    Categories
                </h1>
                <p className="text-md font-light border border-t-slate-300 pt-2 tracking-wide">
                    List of categories that we have. You can choose one of them
                </p>
            </div>
            <section className="container flex flex-wrap justify-between group relative overflow-hidden ">
                {Categories.map((category) => {
                    return (
                        <div className="flex group relative overflow-hidden cursor-pointer md:w-[24%] mb-5">
                            <img
                                src={category.image}
                                alt=""
                                className="h-full w-full transition duration-200 rounded-lg hover:scale-110 z-0 pb-12"
                            />
                            <h2 className="flex w-full text-xl font-oswald font-bold p-3 bg-slate-300 border rounded-b-lg z-10 absolute bottom-0 justify-between items-center">
                                {category.name}
                                <span>
                                    <button className="btn">
                                        View Products
                                    </button>
                                </span>
                            </h2>
                        </div>
                    );
                })}
            </section>
            <div className="container mt-10">
                <img src={divider} alt="" />
            </div>
        </div>
    );
};

export default CategorySection;
