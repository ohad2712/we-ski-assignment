"use strict";
// Important note: this file's name has to be the same as a provider inside the
// `providers` object in the config file.
// Each new provider added has to have both a config object and
// a provider TS file like this one.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const got_1 = __importDefault(require("got"));
const date_and_time_1 = require("date-and-time");
const formatDate = (date) => (0, date_and_time_1.format)(new Date(date), 'MM/DD/YYYY');
const _serializeGetRoomBody = ({ siteId, dateRange, groupSize }) => ({
    query: {
        ski_site: siteId,
        from_date: formatDate(dateRange.from),
        to_date: formatDate(dateRange.to),
        group_size: groupSize
    }
});
function getRooms(options, body) {
    const roomRequest = data => options.api.post(`/HotelsSimulator`, _serializeGetRoomBody(data));
    return Array.from({
        length: options.roomSizeLimitationCompareGroupSize
    }).map((_, index) => roomRequest({
        ...body, groupSize: body.groupSize + index
    }));
}
exports.default = (service) => {
    const options = {
        prefixUrl: service.baseAPI,
        // headers: {
        //   Authorization: getTokenFromVault(),
        // },
    };
    service.api = got_1.default.extend(options);
    return {
        getRooms: body => getRooms(options, body),
        rooms: data => data.body.accommodations || []
    };
};
