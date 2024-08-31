import { faCircleNotch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

export const Button = (props: any) => {
  const { children, leftIcon, className, disabled, loading, dark, ...rest } =
    props;

  let background = "bg-[#EAEAEA]",
    textColor = "text-black";
  if (dark) {
    background = "bg-[#515151]";
    textColor = "text-white";
  }

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
      <button disabled={true} className={buttonClass}>
        <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" />
      </button>
    );
  }

  return (
    <button disabled={disabled} className={buttonClass} {...rest}>
      {<FontAwesomeIcon icon={leftIcon} width={12}></FontAwesomeIcon>}
      {children}
    </button>
  );
};
