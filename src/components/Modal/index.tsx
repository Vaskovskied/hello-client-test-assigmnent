import { createPortal } from "react-dom";
import { ModalProps } from "./props.types";
import { Xmark } from "iconoir-react";

const root = document.querySelector("#root");

const Modal = ({ open, onClose, title, children }: ModalProps) => {
  return open
    ? createPortal(
        <div className="fixed top-0 left-0 z-10 flex flex-col justify-end h-screen w-screen bg-black/30">
          <div className="bg-white w-full p-4">
            <div className="flex justify-between p-4">
              <h3>{title}</h3>
              <button type="button" onClick={onClose}>
                <Xmark />
              </button>
            </div>
            <div>{children}</div>
          </div>
        </div>,
        root as Element
      )
    : null;
};

export default Modal;
