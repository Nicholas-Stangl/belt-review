// import logo from './logo.svg';
// import './App.css';
import { Router, Link } from '@reach/router';
import Allninjas from './components/AllNinjas';
import OneNinja from './components/OneNinja';
import CreateNinja from './components/CreateNinja';
import EditNinja from './components/EditNinja';

function App() {
  return (
    <div className="App">
        <div className="d-flex justify-content flex-column">
          <br/>
          <div className="row justify-content-center">
          <Link className="text-center" to="/">Home Page</Link>
          <p>&nbsp; |&nbsp;&nbsp; </p>
          <Link className="text-center" to="/create">Add a Ninja</Link>
          </div>
          <h1 className="text-center">Ninjas Wall Of Fame!</h1>
          <br/> 
          <Router>
          <Allninjas path="/"></Allninjas>
          <OneNinja path="/ninja/:studentID"></OneNinja>
          <CreateNinja path="/create"></CreateNinja>
          <EditNinja path="/edit/:studentID"></EditNinja>
          </Router>
        </div>
    </div>
  );
}

export default App;
