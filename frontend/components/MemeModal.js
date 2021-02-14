import React from "react";
import { Modal, Button } from "react-bootstrap";
import MemeCard from './MemeCard';
import MemeList from './MemeList';
import {db} from "../plugins/firebase";

const MemeModal = (props) => {
  const {meme} = props;
  if (!meme) { return (<> </>)}

  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
      db.ref("comments").child(meme.key).on("value", snapshot => {
        let c = [];
        snapshot.forEach((snap) => {c.push({...snap.val(), key: snap.key})});
        setComments(c);
    })}, [])
  

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div style={{display: "flex", justifyContent: "center", padding: "15px"}}>
          <MemeCard image={meme.url} size="lg"/>
        </div>
        <h4>comments:</h4>
        <div>
          <MemeList memes={comments} size="sm"/>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button>create response</Button>
        <Button onClick={props.onHide}>close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MemeModal;
