import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import RepositoriesList from "./components/RepositoriesList";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);
const App = () => {
  return (
    <div>
      <h1>search for stuff</h1>
      <RepositoriesList />
    </div>
  );
};

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

export default App;
