import { name, future, past, department, email } from "./fake-utils";



import _ from "lodash";

function fakeBookings(count = 5) {
  return _.times(count, (n) => ({
    id: _.uniqueId(),
    name: name,
    bookingDate: future,
    createdOn: past,
  }));
}
