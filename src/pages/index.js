import AboutSection from "@/components/home/AboutSection";
import BannerComponent from "@/components/home/BannerComponent";
import BookandCount from "@/components/home/BookandCount";
import CustomerReviewSection from "@/components/home/CustomerReviewSection";
import HotelSection from "@/components/home/HotelSection";
import RoomSection from "@/components/home/RoomSection";
import MainTemplate from "@/templates/MainTemplate";

export default function Home() {
  return (
    <>
        <MainTemplate>
            <BannerComponent />
            <BookandCount />
            <AboutSection />
            <RoomSection />
            <HotelSection />
            <CustomerReviewSection />
        </MainTemplate>
    </>
  )
}