export default function Home(){
    return(
        <div className="w-full h-full flex justify-center items-center bg-[url('photo-album.jpg')] bg-cover bg-center relative">
            <div className="w-full h-full bg-gray-950/80 absolute z-10"></div>
            <div className="w-[50%] h-[50%] z-20">
                <h1 className="text-[85px] text-center mt-[20px] font-bebasneue font-bold text-white">FINDPIX</h1>
                <h2 className="text-[35px] text-center mt-[25px] font-bebasneue text-white">The perfect place to store memories....</h2>
                <div className="w-full h-[40%] flex justify-center items-center gap-[60px]">
                    <button className="w-[60px] h-[30px] bg-green-500 font-kanit text-[15px] hover:bg-green-600 text-white">Login</button>
                    <button className="w-[100px] h-[30px] bg-green-500 font-kanit text-[15px] hover:bg-green-600 text-white">Try FINDPIX</button>
                </div>
            </div>
       </div>
       
    )
}