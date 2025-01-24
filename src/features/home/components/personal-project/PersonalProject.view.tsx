import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PersonalProjectImage } from "./data-sources/personalProject";
import { useEffect, useState } from "react";

const PersonalProject = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);    
  return (      
    <div className="flex mt-12 w-full h-auto py-5 flex-col items-start justify-center gap-5">
      <div className="flex flex-col gap-3 mx-20">
        <span className="text-3xl bg-clip-text text-transparent bg-gradient-to-br from-[#7e22ce] to-[#f97316] font-semibold">
          Portofolio
        </span>
        <h2 className="text-white text-5xl font-semibold">PERSONAL PROJECT</h2>
      </div>
      <Carousel
        opts={{ loop: true }}
        className="w-[92%] py-3 mx-auto relative"
        setApi={setApi}
      >
        <div className="absolute left-0  w-7 h-full bg-gradient-to-r from-[#0b0909] to-transparent z-10" />
        <div className="absolute right-0 w-7 h-full bg-gradient-to-r from-transparent to-[#0b0909] z-10" />
        <CarouselContent className="-ml-1 py-9">
          {PersonalProjectImage.map((item, index) => (
            <CarouselItem
              className="pl-1 md:basis-1/2 lg:basis-[32%]"
              key={index}
              onClick={() => api?.scrollTo(index)}
            >
              <div
                className={`w-[550px] h-[400px] rounded-lg cursor-pointer transition-all border-2 border-gray-500 shadow-md duration-500  ${
                  current === index ? "scale-105" : "scale-90 brightness-50"
                }`}
              >
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src={item.src}
                  alt={item.name}
                />
              </div>
              {current === index && (
                <div className="text-center mt-7 text-sm text-muted-foreground">
                  Project {current + 1}
                </div>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
export default PersonalProject;
