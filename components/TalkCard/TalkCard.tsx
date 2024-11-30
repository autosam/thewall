import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button";
import { useEffect, useState } from "react";
import { Gender, GenderNames } from "@/types/Gender";
import moment from "moment";
import classNames from "classnames";
import { useTalkCard } from "./TalkCard.hooks";
import { TalkData } from "@/types/TalkData";

type TalkCardProps = TalkData & {
  isMine?: boolean;
  gender: Gender;
  dark?: boolean;
};

export const TalkCard = (props: TalkCardProps) => {
  const {
    id,
    content,
    gender,
    time,
    isMine,
    myLikeInteraction,
    likeCount: initialLikeCount,
    dislikeCount: initialDislikeCount,
    isMock,
  } = props;

  let { dark } = props;
  if (isMine) dark = true;

  const {
    roundingAngle,
    isLiking,
    handleSetLikeState,
    likeState,
    hasLiked,
    likeCount,
    dislikeCount,
    likeLoading,
    dislikeLoading,
  } = useTalkCard(id, myLikeInteraction, initialLikeCount, initialDislikeCount);

  const cardClass = classNames(`flex flex-col p-6 gap-3 ${roundingAngle}`, {
    "bg-white text-black": !dark,
    "bg-[#343434] text-white": dark,
  });
  const metadataClass = classNames("flex gap-4", {
    "text-[#616161]": !dark,
    "text-[#939393]": dark,
  });

  const trueButtonClass = classNames("h-7 relative", {
    "bg-green-800 hover:bg-green-900 text-white": likeState && hasLiked,
  });

  const falseButtonClass = classNames("h-7 relative", {
    "bg-red-800 hover:bg-red-900 text-white": !likeState && hasLiked,
  });

  console.log(props);

  return (
    <div className={cardClass} data-id={id}>
      <div
        id="top-container"
        className="flex justify-between w-full items-center h-auto sm:flex-wrap"
      >
        <div id="metadata" className={metadataClass}>
          <div>
            {isMine ? (
              <div>
                <b>You</b> ({GenderNames[gender]})
              </div>
            ) : (
              GenderNames[gender]
            )}
          </div>
          <div>{moment(time).format("MMM Do")}</div>
        </div>

        {!isMock && (
          <div id="controls" className="flex gap-2 py-1">
            <Button
              onClick={() => handleSetLikeState(false)}
              dark={dark}
              className={falseButtonClass}
              leftIcon={faTimes}
              loading={dislikeLoading}
            >
              False
              <Badge>{dislikeCount}</Badge>
            </Button>
            <Button
              onClick={() => handleSetLikeState(true)}
              dark={dark}
              className={trueButtonClass}
              leftIcon={faCheck}
              loading={likeLoading}
            >
              True
              <Badge>{likeCount}</Badge>
            </Button>
          </div>
        )}
      </div>
      <div id="text-container">
        <div className="text-4xl">
          {content ??
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
        </div>
      </div>
    </div>
  );
};

const Badge = ({ children }: { children: any }) => {
  return (
    <div className="text-inherit bg-inherit absolute left-1 text-[8px] w-5 h-5 inline-flex justify-center items-center rounded-full font-semibold">
      {children}
    </div>
  );
};
