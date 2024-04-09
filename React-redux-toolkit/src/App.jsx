import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";

import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <center className="px-4 py-5 my-5 text-center">
      <div className="col-lg-6 mx-auto">
        <Container>
          <Header />
          {privacy ? <PrivacyMessage /> : <DisplayCounter />}
          <Controls />
        </Container>
      </div>
    </center>
  );
}

export default App;
