import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Phones from './screens/Phones';
import AuthStore from './contexts/AuthStore';

function App() {
  return (
    <Router>
      <AuthStore>
        <div className='bg' style={{ backgroundColor: "#6610f2" }}>
          <div className="container pt-5 pb-5">
            <Switch>
              <Route exact path="/phones" component={Phones} />
              <Route exact path="/phones/:id" component={Phones} />
            </Switch>
          </div>
        </div>
      </AuthStore>

    </Router >
  );
}

export default App;
