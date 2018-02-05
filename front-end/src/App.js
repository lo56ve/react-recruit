import React, { Component } from 'react';
import Routes from './routes/router';
import { Provider } from 'react-redux'
import store from './store/store'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <Routes></Routes>
                </Provider>
            </div>
        );
    }
}

export default App;
