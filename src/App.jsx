import React from "react";
import CategorySection from "./components/CategorySection/CategorySection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
function App() {
    return (
        <div>
            <Header />
            <HeroSection />
            <CategorySection />
            <Footer />
        </div>
    );
}

export default App;
