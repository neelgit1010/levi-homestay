import Image from "next/image";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineGroup } from "react-icons/md";
import { PiHamburgerDuotone } from "react-icons/pi";

const RoomCard = ({ roomInfo }) => {
  const items = [
    {
      icon: <FaRupeeSign />,
      name: "AC",
      value: roomInfo.ac,
    },
    {
      icon: <FaRupeeSign />,
      name: "Non-AC",
      value: roomInfo.nonAc,
    },
    {
      icon: <MdOutlineGroup />,
      name: "Guest",
      value: roomInfo.guest,
    },
    {
      icon: <PiHamburgerDuotone />,
      name: "Food",
      value: roomInfo.food,
    },
  ];
  return (
    <div className="h-[30rem] w-[26rem] rounded-md shadow-lg">
      <div>
        <Image
          src={roomInfo.img}
          alt="single"
          width={500}
          height={500}
        />
      </div>

      <div className="flex justify-between items-center p-4">
        {items &&
          items.map((item, index) => (
            <div className="flex gap-1 flex-col justify-center items-center">
              <div className="text-2xl text-defined-orange">{item.icon}</div>
              <div className="text-defined-blue">{item.name}</div>
              <div className="text-defined-blue">{item.value}</div>
            </div>
          ))}
      </div>

      <div className="flex flex-col justify-center items-center gap-3">
        <div>
          <h1 className="text-defined-blue text-3xl font-semibold text-center">{roomInfo.name}</h1>
        </div>
        <button
          // onClick={toggleAppointmentModal}
          className="bg-defined-green text-white py-2 px-8 rounded-sm transition-all duration-300 font-semibold hover:bg-green-700 w-[90%]"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
