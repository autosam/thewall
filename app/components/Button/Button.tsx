import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = (props: any) => {
  const { children, leftIcon, className, dark } = props;

  let background = "bg-[#EAEAEA]",
    textColor = "text-black";
  if (dark) {
    background = "bg-[#515151]";
    textColor = "text-white";
  }
  return (
    <button
      className={`${background} ${textColor} inline-flex p-2 gap-1 items-center uppercase rounded-lg text-xs ${className}`}
    >
      {<FontAwesomeIcon icon={leftIcon} width={12}></FontAwesomeIcon>}
      {children}
    </button>
  );
};
