import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/scenes/MainPage";
import ErrorPage from "@/scenes/ErrorPage";

type Props = {};

const App = (props: Props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
  /* return <HomePage />; */
};

export default App;
