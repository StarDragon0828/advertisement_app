import Router from "./router/index";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/scrolltop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Router />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
