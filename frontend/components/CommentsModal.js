import React from "react";
import { Modal, Button } from "react-bootstrap";
import TemplateList from './TemplateList';
import MemeGenerator from './MemeGenerator';

const CommentsModal = (props) => {
  const [template, setTemplate] = React.useState(null);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header closeButton>
        <Modal.Title>Create a response</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {
          template === null ?
            <TemplateList setTemplate={setTemplate}/>
            :
            <MemeGenerator template={template}/>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CommentsModal;
