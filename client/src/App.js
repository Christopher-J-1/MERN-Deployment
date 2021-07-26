import './App.css';
import AllPets from './components/AllPets';
import {Router} from '@reach/router';
import Create from './components/Create';
import PetDetail from './components/PetDetail';
import Edit from './components/Edit';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <AllPets path="/"></AllPets>
        <Create path= "/pets/new"></Create>
        <PetDetail path= "/pets/:id"></PetDetail>
        <Edit path="/edit/:id"></Edit>
      </Router>
    </div>
  );
}

export default App;