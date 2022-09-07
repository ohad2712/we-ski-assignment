import {useMemo} from "react";

export default function sortRooms(rooms) {
    const sortedRooms = rooms.sort((a,b) => a.PricesInfo.AmountAfterTax - b.PricesInfo.AmountAfterTax)
    
    return sortedRooms;
}
