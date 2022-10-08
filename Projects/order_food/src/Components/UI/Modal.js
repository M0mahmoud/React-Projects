import React, { Fragment } from "react";
import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
const ModalContent = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElemaent = document.getElementById("overlay");

function Modal(props) {
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElemaent)}
      {createPortal(
        <ModalContent>{props.children}</ModalContent>,
        portalElemaent
      )}
    </Fragment>
  );
}

export default Modal;
