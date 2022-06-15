import {Switch} from 'solid-js';
import {MatchRoute} from "@rturnq/solid-router";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <Switch>
            <MatchRoute path={"/"} end>
                <HomePage/>
            </MatchRoute>
        </Switch>
    );
}

export default App;
