import logo from "./logo.svg";
import "./App.css";
import Header from "./Sections/Header/Header";
import Phone from "./Componnets/Phone/Phone";
import { Provider, useSelector } from "react-redux";
import store from "./Redux/store";
import Footer from "./Sections/Footer/Footer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <h1 className="head-line">your Back</h1>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
