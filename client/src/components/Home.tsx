import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import Signup from "./Signup";

function Homepage() {
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  const home = () => {
    navigate("/home");
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-[url('photo-album.jpg')] bg-cover bg-center relative">
      <div className="w-full h-full bg-gray-950/80 absolute z-10"></div>
      <div className="w-[50%] h-[50%] z-20">
        <h1 className="text-[85px] text-center mt-[20px] font-bebasneue font-bold text-white">FINDPIX</h1>
        <h2 className="text-[35px] text-center mt-[25px] font-bebasneue text-white">The perfect place to store memories....</h2>
        <div className="w-full h-[40%] flex justify-center items-center gap-[60px]">
          <button
            onClick={login}
            className="w-[60px] h-[30px] bg-green-500 font-kanit text-[15px] hover:bg-green-600 text-white"
          >
            Login
          </button>
          <button
            onClick={home}
            className="w-[100px] h-[30px] bg-green-500 font-kanit text-[15px] hover:bg-green-600 text-white"
          >
            Try FINDPIX
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />

      </Routes>
    </Router>
  );
}
