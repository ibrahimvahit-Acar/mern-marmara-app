import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-pink-800 py-6">
      <div className="container mx-auto flex justify-between ">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">TheMarmara.com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to={"/my-bookings"}
              >
                Rezervasyonlarım
              </Link>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to={"/my-hotels"}
              >
                Oteller
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100 "
            >
              Giriş Yap
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
