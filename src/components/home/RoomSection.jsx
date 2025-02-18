import RoomCard from "@/components/cards/RoomCard";
import React from "react";

const RoomSection = () => {
  const roomInfo = [
    {
      img: "/images/rooms/s.png",
      ac: "₹800",
      nonAc: "₹500",
      guest: "02",
      food: "₹650",
      name: "Single Occupancy",
    },
    {
      img: "/images/rooms/d.png",
      ac: "₹1300",
      nonAc: "₹900",
      guest: "01",
      food: "₹650",
      name: "Double Occupancy",
    },
    {
      img: "/images/rooms/t.png",
      ac: "₹1800",
      nonAc: "₹1250",
      guest: "01",
      food: "₹650",
      name: "Triple Occupancy",
    },
    {
      img: "/images/rooms/q.png",
      ac: "₹2000",
      nonAc: "₹1600",
      guest: "01",
      food: "₹650",
      name: "Quadruple Occupancy",
    },
    {
      img: "/images/rooms/hall.png",
      ac: "₹6000",
      nonAc: "₹4500",
      guest: "01",
      food: "₹650",
      name: "Hall (Capacity for 80-100 pax & 8-10Hrs)",
    },
    {
      img: "/images/rooms/dorm.png",
      ac: "₹400",
      nonAc: "₹300",
      guest: "05",
      food: "₹650",
      name: "Dormitory",
    },
  ];

  return (
    <section className="w-full px-4 py-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-defined-blue text-center">
          Discover Rooms & Suites
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
          {roomInfo.map((room, index) => (
            <RoomCard key={index} roomInfo={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomSection;
