import RoomCard from "../components/room-card/room-card";
import sortRooms from "../hooks/sort-rooms";

export default function Home() {
  // TODO: Get rooms from global context, and then remove the next line:
  const rooms = [];

  const sortedRooms = sortRooms(rooms);

  return (
    <div>
      {sortedRooms?.length ?
        sortedRooms.map(room => <RoomCard {...room} />)
        :
        <div>Searching...</div>
      }
    </div>
  )
}
