import CustomerFormCard from '@/components/cards/CustomerFormCard';
import CustomerReviews from '@/components/CustomerReviews';

const CustomerReviewSection = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center p-6">
        <div className="flex w-full flex-col md:flex-row gap-4 justify-center">
          <div className="relative w-[10%] flex justify-center items-center gap-2">
            <div className="md:text-xl text-base font-semibold  md:-rotate-90 text-nowrap absolute md:left-0 lg:-left-6 -top-4 left-[100%] md:top-1/2 lg:top-1/2 md:transform md:-translate-y-1/2">
              <span className="text-defined-green">Since 2002 - 21 years</span>{" "}
              <span className="text-defined-blue">of experience</span>
            </div>
          </div>
          <CustomerFormCard />
        </div>
        <CustomerReviews />
      </div>
    </section>
  );
}

export default CustomerReviewSection