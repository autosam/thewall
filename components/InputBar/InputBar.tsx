import { Button } from "../Button";
import { GenderIcons, GenderNames } from "@/types/Gender";
import { useInputBar } from "./InputBar.hooks";
import { faPaperPlane, faTimes } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type InputBarProps = {
  triggerRefresh: () => {};
};

export const InputBar = ({ triggerRefresh }: InputBarProps) => {
  const {
    gender,
    isSubmitting,
    isSubmitDisabled,
    isGenderLoading,
    handleOnChange,
    handleSubmit,
    handleGenderChange,
    inputRef,
    isModalOpen,
    setIsModalOpen,
  } = useInputBar({ triggerRefresh });

  const inputClassName = classNames(
    "w-2/3 relative flex justify-stretch max-sm:w-full max-sm:px-2"
  );

  return (
    <>
      <div className={inputClassName}>
        <input
          ref={inputRef}
          placeholder="Write something on the wall..."
          onInput={handleOnChange}
          disabled={isSubmitting}
          className="border-[#545454] border-solid border bg-[#2F2F2F] h-12 py-2 px-4 rounded-md w-full pr-44 focus:outline-none disabled:opacity-50"
          onKeyDown={(e: any) =>
            e.key === "Enter" && !isSubmitDisabled ? handleSubmit() : ""
          }
        ></input>
        <div className="absolute right-3 top-2 inline-flex gap-1">
          <Button
            dark={true}
            leftIcon={GenderIcons[gender]}
            className="bg-transparent"
            onClick={handleGenderChange}
            loading={isGenderLoading}
            disabled={isSubmitting}
          >
            {GenderNames[gender]}
          </Button>
          <Button
            dark={true}
            leftIcon={faPaperPlane}
            className="bg-transparent"
            disabled={isSubmitDisabled}
            loading={isSubmitting}
            onClick={handleSubmit}
          >
            SEND
          </Button>
        </div>
        {isModalOpen && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-[#00ff0054] backdrop-blur-lg p-2 px-6 rounded-t-md inline-flex justify-center items-center gap-2 box-content">
            {/* <FontAwesomeIcon icon={faBrain} className="fa-xs"></FontAwesomeIcon> */}
            <p>You wrote something on the wall!</p>
            <br />
            <button onClick={() => setIsModalOpen(false)}>
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </button>
          </div>
        )}
      </div>
      {/* <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        noClose={true}
        title="Post created!"
      >
        <ModalContent>
          <p>Your post have been successfully added!</p>
          <ModalButtonGroup>
            <Button
              onClick={() => {
                setIsModalOpen(false);
                triggerRefresh();
              }}
            >
              Reload
            </Button>
            <Button onClick={() => setIsModalOpen(false)}>Close</Button>
          </ModalButtonGroup>
        </ModalContent>
      </Modal> */}
    </>
  );
};
