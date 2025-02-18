import CustomerFormCard from '@/components/cards/CustomerFormCard';
import CustomerReviews from '@/components/CustomerReviews';

const CustomerReviewSection = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center p-6">
        <div className="flex w-full">
          <div className="relative w-[10%] flex justify-center items-center">
            <div className="md:text-xl text-base font-semibold  -rotate-90 text-nowrap absolute transform -translate-y-1/2">
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