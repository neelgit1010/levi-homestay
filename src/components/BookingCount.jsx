import CountUp from "react-countup";

const BookingCount = ({ color, text, number, inView }) => {
  return (
    <div className="flex gap-4 p-4 items-center">
      <div className="xl:text-5xl text-4xl">
        <h1 className={`font-bold ${color}`}>
          {inView ? <CountUp end={number} duration={2} /> : 0}+
        </h1>
      </div>
      <p className=" xl:text-base text-sm">{text}</p>
    </div>
  );
};

export default BookingCount;
