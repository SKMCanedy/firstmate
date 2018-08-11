
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Homepage from "./components/landing-page/Homepage";
import Board from "./components/board/Board";

export default function App(props) {
    return (
        <Router>
            <div className="app">
                <main>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/board" component={Board} />
                </main>
            </div>
        </Router>
    );
}
