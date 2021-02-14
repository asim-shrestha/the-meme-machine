import React from 'react';
import TemplateCard from './TemplateCard';
import {Container, Col, Row} from 'react-bootstrap';
import {db} from "../plugins/firebase";
import Columns from 'react-columns';

const TemplateList = ({setTemplate}) => {
  const [templates, setTemplates] = React.useState([]);

    React.useEffect(() => {
    // TODO CHANGE TO GET TOP MEMES
    db.ref("templates").on("value", snapshot => {
        let t = [];
        snapshot.forEach((snap) => {t.push({...snap.val(), key: snap.key});});
        setTemplates(t);
        console.log(t);
    })}, [])

  return (
    <Container fluid style={{"overflow-y":"scroll",height:"50vh",background:"white",margin:"0 2em"}}>
      <Columns queries={templates}>
      {templates.map(template =>{ return (
        <TemplateCard
        key={template.id}
        template={template}
        onClick={() => setTemplate(template)}
        />
        )})}
      </Columns>
    </Container>
  )
}

export default TemplateList
