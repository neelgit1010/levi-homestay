import RoomCard from '../cards/RoomCard';

const RoomComponent = ({heading, room}) => {
  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <h1 className='text-3xl font-bold text-defined-blue text-center'>{heading}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 p-4">
        {room.map((r, index) => (
          <RoomCard key={index} roomInfo={r} />
        ))}
      </div>
    </div>
  );
}

export default RoomComponent