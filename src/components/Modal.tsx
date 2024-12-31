import React from "react";
import ReactDOM from "react-dom";
import { BiCollapse } from "react-icons/bi";
import useEscapeKey from "../hooks/useEscapeKey";

const Modal = ({
  isOpen,
  onClose,
  children,
  heading = "Modal",
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  heading?: string;
}) => {
  useEscapeKey(onClose);
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-zinc-800 p-6 bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-zinc-700 rounded-md p-4 w-full max-w-3xl shadow-lg">
        <div className="flex justify-between items-center">
          <p className="font-bold">{heading}</p>
          <BiCollapse className="cursor-pointer" onClick={onClose} />
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
