import React from "react";
import AppNavBar from "../../components/AppNavBar";
import { Form, Button } from "react-bootstrap";
import { $axios } from "../../plugins/axios";
import AppLayout from "../../components/AppLayout";

const template = () => {
  const [file, setFile] = React.useState({ name: "fake" });
  const [name, setName] = React.useState("");

  const readFile = (file) => {
    console.log(file);
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  const uploadFile = async () => {
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const f = await readFile(file);
    console.log(f);
    const formData = new FormData();
    formData.append("file", new Blob([f]));
    formData.append("name", name);
    // SEND WITH AXIOS
    $axios
      .post("/template", formData, config)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  };

  // TODO validate file types
  return (
    <>
      <AppNavBar />
      <AppLayout title="Upload a template">
        <Form>
          <Form.Control
            type="text"
            placeholder="Template Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Group>
            <Form.File
              label="Input an image template"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Form.Group>
          <Button variant="primary" onClick={uploadFile}>
            Upload
          </Button>
        </Form>
      </AppLayout>
    </>
  );
};

export default template;
