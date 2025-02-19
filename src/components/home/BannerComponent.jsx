import { useRouter } from "next/router";
import Image from "next/image";

const BannerComponent = () => {
  const router = useRouter();

  const pageData = {
    "/contact": { title: "Contact Us", path: "Home / Contact" },
    "/about": { title: "About Us", path: "Home / About" },
    "/rooms": { title: "Rooms", path: "Home / Rooms" },
    "/testimonials": { title: "Testimonials",path: "Home / Testimonials"},
  };

  // this is default for home page only
  const { title, path } = pageData[router.pathname] || {
    title: "",
    path: "",
  };

  return (
    <div className="w-full h-auto relative">
      <Image
        src="/images/banner.png"
        alt="banner"
        width={1920}
        height={500}
        className="w-full h-[20rem] object-cover"
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
