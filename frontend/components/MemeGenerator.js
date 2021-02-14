import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { $axios } from "../plugins/axios";
import Meme from "./Meme";
import {useRouter} from "next/router";

const MemeGenerator = ({ template }) => {
  const router = useRouter();
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  const handleChange = (e, setText) => {
    setText(e.target.value);
  };

  async function submit() {
    const payload = {
      template: template.key,
      topText: topText,
      bottomText: bottomText,
    };
    $axios.post("/meme", payload).then(() => {
        router.push("/recent")
      }
    );
  }

  return (
    <>
      <h1>MEME GENERATOR</h1>
      <Meme image={template.url} topText={topText} bottomText={bottomText} />
      <Form>
        <Form.Control
          type="text"
          placeholder="Top text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
        <Form.Control
          type="text"
          placeholder="Bottom text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
        <Button variant="primary" onClick={() => submit()}>
          Create
        </Button>
      </Form>
    </>
  );
};

export default MemeGenerator;
