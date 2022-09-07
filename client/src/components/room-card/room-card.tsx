import Button from '../button/button';


export default function RoomCard({ HotelDescriptiveContent, HotelName, HotelInfo, PricesInfo }) {
  const hotelPic = HotelDescriptiveContent.Images[0].URL;
  const { Beds, Rating } = HotelInfo;

  return (
    <div>
      <figure>
        <img src={hotelPic} alt="hotel image" />
      </figure>

      <div className='room__details'>
        <div className='room__details--desc'>
          <p className='title'>{HotelName}</p>
          <p className='property'>{Array.from({ length: Number(Rating) }).map(() => <span>*</span>)}</p>
          <p className='property'><span>Bed(s)</span> <span>{Beds}</span></p>
        </div>

        <div className='room__details--purchase'>
          <p className='title'>&euro;{PricesInfo.AmountAfterTax}</p>
          <small>Total price per person</small>
          <Button disabled='false'>View Details</Button>
        </div>
      </div>
    </div>
  )
}
