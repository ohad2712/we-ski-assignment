// Important note: this file's name has to be the same as a provider inside the
// `providers` object in the config file.
// Each new provider added has to have both a config object and
// a provider TS file like this one.

import got from 'got';
import { format } from 'date-and-time';

interface RoomResponse {
  siteId: Number;
  dateRange: {
      from: Date;
      to: Date;
  };
  groupSize: Number;
}

const formatDate = (date: Date) => format(new Date(date), 'MM/DD/YYYY');

const _serializeGetRoomBody = ({ siteId, dateRange, groupSize }: RoomResponse) => ({
    query: {
        ski_site: siteId,
        from_date: formatDate(dateRange.from),
        to_date: formatDate(dateRange.to),
        group_size: groupSize
    }
})

function getRooms(options, body) {
    const roomRequest = data => options.api.post(`/HotelsSimulator`, _serializeGetRoomBody(data));

    return Array.from({ 
      length: options.roomSizeLimitationCompareGroupSize
    }).map((_, index) => roomRequest({
      ...body, groupSize: body.groupSize + index
    }));
}

export default (service) => {
  const options = {
    prefixUrl: service.baseAPI,
    // headers: {
    //   Authorization: getTokenFromVault(),
    // },
  };
   
  service.api = got.extend(options);

  return {
      getRooms: body => getRooms(options, body),
      rooms: data => data.body.accommodations || []
  }
}
