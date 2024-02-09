import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import BackToTopButton from "./components/common/BackToTopButton";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import {
  About,
  Property,
  Contact,
  Team,
  Faqs,
  PageNotFound,
  Home,
  SingleProperty,
  Signin,
  Signup,
  UserProfile,
  Premium,
Chat,
  LoaderScreen,
  IdentityProof,
} from "./pages";

import { closeDropdown } from "./features/uiSlice";
import Dropdown from "./components/common/DropDown";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoutes";
import { ToastContextProvider } from "./context/ToastContext";
import { ToastContainer } from "react-toastify";
import { Listings, Registration, RoomieFlatPage, RoomiesHome, SinglesListings } from "./pages/_Rommies";
// import { MessHome } from "./pages/_Mess/MessHome"
import ExploreHome from "./pages/_Explore/ExploreHome";
// import Loader from "./components/common/Loader";

function App() {
  const [showButton, setShowButton] = useState(false);
  // const [showLoader, setShowLoader] = useState(true);
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
  // useEffect(() => setTimeout(setShowLoader(false), 1000), [])
  // window.addEventListener("load", () => {
  //   setShowLoader(false);
  // });
  // setShowLoader(true)

  return (
    <AuthContextProvider>
      <ToastContextProvider>
        <div>
          {/* {showLoader && <LoaderScreen />} */}
          <Navbar />
          <Dropdown />
          <div
            className="min-h-screen pb-17"
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
              <Route path="/explore" element={<ProtectedRoute><ExploreHome /></ProtectedRoute>} />
              <Route path="/about-us" element={<About />} />
              {/* <Route path="/mess" element={<MessHome />} /> */}
              <Route path="/properties" element={<Property />} />
              <Route path="/roomies" element={<ProtectedRoute><RoomiesHome /></ProtectedRoute>} />
              <Route path="/roomies-register" element={<ProtectedRoute><Registration /></ProtectedRoute>} />
              <Route path="/roomie-flats" element={<ProtectedRoute><Listings /></ProtectedRoute>} />
              <Route path="/roommates" element={<ProtectedRoute><SinglesListings /></ProtectedRoute>} />
              <Route path="/identity" element={<ProtectedRoute><IdentityProof /></ProtectedRoute>} />
              <Route path="/properties/property/:slug" element={<SingleProperty />} />
              <Route path="/roomie-flats/:id" element={<RoomieFlatPage />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/team" element={<Team />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <div className="px-[2%] md:px-[6%] bg-card-dark border border-card-dark mt-12">
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
