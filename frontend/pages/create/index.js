import AppNavBar from "../../components/AppNavBar";
import AppLayout from "../../components/AppLayout";
import CreateOptionButton from '../../components/CreateOptionButton';
import { useRouter } from 'next/router'

const create = () => {
  const router = useRouter();
  return (
    <>
      <AppNavBar/>
      <AppLayout title="What do you meme?">
        <CreateOptionButton imgSrc="./gallery.svg" onClick={() => router.push("/create/template")}>upload a template</CreateOptionButton>
        <CreateOptionButton imgSrc="./edit.svg" onClick={() => router.push("/create/meme")}>create a meme</CreateOptionButton>
      </AppLayout>
    </>
  );
};

export default create;
