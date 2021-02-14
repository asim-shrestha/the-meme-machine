import React from 'react';
import TemplateCard from './TemplateCard';
import {Container, Col, Row} from 'react-bootstrap';
import {db} from "../plugins/firebase";

const TemplateList = ({setTemplate}) => {
  const [templates, setTemplates] = React.useState([]);

    React.useEffect(() => {
    db.ref("templates").on("value", snapshot => {
        let t = [];
        snapshot.forEach((snap) => {t.push({...snap.val(), key: snap.key});});
        setTemplates(t);
        console.log(t);
    })}, [])

  return (
    <Container fluid>
      <Row className="justify-content-center">
      {templates.map(template =>{ return (
        <TemplateCard
        key={template.id}
        template={template}
        onClick={() => setTemplate(template)}
        />
        )})}
      </Row>
    </Container>
  )
}

export default TemplateList
