import Home from "./pages/Home/Home";
import { JsonDataProvider } from "./context/UserUploads/JsonDataProvider";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <JsonDataProvider>
        <Home />
      </JsonDataProvider>
    </div>
  );
};

export default App;
