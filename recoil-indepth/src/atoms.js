import { atom } from "recoil";

export const notificationAtom = atom({
  key: "notificationAtom",
  default: {
    networks: 102,
    jobs: 0,
    messaging: 200,
    notifications: 12,
  },
});

//to fetch the notifications from backend, which will be done in almist all cases generally
//the default value can be a slector having a key and get function that sends async request to backend
