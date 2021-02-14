import AppNavBar from "../../components/AppNavBar";
import AppLayout from "../../components/AppLayout";
import CreateOptionButton from '../../components/CreateOptionButton';
const create = () => {
  return (
    <>
      <AppNavBar/>
      <AppLayout title="What do you meme?">
        <CreateOptionButton>
          <img src="imageicon.webp"/>
          <br/>upload a meme
        </CreateOptionButton>
        <CreateOptionButton>
          <img src="createicon.png" style={{opacity:0.65}}/>
          <br/>create a meme
        </CreateOptionButton>
      </AppLayout>
    </>
  );
};

export default create;
