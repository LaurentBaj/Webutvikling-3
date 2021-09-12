import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {MainNavigation} from "../components/shared/MainNavigation";
import {Home} from "../pages/Home";
import {About} from "../pages/About";
import {Games} from "../pages/Games";


export function Routing() {
    return <>
        <BrowserRouter>
            <MainNavigation />
            <Switch>
                <Route exact path={"/"} component={Home} />
                <Route path={"/about"} component={About} />
                <Route path={"/games"} component={Games} />
            </Switch>
        </BrowserRouter>
    </>
}