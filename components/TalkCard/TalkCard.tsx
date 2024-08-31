import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button";
import { useEffect, useState } from "react";
import { GenderNames } from "@/types/Gender";
import classNames from "classnames";

export const TalkCard = (props: any) => {
  const { content, gender, dark } = props;
  const [roundingAngle, setRoundingAngle] = useState("");
  useEffect(() => {
    const random = Math.random();
    if (random >= 0.75) setRoundingAngle("rounded-br-3xl");
    else if (random >= 0.5) setRoundingAngle("rounded-bl-3xl");
    else if (random >= 0.25) setRoundingAngle("rounded-tr-3xl");
    else setRoundingAngle("rounded-tl-3xl");
  }, []);

  const cardClass = classNames(`flex flex-col p-6 gap-3 ${roundingAngle}`, {
    "bg-white text-black": !dark,
    "bg-[#343434] text-white": dark,
  });
  const metadataClass = classNames("flex gap-4", {
    "text-[#616161]": !dark,
    "text-[#939393]": dark,
  });

  return (
    <div className={cardClass}>
      <div
        id="top-container"
        className="flex justify-between w-full items-center h-auto flex-wrap"
      >
        <div id="metadata" className={metadataClass}>
          <div>{GenderNames[gender]}</div>
          <div>Aug 27</div>
        </div>
        <div id="controls" className="flex gap-2 py-1">
          <Button dark={dark} className="h-7" leftIcon={faTimes}>
            False
          </Button>
          <Button dark={dark} className="h-7" leftIcon={faCheck}>
            True
          </Button>
        </div>
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
