import React from "react";
import { Modal, Button } from "react-bootstrap";
import MemeCard from './MemeCard';
import MemeList from './MemeList';
import {db} from "../plugins/firebase";
import CommentsModal from './CommentsModal';

const MemeModal = (props) => {
  const {meme} = props;
  const {prev} = props;
  if (!meme) { return (<> </>)}

  const [comments, setComments] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);

  const getComments = () => {
    db.ref("comments").child(meme.key).on("value", snapshot => {
      let c = [];
      snapshot.forEach((snap) => {c.push({...snap.val(), key: snap.key})});
      setComments(c);
    });
  }

  React.useEffect(() => {
    getComments();
  }, [])
  

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{`${meme.topText} ${meme.bottomText}`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{display: "flex", justifyContent: "center", padding: "15px"}}>
          <MemeCard image={meme.url} size="lg"/>
        </div>
        <h4>comments:</h4>
        {
          comments.length > 0 ? 
          <div>
            <MemeList memes={comments} origin={meme} size="sm"/>
          </div>
          :
          "no responses yet. be the first!"
        }
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setShowModal(true)}>create response</Button>
        <Button onClick={props.onHide}>close</Button>
      </Modal.Footer>
      <CommentsModal
        show={showModal}
        onHide={() => setShowModal(false)}
        meme={meme}
        getComments={getComments}
        prev={prev}
      />
    </Modal>
  );
};

export default MemeModal;
