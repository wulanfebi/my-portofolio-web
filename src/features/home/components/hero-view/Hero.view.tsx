import { Button } from "@/components/ui/button";
import MyFoto from '@/assets/download (5).jpeg';
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
    return (
        <div className="grid grid-cols-12 gap-5 items-center justify-center">
            <div className="col-span-7 flex flex-col gap-5 justify-start">
                <div className="text-white text-8xl font-bold whitespace-pre-line">
                    {
                        `Intermediate
                        Frontend
                        Developer`
                    }
                </div>
                <Button className="text-white text-lg bg-purple-500 w-40 h-12 flex flex-row items-center justify-center">
                    Let's Talk
                </Button>
            </div>
            {/* <div className="col-span-5 justify-end">
                <img src={MyFoto} className="w-1/2 h-1/2 object-cover rounded-md" />
            </div> */}
        </div>
    );
};
export default Hero;