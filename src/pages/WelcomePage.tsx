import Page from "../components/Page";
import WelcomeScene from "../scenes/WelcomeScene";

type WelcomeProps = {};

const WelcomePage: React.FC<WelcomeProps> = (props) => {
  return (
    <>
    <Page>
      <color attach="background" args={["#0fb8ad4a"]} />
      <WelcomeScene />
    </Page>

    
    </>
  );
};

export default WelcomePage;
