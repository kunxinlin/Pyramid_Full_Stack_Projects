import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Registration from './Registration';
import Navbar from './Navbar';

class Router extends Component {
    render() {
        return(
            <div>
                <BrowserRouter>
                    <Navbar/>
                        <Switch>
                            <Route exact path="/" component={Registration}></Route>

                        </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Router;