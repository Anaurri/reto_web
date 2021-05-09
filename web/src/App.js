import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
// import Navbar from './components/nav/Navbar';
import Phones from './screens/Phones';


function App() {
  return (
    <Router>
      <div className='bg' style={{ backgroundColor: "#171721" }}>
        <div className="container pt-5 pb-5">
        <Switch>
          <Route exact path="/phones" component={Phones} />
          <Route exact path="/phones/:id" component={Phones} />
        </Switch>
      </div>
      </div>

    </Router >
  );
}

export default App;
