import { useInView } from "react-intersection-observer";
import BookingHoliday from "../BookingHoliday";
import BookingCount from "../BookingCount";

const BookandCount = () => {
  const countings = [
    {
      number: 20,
      text: "Years of Trust & Experience",
      color: "text-defined-green",
    },
    {
      number: 10,
      text: "Attractive Rooms Available",
      color: "text-defined-orange",
    },
    {
      number: 1210,
      text: "4.9 Star Reviews by Customers",
      color: "text-defined-green",
    },
    { number: 1000, text: "Satisfied Customer", color: "text-defined-orange" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section ref={ref}>
      <div className="flex flex-col items-center justify-center gap-4 p-8">
        <BookingHoliday />

        <div className="p-6 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4  gap-4 justify-center items-center">
          {countings.map((item, index) => (
            <BookingCount
              key={index}
              color={item.color}
              text={item.text}
              number={item.number}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookandCount;
