import { TalkCard } from "@/app/components/TalkCard";
import { TalkCardsContainer } from "@/app/components/TalkCardsContainer";
import { getTalkCardsMock } from "@/app/mocks/getTalkCardsMock";

export const Home = () => {
  const mockData = getTalkCardsMock();

  return <TalkCardsContainer cards={mockData} />;
};
