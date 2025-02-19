import CustomerFormCard from "@/components/cards/CustomerFormCard";
import CustomerReviews from "@/components/CustomerReviews";

const CustomerReviewSection = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-6 xl:p-16 lg:p-8 p-4">
        <div className="flex w-full md:w-[40%] flex-row gap-4">
          <div className="relative w-[10%] flex justify-center items-center gap-2">
            <div className="md:text-xl text-base font-semibold  -rotate-90 text-nowrap absolute  top-1/2 lg:top-1/2 ">
              <span className="text-defined-green">Since 2002 - 21 years</span>{" "}
              <span className="text-defined-blue">of experience</span>
            </div>
          </div>
          <div className="w-[90%] flex justify-center items-center">
            <CustomerFormCard />
          </div>
        </div>
        <div className="md:w-[60%] w-full">
          <CustomerReviews />
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewSection;
