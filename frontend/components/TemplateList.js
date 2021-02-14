import React from 'react';
import TemplateCard from './TemplateCard';
import {Container, Col, Row} from 'react-bootstrap';
import {db} from "../plugins/firebase";
import Columns from 'react-columns';

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
    <Container fluid style={{overflowY:"scroll",height:"50vh",background:"white",margin:"0 2em"}}>
      {templates.map(template =>{ return (
        <TemplateCard
        key={template.uuid}
        template={template}
        onClick={() => setTemplate(template)}
        />
        )})}
    </Container>
  )
}

export default TemplateList
