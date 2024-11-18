import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="bg-white text-center space-y-2 py-80">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="font-medium">The page you are looking for does not exist.</p>
      <NavLink to="/" className="font-medium">Go to Home</NavLink>
    </div>
    );
};

export default ErrorPage;