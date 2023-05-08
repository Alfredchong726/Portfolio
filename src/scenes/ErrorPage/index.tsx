import { Link } from "react-router-dom";

type Props = {};

const ErrorPage = (props: Props) => {
  return (
    <div>
      <div className="mt-10 flex items-center justify-center">
        <h1 className="text-5xl font-extrabold">404</h1>
      </div>

      <div className="mt-10 flex items-center justify-center text-2xl">
        <p>Page Not Found</p>
      </div>

      <div className="mt-10 flex items-center justify-center text-xl font-bold">
        <Link to="/md">Back to Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
