import Image from "next/image";

const HomeStayImg = () => {
  return (
    <div className="h-auto flex justify-center">
      <Image
        src="/images/book-form.png"
        alt="book-form"
        width={556}
        height={537}
        className="w-auto h-auto"
      />
    </div>
  );
};

export default HomeStayImg;
