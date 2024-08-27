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
