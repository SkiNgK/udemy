import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app'
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

export default class App extends Component{
    componentWillMount(){
        let config = {
            apiKey: "AIzaSyC0L5loEI1PPB6e2JWTfoP3dLbPxMdVd7U",
            authDomain: "zapzap-7893d.firebaseapp.com",
            databaseURL: "https://zapzap-7893d.firebaseio.com",
            projectId: "zapzap-7893d",
            storageBucket: "zapzap-7893d.appspot.com",
            messagingSenderId: "17721451887"
            };
        firebase.initializeApp(config);
    }

    render(){
        return(
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes/>
            </Provider>
        )
    }
}