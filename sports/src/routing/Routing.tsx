import { FC } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { About, Sports} from "../pages"
import MainNavigation from "../components/shared/MainNavigation";

const Routing: FC = () => {
    return (
        <>
            <BrowserRouter>
                <MainNavigation />
                <Switch>
                    <Route exact path={"/"} component={Sports}></Route>
                    <Route path={"/about"} component={About}></Route>
                </Switch>

            </BrowserRouter>
        </>
    )
}

export default Routing