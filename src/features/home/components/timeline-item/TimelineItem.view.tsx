import { motion } from 'framer-motion';
import { EducationBackgroundType } from '../education-background/models/educationBackground.type';
import { useInView } from 'react-intersection-observer';

const TimelineItem = ({
  data,
  index,
}: {
  data: EducationBackgroundType;
  index: number;
}) => {
  const [ref, inView] = useInView({
    threshold: 0.7,
    triggerOnce: false,
  });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.3, y: 20 }}
      animate={{
        opacity: inView ? 1 : 0.3,
        y: inView ? 0 : 20,
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative mb-16 last:mb-0 grid grid-cols-2 items-center ${
        isEven ? 'justify-end' : 'justify-start'
      }`}
    >
      {isEven && (
        <div className="relative w-[400px] h-44 mr-4">
          {/* Blurred background */}
          <div className={`absolute ${!inView && 'hidden'} transition-all duration-200 inset-0 bg-purple-500 rounded-lg blur-lg transform scale-105 opacity-70`} />

          {/* Main card */}
          <div className={`relative ${!inView && 'bg-transparent'} transition-all duration-200 h-full w-full bg-purple-500 rounded-lg p-0.5`}>
            <div className={`relative ${!inView && 'bg-transparent'} transition-all duration-200 h-full w-full bg-purple-400 rounded-lg px-4 py-6 flex flex-col items-end text-white ${!inView && 'text-gray-700'}`}>
              <p className="font-medium mb-2">{data.period}</p>
              <h3 className="text-xl font-semibold mb-2">{data.institution}</h3>
              <p className="text-sm text-end">{data.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Circle on timeline */}
      <motion.div
        initial={{ scale: 0.5, backgroundColor: '#e5e7eb' }}
        animate={{
          scale: inView ? 1 : 0.5,
          backgroundColor: inView ? '#8b5cf6' : '#e5e7eb',
        }}
        transition={{ duration: 0.5 }}
        className="absolute left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-2"
      />

      {/* Content for odd numbers (right side) */}
      {!isEven && (
        <div className="relative col-start-2 w-[400px] h-44 ml-4">
          {/* Blurred background */}
          <div className={`${!inView && 'hidden'} transition-all duration-200 absolute inset-0 bg-purple-500 rounded-lg blur-lg transform scale-105 opacity-70`} />

          {/* Main card */}
          <div className={`${!inView && 'bg-transparent'} transition-all duration-200 relative h-full w-full bg-purple-500 rounded-lg p-0.5`}>
            <div className={`relative h-full ${!inView && 'bg-transparent'} transition-all duration-1000 w-full bg-purple-400 rounded-lg px-4 py-6 flex flex-col items-start text-white ${!inView && 'text-gray-700'}`}>
              <p className="font-medium mb-2">{data.period}</p>
              <h3 className="text-xl font-semibold mb-2">{data.institution}</h3>
              <p className="text-sm">{data.description}</p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default TimelineItem;