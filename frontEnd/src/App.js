import './App.css';
import Navbar from './Componet/Navbar';
import ShowJobs from './Componet/ShowJobs';
import { Route, Switch } from "react-router-dom";
import PostJob from './Componet/PostJob';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ShowJobs />
      <Switch>
        <Route exact path="/">
          <ShowJobs />
        </Route>

        <Route path="/create">
        <PostJob/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
