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
