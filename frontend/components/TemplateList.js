import React from 'react';
import TemplateCard from './TemplateCard';
import {Container, Col, Row} from 'react-bootstrap';
import { $axios } from '../plugins/axios';

const TemplateList = ({setTemplate}) => {
  const [templates, setTemplates] = React.useState([]);

  React.useEffect(() => {
    (async function anyNameFunction() {
      try {
        setTemplates((await $axios.get('/template')).data);
      } catch (e) {
        console.log(e)
      }
    })();
  }, [])

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
