

function Nav(){
    return(
      <nav className="flex items-center justify-between px-6 py-4 bg-gray-950 text-white w-full h-full">
  
      <div className="text-[45px] font-bold font-bebasneue">FINDPIX</div>

  
      <div className="flex-grow mx-4 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-[50%] px-4 py-2 rounded-3xl bg-gray-700 text-gray-100 focus:outline-none font-kanit"
        />
        <button className="ml-[20px]"><i className="fa-solid fa-magnifying-glass bg-green-500 w-[35px] h-[35px] flex justify-center items-center rounded-[100%] hover:rounded-[20%] transition-all duration-[0.18s] ease-in-out"></i></button>
      </div>

   
      <div className="hidden md:flex space-x-4 font-bebasneue mr-[25px] text-[25px]">
        <a href="#" className="hover:text-green-400"><p>Home</p></a>
      </div>

  
      <div className="space-x-4 ml-[15px]">
        <button className="px-3 py-1 bg-green-500 hover:bg-green-600 font-kanit">Login</button>
      </div>
    </nav>

    )
}

export default Nav;