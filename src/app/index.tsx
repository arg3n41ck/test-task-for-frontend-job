import { Provider } from "react-redux";
import { AppRouter } from "./providers/router";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
