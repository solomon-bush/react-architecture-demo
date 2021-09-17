import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';

/* ROUTES */
import PubRoute from './PubRoute';
// import ProRoute from './ProRoute';
/* VIEWS */
import Home from '../Views/Home';
import PubSub from '../Views/PubSub';
import CardFactory from '../Views/CardFactory';
import FormFactory from '../Views/FormFactory';
import FuncAPI from '../Views/FuncAPI';
import GlobalHandlers from '../Views/GlobalHandlers';
import HiddenRouting from '../Views/HiddenRouting';
import RouteOverloading from '../Views/RouteOverloading';

export default function BaseRouter() {

    return (
        <Router>
            <Switch>
                <PubRoute exact path='/' component={Home} wrapper title='Home'/>
                <PubRoute exact path='/pubsub' component={PubSub} wrapper title='PubSub'/>
                <PubRoute exact path='/funcapi' component={FuncAPI} wrapper title='Functional API'/>
                <PubRoute exact path='/globalhandler' component={GlobalHandlers} wrapper title='Global Handler'/>
                <PubRoute exact path='/formfactory' component={FormFactory} wrapper title='Form Factory'/>
                <PubRoute exact path='/cardfactory' component={CardFactory} wrapper title='Card Factory'/>
                <PubRoute path='/hiddenrouting' component={HiddenRouting} wrapper title='Hidden Routing'/>
                <PubRoute exact path='/routeoverload' component={RouteOverloading} wrapper title='Route Overloading'/>
            </Switch>
        </Router>
    )
}