import Hero from "@/features/home/components/hero-view/Hero.view";
import { useEffect, useState } from "react";

const SplashPage = () => {
    const [stage, setStage] = useState<'animate' | 'initial'>('initial');
    const [showHomePage, setShowHomePage] = useState(false);
    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTextVisible(true);
        }, 300);

        setTimeout(() => {
            setStage('animate');
        }, 1500);

        setTimeout(() => {
            setShowHomePage(true);
        }, 3000);
    }, []);

    return(
        <div className={`min-h-screen transition-colors p-8 duration-1000 ease-in-out 
            ${stage === 'animate' ? 'bg-[#0b0909]' : 'bg-[#6554AF]'}`}
        >
            <h1 
                className={`text-white fixed font-semibold transition-all duration-1000 ease-in-out
                    ${textVisible ? 'opacity-100' : 'opacity-0'}
                    ${stage === 'initial' 
                        ? 'text-7xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' 
                        : 'text-3xl left-8 top-8 translate-x-0 translate-y-0'
                    }`}
            >
                wulan.febi
            </h1>
            {showHomePage && (
                <div className="min-h-screen mt-20 bg-[#0b0909] transition-opacity duration-500 ease-in-out">
                    <Hero/>
                </div>
            )}
        </div>
    );
};

export default SplashPage;