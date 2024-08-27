import { Genders } from "../types/Gender";
import { TalkData } from "../types/TalkData";

const getRandomLoremIpsum = () => {
  const sample =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ";
  const r = Math.random() * 1000;
  return sample.repeat(12).slice(0, Math.floor(Math.random() * r));
};

export const getTalkCardsMock = (): TalkData[] => {
  return [
    { text: getRandomLoremIpsum(), gender: Genders.THEY },
    { text: getRandomLoremIpsum(), gender: Genders.SHE },
    { text: getRandomLoremIpsum(), gender: Genders.SHE },
    { text: getRandomLoremIpsum(), gender: Genders.THEY },
    { text: getRandomLoremIpsum(), gender: Genders.SHE },
    { text: getRandomLoremIpsum(), gender: Genders.THEY },
    { text: getRandomLoremIpsum(), gender: Genders.SHE },
    { text: getRandomLoremIpsum(), gender: Genders.HE },
    { text: getRandomLoremIpsum(), gender: Genders.THEY },
    { text: getRandomLoremIpsum(), gender: Genders.THEY },
    { text: getRandomLoremIpsum(), gender: Genders.HE },
    { text: getRandomLoremIpsum(), gender: Genders.THEY },
    { text: getRandomLoremIpsum(), gender: Genders.THEY },
    { text: getRandomLoremIpsum(), gender: Genders.HE },
    { text: getRandomLoremIpsum(), gender: Genders.THEY },
    { text: getRandomLoremIpsum(), gender: Genders.THEY },
    { text: getRandomLoremIpsum(), gender: Genders.SHE },
  ];
};
