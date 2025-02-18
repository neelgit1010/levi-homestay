import ContactInfoSection from "@/components/contact/ContactInfoSection";
import BannerComponent from "@/components/home/BannerComponent";
import MainTemplate from "@/templates/MainTemplate";

export default function Contact() {
  return (
    <MainTemplate>
      <BannerComponent />
      <ContactInfoSection />
    </MainTemplate>
  );
}
