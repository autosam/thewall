// import { splitToNChunks } from "@/app/utils/splitToNChunks";
import { uid } from "uid";
import { TalkCard } from "../TalkCard/TalkCard";
import { TalkCardsContainerProps } from "./TalkCardsContainer.types";
import { TalkData } from "@/types/TalkData";

export const TalkCardsContainer = (props: TalkCardsContainerProps) => {
  const { cards } = props;

  //   const cardColumns = [];
  //   const CHUNK_SIZE = 3;
  //   let currentChunkSize = CHUNK_SIZE;
  //   for (let i = 0; i < cards.length; i += currentChunkSize) {
  //     const chunk = cards.slice(i, i + currentChunkSize);
  //     cardColumns.push(chunk);
  //     if (currentChunkSize === CHUNK_SIZE) currentChunkSize = CHUNK_SIZE - 1;
  //     else currentChunkSize = CHUNK_SIZE;
  //   }

  function splitToNChunks(array: any, n: number) {
    const nArray = array.slice();
    let result = [];
    for (let i = n; i > 0; i--) {
      result.push(nArray.splice(0, Math.ceil(nArray.length / i)));
    }
    return result;
  }

  const cardColumns = splitToNChunks(cards, 3);

  return (
    <div className="flex flex-row gap-3 flex-wrap">
      {cardColumns.map((cardsCol, i) => (
        <div
          key={uid()}
          className={`flex flex-col gap-3 w-1/4 flex-grow ${
            i == 1 && "-pt-24"
          }`}
        >
          {cardsCol.map((card: TalkData, ci: number) => {
            let dark = false;
            if (ci % 3 == i % 2) dark = true;
            return <TalkCard isMine={card.isMine} key={uid()} {...card} />;
          })}
        </div>
      ))}
    </div>
  );
};
