import BannerComponent from "@/components/home/BannerComponent";
import RoomTemplate from "@/components/rooms/RoomTemplate";
import MainTemplate from "@/templates/MainTemplate";

export default function Rooms() {
  return (
    <MainTemplate>
      <BannerComponent />
      <RoomTemplate />
    </MainTemplate>
  );
}
