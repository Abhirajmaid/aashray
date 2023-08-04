import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import BackToTopButton from "./components/common/BackToTopButton";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import {
  About,
  Property,
  Blog,
  Contact,
  Team,
  Faqs,
  Portifolio,
  PageNotFound,
  Home,
  SingleProperty,
  Signin,
  Signup,
  UserProfile,
  Premium,
} from "./pages";
import { closeDropdown } from "./features/uiSlice";
import Dropdown from "./components/common/DropDown";
import NewsLetter from "./components/common/NewsLetter";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoutes";
import { ToastContextProvider } from "./context/ToastContext";
import { ToastContainer } from "react-toastify";
// import Loader from "./components/common/Loader";

function App() {
  const [showButton, setShowButton] = useState(false);
  // const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();
  const route = useLocation();

  // Show/Hide scroll to top button
  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  });

  const handleCloseDropdown = (e) => {
    dispatch(closeDropdown());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  // Loader when page is loading
  // window.addEventListener("load", () => {
  //   setShowLoader(false);
  // });

  return (
    <AuthContextProvider>
      <ToastContextProvider>
        <div>
          {/* {showLoader && <Loader />} */}
          <Navbar />
          <Dropdown />
          <div
            className="min-h-screen pb-40"
            onClick={handleCloseDropdown}
            onMouseOver={() => dispatch(closeDropdown())}
          >
            <ToastContainer />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/user-profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
              <Route path="/premium" element={<ProtectedRoute><Premium /></ProtectedRoute>} />
              <Route path="/about-us" element={<About />} />
              <Route path="/properties" element={<Property />} />
              <Route path="/properties/property/:slug" element={<SingleProperty />} />
              <Route path="/portifolio" element={<Portifolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/team" element={<Team />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <div className="px-[2%] md:px-[6%] bg-card-dark border border-card-dark">
            {/* <NewsLetter />  */}
            <div className="mt-10">
              <Footer />
            </div>
          </div>
          <BackToTopButton showButton={showButton} />
        </div >
      </ToastContextProvider>
    </AuthContextProvider>
  );
}

export default App;
