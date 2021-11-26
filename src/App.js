import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <div className="App wrapper">
			<Header appName="Przelicznik walut"/>
			<Main />
    </div>
  );
}

export default App;
