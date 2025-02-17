import AboutSection from "@/home/AboutSection";
import BannerComponent from "@/home/BannerComponent";
import BookandCount from "@/home/BookandCount";
import CustomerReviewSection from "@/home/CustomerReviewSection";
import HotelSection from "@/home/HotelSection";
import RoomSection from "@/home/RoomSection";
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