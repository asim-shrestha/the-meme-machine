import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Meme from "./Meme";

const MemeGenerator = ({ template, onCreate}) => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [isDeepFried, setDeepFried] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (e, setText) => {
    setText(e.target.value);
  };

  return (
    <div className="d-flex flex-row align-items-center">
      <Meme image={template.url} topText={topText} bottomText={bottomText} />
      <Form className="d-flex flex-column align-items-center">
        <div className="pb-2">
          <Form.Control
            type="text"
            placeholder="Top text"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
          />
        </div>
        <Form.Control
          type="text"
          placeholder="Bottom text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
        <Form.Check
          type="checkbox"
          label="Deep Fried"
          value={isDeepFried}
          onChange={(e) => {
            setDeepFried(e.target.checked);
          }}
        />
        <Button variant="primary" disabled={isDisabled} onClick={() => {
          setIsDisabled(true);
          onCreate({
          template: template.key,
          topText: topText,
          bottomText: bottomText,
          isDeepFried, isDeepFried
        })}}>
          Create
        </Button>
      </Form>
    </div>
  );
};

export default MemeGenerator;
