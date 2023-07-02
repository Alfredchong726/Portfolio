import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/scenes/MainPage";
import ErrorPage from "@/scenes/ErrorPage";

type Props = {};

const App = (props: Props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
