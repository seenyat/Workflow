import "./App.css";
import { Provider } from 'react-redux'
import store from './Redux/store'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navigation from "./Views/Navigation";



function App() {
  return (
  
  <Provider store={store}>

  <BrowserRouter>

    <Navigation />

    <Switch>
      
    </Switch>

  </BrowserRouter>

  </Provider>


)
}

export default App;
