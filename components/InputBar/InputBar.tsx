import { Button } from "../Button";
import { GenderIcons, GenderNames, Genders } from "@/types/Gender";
import { useInputBar } from "./InputBar.hooks";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalButtonGroup, ModalContent } from "../Modal";

export const InputBar = ({ triggerRefresh }: { triggerRefresh: () => {} }) => {
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

  return (
    <>
      <div className="w-2/3 relative flex justify-stretch">
        <input
          ref={inputRef}
          placeholder="Type something..."
          onInput={handleOnChange}
          disabled={isSubmitting}
          className="border-[#545454] border-solid border bg-[#2F2F2F] h-12 py-2 px-4 rounded-md w-full pr-44 focus:outline-none disabled:opacity-50"
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
      </div>
      <Modal
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
      </Modal>
    </>
  );
};
