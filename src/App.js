
import './App.css';
import { Switch,Route } from 'react-router-dom';  
import Home from './Components/home';
import Rims from './Components/rimtyre';
import PhotoGallery from './Components/photoGallery';
import Contact from './Components/contact';
import Information from './Components/information';

function App() {
  return (
    <div className="App">
  <Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/rims" component={Rims}/>
  <Route exact path="/photoGallery" component={PhotoGallery}/>
  <Route exact path="/contact" component={Contact}/>
  <Route exact path="/information" component={Information}/>

  
  </Switch>
    </div>
  );
}

export default App;
