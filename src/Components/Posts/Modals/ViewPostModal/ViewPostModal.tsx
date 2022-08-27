import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { IProps } from "./modal";

const ViewPostModal: FC<IProps> = ({ post }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button
        className="poststable__body-actions--btn"
        type="button"
        onClick={handleShow}
      >
        <FontAwesomeIcon icon={faEye} />
      </button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>{post.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{post.body}</Modal.Body>
      </Modal>
    </>
  );
};

export default ViewPostModal;
