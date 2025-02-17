import Image from "next/image"

const BannerComponent = () => {
  return (
    <div
     className="relative w-full h-[200px] bg-cover bg-center bg-no-repeat"
    >
      <Image src="/images/banner.png" alt="banner" width={1920} height={600} />
    </div>
  );
}

export default BannerComponent