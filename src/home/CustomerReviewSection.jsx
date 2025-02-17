import CustomerFormCard from '@/components/cards/CustomerFormCard';
import CustomerReviews from '@/components/CustomerReviews';

const CustomerReviewSection = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center p-6">
        <CustomerFormCard />
        <CustomerReviews />
      </div>
    </section>
  );
}

export default CustomerReviewSection