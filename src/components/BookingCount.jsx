import CountUp from "react-countup";

const BookingCount = ({ color, text, number, inView }) => {
  return (
    <div className="flex gap-4 p-4 items-center">
      <div className="text-5xl">
        <h1 className={`font-bold ${color}`}>
          {inView ? <CountUp end={number} duration={2} /> : 0}+
        </h1>
      </div>
      <p className="w-1/2">{text}</p>
    </div>
  );
};

export default BookingCount;
