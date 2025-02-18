import { useRouter } from "next/router";
import Image from "next/image";

const BannerComponent = () => {
  const router = useRouter();

  // Mapping route paths to titles and paths
  const pageData = {
    "/contact": { title: "Contact Us", path: "Home / Contact" },
    "/about": { title: "About Us", path: "Home / About" },
    "/rooms": { title: "Rooms", path: "Home / Rooms" },
    "/testimonials": { title: "Testimonials",path: "Home / Testimonials"},
  };

  // Get page details, fallback to a default title if not found
  const { title, path } = pageData[router.pathname] || {
    title: "",
    path: "",
  };

  return (
    <div className="w-full relative">
      <Image
        src="/images/banner.png"
        alt="banner"
        width={1920}
        height={600}
        className="w-full h-auto object-cover"
      />

      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="absolute inset-0 flex justify-center items-center flex-col text-white z-10">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p>{path}</p>
      </div>
    </div>
  );
};

export default BannerComponent;
