import React from 'react';
import AppNavBar from "../../components/AppNavBar";
import AppLayout from "../../components/AppLayout";
import TemplateList from '../../components/TemplateList';
import MemeGenerator from '../../components/MemeGenerator';

const create = () => {
  const [template, setTemplate] = React.useState(null);

  let title = "Select a template";
  if (template) { title = "Create a meme"; }

  return (
    <>
      <AppNavBar/>
      <AppLayout title={title}>
        <form style={{"margin-left":"2em"}}>
          <input type="text" placeholder="Search"/>
        </form>
        {
          template === null ?
            <TemplateList setTemplate={setTemplate}/>
            :
            <MemeGenerator template={template}/>
        }
      </AppLayout>
    </>
  );
};

export default create;
