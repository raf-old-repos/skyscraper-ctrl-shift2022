import Page from "../components/Page";
import WelcomeScene from "../scenes/WelcomeScene";

type WelcomeProps = {};

const WelcomePage: React.FC<WelcomeProps> = (props) => {
  return (
    <>
    <Page>
      <WelcomeScene />
    </Page>

    
    </>
  );
};

export default WelcomePage;
