import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import InteractiveImage from "../interactive-image/InteractiveImage.view";
import { useEffect, useState } from "react";
const Hero = () => {
    const  [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimate(true);
        }, 400);
    }, []);

    return (
        <div className="grid grid-cols-12  gap-3 min-h-[670px] items-center justify-center z-10">
            <div className="col-span-7 flex flex-col gap-5 justify-start">
                <div className={`text-white text-8xl transition-all duration-200 font-bold whitespace-pre-line leading-tight ${animate ? 'opacity-100' : 'opacity-0'}`}>
                    {
                        `Hi, I'm a Frontend
                        Developer`
                    }
                </div>
                <div className="flex flex-row gap-5 items-center">
                    <div className={`h-16 border border-purple-500 rounded-full ${animate ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}></div>
                    <div className={`text-white font-light text-sm whitespace-pre-line ${animate ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}>
                        {
                            `Hai! Saya seorang penggemar coding, terutama di frontend development, 
                            dan sedikit menguasai mobile development. Saya selalu senang belajar dan 
                            mengeksplorasi hal baru. Terima kasih sudah mampir ke portofolio saya!`
                        }
                    </div>
                </div>
                <Button className={`text-white text-lg my-9 bg-purple-500 w-40 h-12 hover:bg-purple-800 flex flex-row gap-2 items-center justify-center ${animate ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}>
                    <FontAwesomeIcon icon={faArrowRight} className="text-white text-lg" />
                    Let's Talk
                </Button>
            </div>
            <div className="col-span-5 justify-center">
                <InteractiveImage />
            </div>
            <p className={`text-gray-500 whitespace-nowrap text-base mb-20 ${animate ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}>Based in Malang, Indonesia</p>
        </div>
    );
};

export default Hero;
