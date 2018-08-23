
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Homepage from "./components/landing-page/Homepage";
import Board from "./components/board/Board";
import PracticeModal from "./components/general/practice-modal"

export default function App(props) {
    return (
        <Router>
            <div className="app">
                <main>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/board" component={Board} />
                    <Route exact path="/practice" component={PracticeModal} />
                </main>
            </div>
        </Router>
    );
}
