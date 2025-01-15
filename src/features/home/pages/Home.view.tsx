import Hero from "../components/hero-view/Hero.view";
import Navbar from "../components/navbar/Navbar.view";

const Home = () => {
    return(
        <div className="bg-[#0b0909] min-h-screen">
            <Navbar />
            <div className="bg-[#0b0909] overflow-y-auto mx-8 px-10 py-9 mt-20">
                <Hero />
            </div>
        </div>
    );
};
export default Home;