import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button";
import { useEffect, useRef, useState } from "react";

export const InputBar = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = () => {
    if (inputRef?.current?.value) setIsSubmitDisabled(false);
    else setIsSubmitDisabled(true);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 500 + Math.random() * 1000);
  };

  return (
    <div className="w-2/3 relative flex justify-stretch">
      <input
        ref={inputRef}
        placeholder="Type something..."
        onInput={handleOnChange}
        className="border-[#545454] border-solid border bg-[#2F2F2F] h-12 py-2 px-4 rounded-md w-full pr-24 focus:outline-none"
      ></input>
      <Button
        dark={true}
        leftIcon={faPaperPlane}
        className="absolute right-3 top-2 bg-transparent w-16"
        disabled={isSubmitDisabled}
        loading={isSubmitting}
        onClick={handleSubmit}
      >
        SEND
      </Button>
    </div>
  );
};
