import { Search } from "lucide-react";
function Header({city,setCity,fetchWeather}){

    

    return(
        <div className="border-0  flex items-center p-8 rounded-md flex-col w-full">
            <h1 className="">Weather App</h1>
            <header className="flex p-2  justify-center items-center w-full gap-2">
                
                <input 
                type="search" 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="Enter City .." 
                className="w-full outline-1 border-0 rounded-md text-center cursor-pointer px-1 py-2"/>
                <button onClick={() => fetchWeather(city)} className="p-2 bg-white/20 hover:bg-white/40 rounded-lg transition">
                    <Search className="text-gray-500 hover:text-black cursor-pointer "/>
                </button>
            </header>
        </div>
    )
}
export default Header;