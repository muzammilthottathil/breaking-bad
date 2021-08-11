import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Character from "./pages/Character";
import HomePage from "./pages/Home";
import { CharacterContextProvider } from "./hooks/CharacterContext";
import "./App.css";

function App() {
  return (
    <div className="background">
      <CharacterContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/:id" component={Character} />
          </Switch>
        </Router>
      </CharacterContextProvider>
    </div>
  );
}

export default App;
