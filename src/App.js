
import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Homepage from "./components/landing-page/Homepage";
import Board from "./components/board/Board";
import PracticeModal from "./components/general/practice-modal"

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('token') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );

export default function App(props) {
    return (
        <Router>
            <div className="app">
                <main>
                    <Route exact path="/" component={Homepage} />
                    <PrivateRoute exact path="/board" component={Board} />
                    <Route exact path="/practice" component={PracticeModal} />
                </main>
            </div>
        </Router>
    );
}
