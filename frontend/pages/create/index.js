import AppNavBar from "../../components/AppNavBar";
import AppLayout from "../../components/AppLayout";
import CreateOptionButton from '../../components/CreateOptionButton';
const create = () => {
  return (
    <>
      <AppNavBar/>
      <AppLayout title="What do you meme?">
        <CreateOptionButton>upload a meme</CreateOptionButton>
        <CreateOptionButton>create a meme</CreateOptionButton>
      </AppLayout>
    </>
  );
};

export default create;
