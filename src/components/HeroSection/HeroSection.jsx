import React from "react";
import gift from "../../assets/images/gift.jpg";
import handicraft from "../../assets/images/handicraft.jpg";
import drink from "../../assets/images/drink-stuff.jpg";
import divider from "../../assets/images/divider.png";

const HeroSection = () => {
    return (
        <div>
            <section className="container flex flex-col md:max-h-80 md:flex-row gap-3 mt-10">
                <div className="flex flex-col gap-3">
                    <div className="flex-1 flex gap-2 overflow-hidden rounded-md">
                        <img
                            src={gift}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1 flex gap-2 overflow-hidden rounded-md">
                        <img
                            src={handicraft}
                            alt=""
                            className="hidden md:block w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex gap-2 overflow-hidden rounded-md">
                    <div className="flex-1">
                        <img
                            src={drink}
                            alt=""
                            className="hidden md:block w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="hidden md:flex container mt-10">
                <img src={divider} alt="" />
            </section>
        </div>
    );
};

export default HeroSection;
