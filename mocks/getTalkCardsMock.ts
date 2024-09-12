import { Genders } from "@/types/Gender";
import { TalkData } from "@/types/TalkData";

const getRandomLoremIpsum = () => {
  const sample =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ";
  const r = Math.random() * (Math.random() * 1000);
  return sample.repeat(12).slice(0, Math.floor(r));
};

export const getTalkCardsMock = (): TalkData[] => {
  return [
    {
      content: getRandomLoremIpsum(), gender: Genders.THEY,
      id: "",
      time: ""
    },
    {
      content: getRandomLoremIpsum(), gender: Genders.SHE,
      id: "",
      time: ""
    },
    {
      content: getRandomLoremIpsum(), gender: Genders.SHE,
      id: "",
      time: ""
    },
    {
      content: getRandomLoremIpsum(), gender: Genders.THEY,
      id: "",
      time: ""
    },
    {
      content: getRandomLoremIpsum(), gender: Genders.SHE,
      id: "",
      time: ""
    },
    {
      content: getRandomLoremIpsum(), gender: Genders.THEY,
      id: "",
      time: ""
    },
    {
      content: getRandomLoremIpsum(), gender: Genders.SHE,
      id: "",
      time: ""
    },
    {
      content: getRandomLoremIpsum(), gender: Genders.HE,
      id: "",
      time: ""
    },
    {
      content: getRandomLoremIpsum(), gender: Genders.THEY,
      id: "",
      time: ""
    },
    {
      content: getRandomLoremIpsum(), gender: Genders.THEY,
      id: "",
      time: ""
    },
    {
      content: getRandomLoremIpsum(), gender: Genders.HE,
      id: "",
      time: ""
    },
    {
      content: getRandomLoremIpsum(), gender: Genders.THEY,
      id: "",
      time: ""
    },
    {
      content: getRandomLoremIpsum(), gender: Genders.THEY,
      id: "",
      time: ""
    },
    {
      content: getRandomLoremIpsum(), gender: Genders.HE,
      id: "",
      time: ""
    },
    {
      content: getRandomLoremIpsum(), gender: Genders.THEY,
      id: "",
      time: ""
    },
    {
      content: getRandomLoremIpsum(), gender: Genders.THEY,
      id: "",
      time: ""
    },
    {
      content: getRandomLoremIpsum(), gender: Genders.SHE,
      id: "",
      time: ""
    },
  ];
};
