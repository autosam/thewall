"use client";

import { InputBar } from "@/components/InputBar";
import { TalkCard } from "@/components/TalkCard";
import { TalkCardsContainer } from "@/components/TalkCardsContainer";
import { getTalkCardsMock } from "@/mocks/getTalkCardsMock";

export default function Page() {
  const mockData = getTalkCardsMock();

  return (
    <>
      <TalkCardsContainer cards={mockData} />
      <div className="fixed bottom-0 w-full h-1/5 z-10 bg-gradient-to-t from-black to-transparent from-15% flex items-center justify-center">
        <InputBar />
      </div>
    </>
  );
}
