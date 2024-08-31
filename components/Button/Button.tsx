import { faCircleNotch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

export const Button = (props: any) => {
  const { children, leftIcon, className, disabled, loading, dark, ...rest } =
    props;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonWidth, setButtonWidth] = useState<number | undefined>(undefined);
  useEffect(() => {
    if (buttonRef.current && !loading) {
      setButtonWidth(buttonRef.current.offsetWidth);
    }
  }, [loading]);

  const buttonClass = classNames(
    `inline-flex p-2 gap-1 items-center uppercase justify-center rounded-lg text-xs disabled:opacity-50 disabled:pointer-events-none`,
    {
      "bg-[#EAEAEA] text-black hover:bg-[#dedede]": !dark,
      "bg-[#515151] text-white hover:bg-[#474747]": dark,
    },
    className
  );

  if (loading) {
    return (
      <button
        disabled={true}
        className={buttonClass}
        style={{ width: buttonWidth }}
      >
        <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" />
      </button>
    );
  }

  return (
    <button
      ref={buttonRef}
      disabled={disabled}
      className={buttonClass}
      {...rest}
    >
      {<FontAwesomeIcon icon={leftIcon} width={12}></FontAwesomeIcon>}
      {children}
    </button>
  );
};
