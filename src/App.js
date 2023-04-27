import "./App.css";
import { Banner, Footer, NavBar, Skills } from "./app/components";
import { Contact, Projects } from "./app/pages";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
