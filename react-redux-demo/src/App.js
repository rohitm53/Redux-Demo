import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./component/CakeContainer";
import "./App.css";
import HooksCakeContainer from "./component/HooksCakeContainer";
import IceCreamContainer from "./component/IceCreamContainer";
import NewCakeContainer from "./component/NewCakeContainer";
import ItemContainer from "./component/ItemContainer";
import UserContainer from "./component/UserContainer";
import UserContainerHooks from "./component/UserContainerHooks";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainerHooks />
        {/**
       <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      */}
      </div>
    </Provider>
  );
}

export default App;
