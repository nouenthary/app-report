import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from "./reducers/rootReducer";
import {ThemeProvider} from "./context/ThemeProvider";

const store = createStore(rootReducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <Router>
                    <App/>
                </Router>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);