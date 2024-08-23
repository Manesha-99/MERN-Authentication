import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Header = () => {
  const {currentUser} = useSelector(state=> state.user);
  return (
    <div className="flex items-center justify-between p-4 bg-slate-400 ">
      <Link to="/">
        <h1 className="ml-8 text-4xl font-bold">Auth App</h1>
      </Link>
      <div className="flex gap-6 text-2xl">
        <Link to="/">
          <ul>Home</ul>
        </Link>
        <Link to="about">
          <ul>About</ul>
        </Link>
        <Link to="profile">
        {currentUser? (
          <img src={currentUser.profilePicture} alt="profile" className="object-cover w-8 h-8 rounded-full"/>
        ): (
          <ul className="mr-8">Sign-In</ul>
        )}
          
        </Link>
      </div>
    </div>
  );
};

export default Header;
