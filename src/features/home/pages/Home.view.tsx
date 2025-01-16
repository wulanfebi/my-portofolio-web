import { useEffect, useState } from "react";
import Hero from "../components/hero-view/Hero.view";
import Navbar from "../components/navbar/Navbar.view";
import StainlessGray from "@/assets/stainless-gray.jpeg";

const Home = () => {
  const [isAnimate, setAnimate] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  }, []);
  return (
    <div className="bg-[#0b0909] min-h-screen">
      <div className="bg-[#151517] min-h-[800px] relative overflow-hidden">
        <Navbar />
        <div className=" overflow-y-auto mx-8 px-10 py-9 mt-20 ">
          <div className="absolute right-0 top-[70%] -translate-y-1/4 translate-x-28">
            <img
              src={StainlessGray}
              className={`
                        w-[1260px] h-[1260px] 
                        rounded-full 
                        ${isAnimate && "animate-spin-slow"}
                    `}
            />
          </div>
          <Hero />
        </div>
      </div>
    </div>
  );
};
export default Home;
