import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardComponent from "../card/CardComponent.view";
import {
  AdditionalTechnicalExpertise,
  FrontendDevelopment,
  MobileDevelopment,
  MyCoreSkills,
  ProgrammingLanguages,
} from "./data-sources/aboutMe.source.";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const AboutMe = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  return (
    <div className="w-full h-auto flex flex-col items-start justify-start gap-10 border border-gray-500 bg-[#0b0909] rounded-md px-12 py-9">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-col gap-3">
          <span className="text-3xl bg-clip-text text-transparent bg-gradient-to-br from-[#7e22ce] to-[#f97316] font-semibold">
            About Me
          </span>
          <h2 className="text-white text-5xl font-semibold">WULAN FEBI</h2>
        </div>
        <div className="flex flex-row items-center">
          <div
            className={`h-24 border-2 border-purple-500 rounded-full mr-4`}
          ></div>
          <div className={`text-white  text-sm whitespace-pre-line`}>
            {`Saya adalah siswa dari SMKN 06 Malang
          saya memiliki pengalaman pemrograman selama 3 tahun
          dan kini saya sedang menjalani PKL di Sekawan Media
          sebagai Frontend Developer dan Quality Control.`}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full overflow-hidden">
        <Carousel className="w-[90%] relative">
          <div className="absolute left-0  w-7 h-full bg-gradient-to-r from-[#0b0909] to-transparent z-10" />
          <div className="absolute right-0 w-7 h-full bg-gradient-to-r from-transparent to-[#0b0909] z-10" />
          <CarouselContent className="-ml-1 py-5 px-3">
            <CarouselItem
              className="pl-1 md:basis-1/2 lg:basis-[23%]"
              onMouseEnter={() => setHoveredItem(0)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <CardComponent
                title="Core Skill"
                className={`transition-all duration-300 ${
                  hoveredItem === 0
                    ? "scale-105 shadow-gray-500 shadow-md z-10"
                    : hoveredItem !== null &&
                      hoveredItem !== 0 &&
                      "scale-100 brightness-50"
                }`}
              >
                <ul className="list-disc list-outside px-4">
                  {MyCoreSkills.map((item, index) => (
                    <li key={index} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardComponent>
            </CarouselItem>
            <CarouselItem
              className="pl-1 md:basis-1/2 lg:basis-[23%]"
              onMouseEnter={() => setHoveredItem(1)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <CardComponent
                title="Proficiency in Programming Languages"
                className={`transition-all duration-300 ${
                  hoveredItem === 1
                    ? "scale-105 shadow-gray-500 shadow-md z-10"
                    : hoveredItem !== null &&
                      hoveredItem !== 1 &&
                      "scale-100 brightness-50"
                }`}
              >
                <div className="flex flex-row gap-3 flex-wrap justify-center">
                  {ProgrammingLanguages.map((item) => (
                    <img
                      src={item.image}
                      key={item.name}
                      className="w-16 h-16  rounded-2xl bg-white"
                    />
                  ))}
                </div>
              </CardComponent>
            </CarouselItem>
            <CarouselItem
              className="pl-1 md:basis-1/2 lg:basis-[23%]"
              onMouseEnter={() => setHoveredItem(2)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <CardComponent
                title="Frontend Development"
                className={`transition-all duration-300 ${
                  hoveredItem === 2
                    ? "scale-105 shadow-gray-500 shadow-md z-10"
                    : hoveredItem !== null &&
                      hoveredItem !== 2 &&
                      "scale-100 brightness-50"
                }`}
              >
                <div className="flex flex-row gap-3 flex-wrap justify-center">
                  {FrontendDevelopment.map((item) => (
                    <img
                      src={item.image}
                      key={item.name}
                      className="w-[30%] h-auto rounded-2xl bg-white"
                    />
                  ))}
                </div>
              </CardComponent>
            </CarouselItem>
            <CarouselItem
              className="pl-1 md:basis-1/2 lg:basis-[23%]"
              onMouseEnter={() => setHoveredItem(3)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <CardComponent
                title="Mobile Development"
                className={`transition-all duration-300 ${
                  hoveredItem === 3
                    ? "scale-105 shadow-gray-500 shadow-md z-10"
                    : hoveredItem !== null &&
                      hoveredItem !== 3 &&
                      "scale-100 brightness-50"
                }`}
              >
                <div className="flex flex-row gap-3 flex-wrap justify-center">
                  {MobileDevelopment.map((item) => (
                    <img
                      src={item.image}
                      key={item.name}
                      className="w-[30%] h-auto rounded-2xl bg-white"
                    />
                  ))}
                </div>
              </CardComponent>
            </CarouselItem>
            <CarouselItem
              className="pl-1 md:basis-1/2 lg:basis-[23%]"
              onMouseEnter={() => setHoveredItem(4)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <CardComponent
                title="Additional Technical Expertise"
                className={`transition-all duration-300 ${
                  hoveredItem === 4
                    ? "scale-105 shadow-gray-500 shadow-md z-10"
                    : hoveredItem !== null &&
                      hoveredItem !== 4 &&
                      "scale-100 brightness-50"
                }`}
              >
                <ul className="list-disc list-outside px-4">
                  {AdditionalTechnicalExpertise.map((item, index) => (
                    <li key={index} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardComponent>
            </CarouselItem>
            <CarouselItem
              className="pl-1 md:basis-1/2 lg:basis-[23%]"
              onMouseEnter={() => setHoveredItem(5)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <CardComponent
                title="Soft Skills"
                className={`transition-all duration-300 ${
                  hoveredItem === 5
                    ? "scale-105 shadow-gray-500 shadow-md z-10"
                    : hoveredItem !== null &&
                      hoveredItem !== 5 &&
                      "scale-100 brightness-50"
                }`}
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-separate border-slate-400">
                    <AccordionTrigger>Komunikasi</AccordionTrigger>
                    <AccordionContent>
                      Public speaking, active listening, komunikasi verbal dan
                      non-verbal serta negosiasi
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-separate border-slate-400">
                    <AccordionTrigger>Kerja Sama Tim</AccordionTrigger>
                    <AccordionContent>
                      Kemampuan kolaborasi, berkontribusi dalam kelompok,
                      memberi dan menerima feedback, menjalin hubungan antar
                      anggota tim
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-separate border-slate-400">
                    <AccordionTrigger>Pemecahan Masalah</AccordionTrigger>
                    <AccordionContent>
                      Berpikir kritis, analisis situasi, kreativitas dalam
                      menemukan solusi, kemampuan berpikir logis dan inovatif
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-separate border-slate-400">
                    <AccordionTrigger>Kecerdasan Emosional</AccordionTrigger>
                    <AccordionContent>
                      {` Kesadaran diri (self-awareness), empati, pengendalian emosi,
                    kemampuan membangun hubungan interpersonal`}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardComponent>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-transparent text-white border-none hover:bg-white hover:text-black duration-200" />
          <CarouselNext className="bg-transparent text-white border-none hover:bg-white hover:text-black duration-200" />
        </Carousel>
      </div>
      <div className="flex flex-col items-start justify-center gap-3">
        <p className="text-base text-slate-500">Ingin tahu lebih banyak?</p>
        <Button
          className={`text-white text-lg bg-purple-500  h-12 hover:bg-purple-800 flex flex-row gap-2 items-center justify-center
       transition-all duration-1000`}
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-white text-lg" />
          Lets gooo! Contact me
        </Button>
      </div>
    </div>
  );
};
export default AboutMe;
