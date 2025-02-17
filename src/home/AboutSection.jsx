import HomeStayContent from "@/components/HomeStayContent";
import HomeStayImg from "@/components/HomeStayImg";

const AboutSection = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center p-6">
        <HomeStayImg />
        <HomeStayContent />
      </div>
    </section>
  );
};

export default AboutSection;
