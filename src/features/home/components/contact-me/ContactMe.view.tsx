import { Button } from "@/components/ui/button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactMe = () => {
  return (
    <div className="w-full h-auto grid grid-cols-4 items-start justify-start gap-5 border border-gray-500 bg-[#0b0909] rounded-md px-12 py-9">
      <div className="col-span-2 flex flex-col gap-3 justify-center">
        <span className="text-3xl bg-clip-text text-transparent bg-gradient-to-br from-[#7e22ce] to-[#f97316] font-semibold">
          Contact Me
        </span>
        <h2 className="text-white text-5xl font-semibold">
          SCHEDULE A MEETING
        </h2>
        <div className="flex flex-row mt-7">
          <form className="w-full gap-4 flex flex-col">
            <input
              name="fullname"
              type="text"
              placeholder="Fullname"
              className="w-full text-white bg-transparent h-10 border-b border-gray-500 my-2 py-3 px-2 focus:outline-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full text-white bg-transparent h-10 border-b border-gray-500 my-2 py-3 px-2 focus:outline-none"
            />
            <input
              name="message"
              type="text"
              placeholder="Message"
              className="w-full text-white bg-transparent h-10 border-b border-gray-500 my-2 py-3 px-2 focus:outline-none"
            />
            <Button
              className={`text-white text-lg bg-purple-500 mt-5 h-12 hover:bg-purple-800 flex flex-row gap-2 items-center justify-center
                       transition-all duration-1000`}
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-white text-lg"
              />
              Submit
            </Button>
          </form>
        </div>
      </div>
      <div className="col-span-2 px-4 flex flex-col gap-3 justify-center items-center">
        <div className="w-full h-24 items-center justify-center flex flex-row gap-3">
          <div className="w-10 h-10 rounded-full bg-[#7e22ce] flex flex-row items-center justify-center">
            <FontAwesomeIcon
              icon={"instagram"}
              className="text-white text-3xl"
            />
          </div>
          <p className="text-white text-3xl font-semibold z-20">wulan.febi</p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
