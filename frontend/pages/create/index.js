import AppNavBar from "../../components/AppNavBar";
import AppLayout from "../../components/AppLayout";
import CreateOptionButton from '../../components/CreateOptionButton';
import { useRouter } from 'next/router'

const create = () => {
  const router = useRouter();
  return (
    <>
      <AppNavBar/>
      <AppLayout title="What do you meme?" class="create">
        <CreateOptionButton onClick={() => router.push("/create/template")}>
          <img src="imageicon.webp"/>
          <br/>upload a template
        </CreateOptionButton>
        <CreateOptionButton onClick={() => router.push("/create/meme")}>
          <img src="createicon.png" style={{opacity:0.65}}/>
          <br/>browse templates
        </CreateOptionButton>
      </AppLayout>
    </>
  );
};

export default create;
