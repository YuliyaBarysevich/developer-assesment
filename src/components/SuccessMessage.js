import React from "react";
import { Modal } from "react-bootstrap";

const SuccessMessage = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton/>
        <Modal.Body>
          <Modal.Title>Thank You for completing assessment!</Modal.Title>
        </Modal.Body>
      </Modal>
  </>

  )
}

export default SuccessMessage;