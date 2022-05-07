import { ScrollControls } from "@react-three/drei";
import Page from "../components/Page";
import MainLayout from "../layouts/main.layout";
import AboutScene from "../scenes/AboutScene";

type AboutPageProps = {};

const AboutPage: React.FC<AboutPageProps> = (props) => {
  return (
    <>
      <Page>
        <color attach="background" args={["#dce0bc"]} />
        <ScrollControls damping={5}>
          <MainLayout>
            <AboutScene />
          </MainLayout>
        </ScrollControls>
      </Page>
    </>
  );
};

export default AboutPage;
