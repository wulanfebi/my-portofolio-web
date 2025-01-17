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

const AboutMe = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-start gap-10 border border-gray-500 bg-[#0b0909] rounded-md px-12 py-7">
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
      <Carousel className="w-[60%]">
        <CarouselContent className="-ml-1">
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <CardComponent title="Core Skill">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardComponent>
          </CarouselItem>
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <CardComponent title="Core Skill">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardComponent>
          </CarouselItem>
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <CardComponent title="Core Skill">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardComponent>
          </CarouselItem>
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <CardComponent title="Core Skill">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardComponent>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default AboutMe;
