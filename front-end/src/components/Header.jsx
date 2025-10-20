import { Link, useNavigate, useNavigation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import feather from "feather-icons";
import logo from "../assets/logo.jpg";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

function Header() {

  const [style, setStyle] = useState('hidden md:block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium  cursor-pointer');

  // Re-render feather icons after component mounts
  useEffect(() => {
    feather.replace();
  }, []);

  const {isLoggedIn, backendUrl,setIsLoggedIn, isLogged} = useContext(AppContext)

  const navigate = useNavigate()
  useEffect(() => {
    if(isLoggedIn) {
      setStyle('hidden md:block bg-gradient-to-r from-purple-500 to-red-500 text-white px-6 py-2 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium  cursor-pointer')
    }else {
      setStyle('hidden md:block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium  cursor-pointer')
    }
  },[isLoggedIn])

  const onHandleClick = async (e) => {
    if(isLoggedIn) {
      
      const {data} = await axios.post(backendUrl + '/auth/logout')
      
      if(data.success) {
        setIsLoggedIn(false)
        toast.success(data.message)
        navigate('/')
      }else {
        toast.error(data.message)
      }


    }else {
      navigate('/signin')
    }
  }

  useEffect(() => {
    isLogged();
  }, [])

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white shadow-lg sticky top-0 z-50 backdrop-blur-md">
      {/* Logo + Title */}
      <Link
        to="/"
        className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
      >
        <img
          src={logo}
          alt="EduPortal Logo"
          className="h-10 w-10 rounded-full border-2 border-purple-300 object-cover shadow-md"
        />
        <h2 className="text-xl font-bold tracking-wide text-white">
          EduPortal
        </h2>
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex gap-8 font-medium items-center">
        <Link
          to="/"
          className="text-purple-200 hover:text-white transition-colors duration-200 flex items-center gap-2 hover:scale-105 transform"
        >
          <i data-feather="home" className="w-4 h-4"></i> Home
        </Link>
        <Link
          to="/features"
          className="text-purple-200 hover:text-white transition-colors duration-200 flex items-center gap-2 hover:scale-105 transform"
        >
          <i data-feather="zap" className="w-4 h-4"></i> Features
        </Link>
        <Link
          to="/services"
          className="text-purple-200 hover:text-white transition-colors duration-200 flex items-center gap-2 hover:scale-105 transform"
        >
          <i data-feather="tool" className="w-4 h-4"></i> Services
        </Link>
        <Link
          to="/about"
          className="text-purple-200 hover:text-white transition-colors duration-200 flex items-center gap-2 hover:scale-105 transform"
        >
          <i data-feather="info" className="w-4 h-4"></i> About
        </Link>
        <Link
          to="/contact"
          className="text-purple-200 hover:text-white transition-colors duration-200 flex items-center gap-2 hover:scale-105 transform"
        >
          <i data-feather="mail" className="w-4 h-4"></i> Contact
        </Link>
      </nav>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        {/* Get Started button (go to login) */}
        <button
          className={style}
          onClick={(e) => {onHandleClick(e)}}
        >
          {isLoggedIn ? 'Logout' : 'Get Started'}
        </button>

        {/* Mobile menu icon */}
        <button className="md:hidden p-2 rounded-full hover:bg-purple-800/50 transition-colors duration-200 hover:scale-110 transform" >
          <i data-feather="menu" className="w-5 h-5 text-purple-200"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;