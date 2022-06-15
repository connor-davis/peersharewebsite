import {Switch} from 'solid-js';
import {MatchRoute} from "@rturnq/solid-router";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <div
            class={"w-screen h-screen text-black bg-gray-100 dark:text-white dark:bg-gray-900"}>
            <Switch>
                <MatchRoute path={"/"} end>
                    <HomePage/>
                </MatchRoute>
            </Switch>
        </div>
    );
}

export default App;
