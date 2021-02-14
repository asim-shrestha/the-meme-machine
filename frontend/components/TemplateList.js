import React from 'react';
import TemplateCard from './TemplateCard';
import {Container, Col, Row} from 'react-bootstrap';
import {db} from "../plugins/firebase";
import Columns from 'react-columns';

const TemplateList = ({setTemplate}) => {
  const [search, setSearch] = React.useState('');
  const [templates, setTemplates] = React.useState([]);
  const [filterTemplates, setFilterTemplates] = React.useState([]);

  React.useEffect(() => {
  db.ref("templates").on("value", snapshot => {
      let t = [];
      snapshot.forEach((snap) => {t.push({...snap.val(), key: snap.key});});
      setTemplates(t);
      setFilterTemplates(t);
      console.log(t);
  })}, [])

  // Filter templates
  React.useEffect(() => {
    let newFilterTemplates = templates.filter((template) => {
      return template.name.toLowerCase().includes(search.toLowerCase())
    });
    setFilterTemplates(newFilterTemplates)
  }, [templates, search])

  return (
    <div className="d-flex flex-column align-items-center justify-content-center pl-5 pr-5 pb-5">
      <div className="pb-3">
        <input
          value={search}
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Container fluid style={{overflowY:"scroll",height:"50vh",background:"white",margin:"0 2em"}}>
        {
        filterTemplates.length > 0 ?   
        filterTemplates.map(template =>{ return (
          <TemplateCard
          key={template.uuid}
          template={template}
          onClick={() => setTemplate(template)}
          />
          )})
          :
          <h3 style={{color: "black"}}>no templates found ):</h3>
        }
      </Container>
    </div>
  )
}

export default TemplateList
