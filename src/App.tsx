import "./App.css";


import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import DemoPage from "./pages/DemoPage";
import Routes from "./components/Routes";
import { Suspense } from "react";
import WelcomePage from "./pages/WelcomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes
          routes={[
            { path: "/", component: WelcomePage},
            { path: "/home", component: HomePage },
            { path: "/learn", component: LearnPage },
            { path: "/demo", component: DemoPage },
            { path: "/about", component: AboutPage },
          ]}
        ></Routes>
      </Suspense>
    </>
  );
}

export default App;
