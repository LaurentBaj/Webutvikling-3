import { FC } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { About, Sports} from "../pages"

const Routing: FC = () => {
    return (
        <>
            <BrowserRouter>

                <Switch>
                    <Route exact path={"/"} component={Sports}></Route>
                    <Route path={"/about"} component={About}></Route>
                </Switch>

            </BrowserRouter>
        </>
    )
}

export default Routing