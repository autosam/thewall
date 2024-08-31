import {
  faFemale,
  faGenderless,
  faMale,
} from "@fortawesome/free-solid-svg-icons";

export enum Genders {
  HE = 0,
  SHE = 1,
  THEY = 2,
}

export type Gender = Genders;

export const GenderNames = {
  [Genders.HE]: "He/Him",
  [Genders.SHE]: "She/Her",
  [Genders.THEY]: "They/Them",
};

export const GenderIcons = {
  [Genders.HE]: faMale,
  [Genders.SHE]: faFemale,
  [Genders.THEY]: faGenderless,
};
