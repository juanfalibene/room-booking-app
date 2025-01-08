import rooms from "@/data/rooms.json";
import RoomCard from "@/components/RoomCard";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <>
      <Heading title='Book a Meeting Room' />
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard key={room.id} room={room} />)
      ) : (
        <p>No rooms found.</p>
      )}
    </>
  );
}
