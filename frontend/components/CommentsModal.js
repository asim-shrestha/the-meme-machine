import React from "react";
import { Modal, Button } from "react-bootstrap";
import TemplateList from './TemplateList';
import MemeGenerator from './MemeGenerator';
import { $axios } from "../plugins/axios";

const CommentsModal = (props) => {
  const [template, setTemplate] = React.useState(null);
  const {meme} = props;
  const {getComments} = props;

  async function submit(payload) {
    console.log(payload, meme)
    await $axios.post(`/meme/${meme.key}?target=comments`, payload).then(() => {
      props.onHide();
      getComments();
    })
  }

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
            <MemeGenerator template={template} onCreate={submit}/>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CommentsModal;
