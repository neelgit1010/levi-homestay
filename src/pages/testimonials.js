import BannerComponent from "@/components/home/BannerComponent";
import CustomerReviewSection from "@/components/home/CustomerReviewSection";
import HotelSection from "@/components/home/HotelSection";
import MainTemplate from "@/templates/MainTemplate";

export default function Testimonials() {
  return (
    <MainTemplate>
      <BannerComponent />
      <div className="flex flex-col gap-8 mt-8">
        <HotelSection />
        <CustomerReviewSection />
      </div>
    </MainTemplate>
  );
}
