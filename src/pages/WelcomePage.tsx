import Page from "../components/Page";
import WelcomeScene from "../scenes/WelcomeScene";

type WelcomeProps = {};

const WelcomePage: React.FC<WelcomeProps> = (props) => {
  return (
    <>
    <Page>
      <color attach="background" args={["#d3d4d7"]} />
      <WelcomeScene />
    </Page>

    
    </>
  );
};

export default WelcomePage;
