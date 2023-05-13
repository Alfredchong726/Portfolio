import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/scenes/MainPage";

type Props = {};

const App = (props: Props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
