import { atom } from "recoil";

export const textState = atom({
    key: 'text',
    default: 'Hello',
  });