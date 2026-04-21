import { Routes, Route } from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Profile from "./pages/Profile";
import ScrollToTop from "./components/ScrollToTop";
function App() {

  return (
    <>
    <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          
          <Routes>
            <Route path="/" element={<Home />} />
           
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
          
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
