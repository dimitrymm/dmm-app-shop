import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/statistics" component={Statistics} />
    </Switch>
  );
}
