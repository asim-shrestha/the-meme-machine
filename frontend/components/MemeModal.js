import React from "react";
import { Modal, Button } from "react-bootstrap";
import MemeCard from './MemeCard';
import MemeList from './MemeList';
import {ALL_MEMES} from '../util/data';

const MemeModal = (props) => {
  const {meme} = props;
  if (!meme) { return (<> </>)}

  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    // TODO: ADAM CHANGE THIS CRAP :pray:
    setComments(
      ALL_MEMES
    )
  }, [])
  

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
        <h4>Responses:</h4>
        <div>
          <MemeList memes={comments} size="sm"/>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button>Create Response</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MemeModal;
