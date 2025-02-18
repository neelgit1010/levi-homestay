import RoomComponent from "./RoomComponent";

const RoomTemplate = () => {
  const allRooms = [
    {
      name: "Standard Rooms",
      rooms: [
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
      ],
    },
    {
      name: "Deluxe Rooms",
      rooms: [
        {
          img: "/images/rooms/s1.png",
          ac: "₹1000",
          nonAc: "₹800",
          guest: "01",
          food: "₹650",
          name: "Single Occupancy",
        },
        {
          img: "/images/rooms/d1.png",
          ac: "₹1600",
          nonAc: "₹1200",
          guest: "01",
          food: "₹650",
          name: "Double Occupancy",
        },
        {
          img: "/images/rooms/t1.png",
          ac: "₹2100",
          nonAc: "₹1600",
          guest: "01",
          food: "₹650",
          name: "Triple Occupancy",
        },
        {
          img: "/images/rooms/q1.png",
          ac: "₹2600",
          nonAc: "₹2000",
          guest: "01",
          food: "₹650",
          name: "Quadruple Occupancy",
        },
      ],
    },
    {
      name: "Conference Hall",
      rooms: [
        {
          img: "/images/rooms/hall1.png",
          ac: "₹6000",
          nonAc: "₹4500",
          guest: "01",
          food: "₹650",
          name: "Hall (Capacity for 80-100 pax & 8-10Hrs)",
        },
      ],
    },
    {
      name: "Dormitory Rooms (Charges per person)",
      rooms: [
        {
          img: "/images/rooms/dorm1.png",
          ac: "₹400",
          nonAc: "₹300",
          guest: "05",
          food: "₹650",
          name: "Dormitory",
        },
      ],
    },
    {
      name: "Lawn and Kitchen",
      rooms: [
        {
          img: "/images/rooms/outdoor.png",
          ac: "₹400",
          nonAc: "₹300",
          guest: "05",
          food: "₹650",
          name: "Outdoor",
        },
        {
          img: "/images/rooms/kitchen.png",
          ac: "₹400",
          nonAc: "₹300",
          guest: "05",
          food: "₹650",
          name: "Kitchen",
        },
      ],
    },
  ];
  return (
    <section className="p-6 w-full">
      <div>
        {allRooms.map((rooms) => {
          return (
            <RoomComponent
              key={rooms.name}
              heading={rooms.name}
              room={rooms.rooms}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RoomTemplate;