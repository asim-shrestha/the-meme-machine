import React from 'react';
import AppNavBar from "../../components/AppNavBar";
import AppLayout from "../../components/AppLayout";
import TemplateList from '../../components/TemplateList';
import MemeGenerator from '../../components/MemeGenerator';
import { $axios } from "../../plugins/axios";
import { useRouter } from "next/router";

const create = () => {
  const [template, setTemplate] = React.useState(null);
  const router = useRouter();
  let title = "Select a template";
  if (template) { title = "Create a meme"; }

  async function submit(payload) {
    $axios.post("/meme", payload).then(() => {
      router.push("/recent");
    }
    );
  }

  return (
    <>
      <AppNavBar/>
      <AppLayout title={title}>
        {
          template === null ?
            <TemplateList setTemplate={setTemplate}/>
            :
            <MemeGenerator template={template} onCreate={submit}/>
        }
      </AppLayout>
    </>
  );
};

export default create;
