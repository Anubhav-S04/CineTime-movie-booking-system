import { Routes, Route } from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Header />
          <Routes>
            <Route path="/" element={<h1>Home page</h1>} />
            <Route path="/profile/:id" element={<h1>Profile page</h1>} />
            <Route path="/movies" element={<h1>Movies page</h1>} />
          </Routes>
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
