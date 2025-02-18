import AboutSection from "@/components/home/AboutSection";
import BannerComponent from "@/components/home/BannerComponent";
import BookandCount from "@/components/home/BookandCount";
import MainTemplate from "@/templates/MainTemplate";

export default function About() {
    return (
      <MainTemplate>
        <BannerComponent />
        <AboutSection />
        <BookandCount />
      </MainTemplate>
    );
}