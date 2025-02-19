import Image from "next/image";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

const CustomerReviews = () => {
  const reviews = [
    {
      review:
        " I had an amazing experience staying at Levi Homestay in Siliguri! From the moment I arrived, I was welcomed with warmth and hospitality. The rooms were clean, spacious, and well-maintained, offering both AC and Non-AC options to suit different budgets. The atmosphere was peaceful, making it the perfect place to relax after a long journey. What truly sets Levi Homestay apart is their exceptional service—the staff was incredibly friendly and always ready to help with anything I needed. The location was also convenient, with easy access to local attractions and transport. Whether you're traveling for business or leisure, Levi Homestay is the best place to stay in Siliguri. It truly felt like a home away from home. I highly recommend it to anyone looking for a comfortable and affordable stay. Can’t wait to visit again!",
      name: "— Ramesh S.",
    },
    {
      review:
        "Staying at Levi Homestay was one of the best decisions I made during my visit to Siliguri. The rooms were spotless, comfortable, and well-furnished, with the option of both AC and Non-AC accommodations. The staff was incredibly polite and helpful, always ensuring I had everything I needed. The homestay had a peaceful ambiance, making it a perfect retreat after a long day of traveling. I also loved how conveniently located it was, with easy access to public transport and major attractions. If you're looking for a budget-friendly yet cozy place to stay in Siliguri, Levi Homestay is the place to be. Highly recommended!",
      name: "— Amit S.",
    },
    {
      review:
        "Levi Homestay exceeded my expectations! From the moment I arrived, I felt welcomed and at home. The rooms were spacious, well-maintained, and extremely comfortable, whether you choose an AC or Non-AC option. The staff was friendly and accommodating, always ready to assist with anything I needed. I especially appreciated how clean and peaceful the entire property was. The location is also a big plus—close to everything yet tucked away from the hustle and bustle. If you're in Siliguri and need a reliable, comfortable, and affordable place to stay, look no further than Levi Homestay!",
      name: "— Priya M.",
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    rtl: true,
  };
  return (
    <div className="  flex flex-col gap-4">
      <p className="text-defined-green text-xl mt-2">Genuine Reviews</p>
      <h1 className="text-3xl text-defined-blue font-bold">
        Customer talk about us
      </h1>
      <div className="flex gap-8">
        <div className="flex gap-2">
          <Image
            src="/images/apostrophee.png"
            alt="apostrophee"
            width={40}
            height={40}
          />
          <Image
            src="/images/apostrophee.png"
            alt="apostrophee"
            width={40}
            height={40}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl text-defined-blue">
            Best Quality Service Rooms
          </h1>
          <Image
            src="/images/stars.png"
            alt="apostrophee"
            width={150}
            height={150}
          />
        </div>
      </div>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index}>
            <p className="text-gray-500 lg:text-base text-sm">
              {review.review}
            </p>
            <h1 className="lg:text-2xl text-xl text-defined-orange">
              {review.name}
            </h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerReviews;
