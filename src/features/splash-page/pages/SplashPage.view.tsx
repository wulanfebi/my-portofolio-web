import Home from "@/features/home/pages/Home.view";
import { useEffect, useState } from "react";

const SplashPage = () => {
  const [stage, setStage] = useState<"animate" | "initial">("initial");
  const [showHomePage, setShowHomePage] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextVisible(true);
    }, 300);

    setTimeout(() => {
      setStage("animate");
    }, 1500);

    setTimeout(() => {
      setShowHomePage(true);
    }, 3000);
  }, []);

  if (showHomePage) {
    return (
        <Home />
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors p-8 duration-1000 ease-in-out 
            ${stage === "animate" ? "bg-[#151517]" : "bg-[#6554AF]"}`}
    >
      <h1
        className={`text-white fixed font-semibold transition-all duration-1000 ease-in-out
                    ${textVisible ? "opacity-100" : "opacity-0"}
                    ${
                      stage === "initial"
                        ? "text-7xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        : "text-3xl left-[72px] top-10 translate-x-0 translate-y-0"
                    }`}
      >
        wulan.febi
      </h1>
      {/* {showHomePage && (
                <Home />
            )} */}
    </div>
  );
};

export default SplashPage;
