import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SetStateAction } from "jotai";
import { Dispatch } from "react";

export const Modal = ({
  isOpen,
  setIsOpen,
  children,
  title,
  noClose,
}: {
  isOpen: boolean;
  setIsOpen: (...args: any[]) => any;
  children: JSX.Element | string;
  title?: string;
  noClose?: boolean;
}) => {
  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen?.(false);
  };

  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-50 inline-flex justify-center items-center">
      <div className="bg-white rounded-lg text-black min-w-36 p-6 px-8">
        <div className="flex justify-between items-center">
          {title && <b>{title}</b>}
          {!noClose && (
            <button className="p-4 px-0" onClick={handleClose}>
              <FontAwesomeIcon
                className="fa-xl"
                icon={faTimes}
              ></FontAwesomeIcon>
            </button>
          )}
        </div>
        {/* modal content */}
        <div className="py-4">{children}</div>
      </div>
    </div>
  );
};

export const ModalContent = ({ children }: { children: any }) => {
  return <div className="inline-flex flex-col gap-2">{children}</div>;
};

export const ModalButtonGroup = ({ children }: { children: any }) => {
  return <div className="inline-flex flex-row gap-2">{children}</div>;
};
