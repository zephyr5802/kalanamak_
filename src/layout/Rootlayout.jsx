import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Rootlayout = () => {
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('myBtn').style.display = "block";
    } else {
      document.getElementById('myBtn').style.display = "none";
    }
  }

  window.onscroll = function() {scrollFunction()};
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <button id="myBtn" title="Go to top" onClick={topFunction}>
          Top
        </button>
        <Outlet />
      </main>
      <Footer className="fixed bottom-0 left-0 w-full" />
    </div>
  );
}

export default Rootlayout;
