import Api from './index';

export const getRooms = async (data) => await Api.post('/hotels/rooms', data);
