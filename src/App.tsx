import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/scenes/MainPage";
import ErrorPage from "@/scenes/ErrorPage";

type Props = {};

const App = (props: Props) => {
  return <HomePage />;
};

export default App;
