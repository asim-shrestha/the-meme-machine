import React from "react";
import { Modal, Button } from "react-bootstrap";
import MemeCard from './MemeCard';
import MemeList from './MemeList';
import {db} from "../plugins/firebase";

const CommentsModal = (props) => {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>

      </Modal.Body>
      <Modal.Footer>
        <Button>create response</Button>
        <Button onClick={props.onHide}>close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CommentsModal;
