import TimelineItem from "../timeline-item/TimelineItem.view";
import { educationBackgroundData } from "./data-source/educationBackground.source";

const EducationHistory = () => {
  return (
    <div className="flex w-full h-auto py-5 flex-col items-start justify-center gap-5">
      <div className="flex flex-col gap-3 mx-20">
        <span className="text-3xl bg-clip-text text-transparent bg-gradient-to-br from-[#7e22ce] to-[#f97316] font-semibold">
          Educational
        </span>
        <h2 className="text-white text-5xl font-semibold">BACKGROUND</h2>
      </div>
      <div className="flex justify-center items-center w-full overflow-hidden">
        <div className="relative py-7">
          {/* Vertical line - centered */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -ml-0.5" />

          {educationBackgroundData.map((item, index) => (
            <TimelineItem
              key={index}
              data={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default EducationHistory;
