import { Router, Route, Switch } from "wouter";
import HomePage from "../pages/HomePage";
import LearnPage from "../pages/LearnPage";

type RouteType = {
  path: string;
  component: React.FC;
};
type RouteProps = {
  routes: RouteType[];
};

const Routes: React.FC<RouteProps> = (props) => {
  return (
    <Router>
      <Switch>
        {props.routes.map((route, idx) => {
          return (
            <Route key={idx} path={route.path}>
              <route.component />
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
};

export default Routes;
