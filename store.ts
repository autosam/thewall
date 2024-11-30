import { atom, useAtom } from "jotai";
import { Gender, Genders } from "./types/Gender";
import { CLIENT_GENDER_KEY } from "./components/ClientSetup/ClientSetup.consts";
import { TalkData } from "./types/TalkData";

export const userIdAtom = atom<string>("");

const getInitialGender = (): Gender => {
  try {
    const storedGender = localStorage.getItem(CLIENT_GENDER_KEY);
    return storedGender
      ? (Number(storedGender as unknown) as Gender)
      : Genders.THEY;
  } catch (error) {
    return Genders.THEY;
  }
};
export const userGenderAtom = atom<Gender>(getInitialGender());
export const userGenderWithEffectAtom = atom(
  (get) => get(userGenderAtom),
  (get, set, newValue) => {
    set(userGenderAtom, newValue as Gender);
    localStorage.setItem(CLIENT_GENDER_KEY, newValue as string);
  }
);

export const postsAtom = atom<TalkData[]>();