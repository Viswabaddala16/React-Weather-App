import { Search } from "lucide-react";
function Header({city,setCity,fetchWeather,onKeyDown}){
    
    

    return(
        <div className="border-0  flex items-center p-8 rounded-md flex-col w-full">
            <h1 className="text-2xl p-2">Weather App</h1>
            <header className="flex p-2  justify-center items-center w-full gap-2">
                
                <input 
                type="search" 
                value={city}
                onChange={(e) => 
                    setCity(e.target.value)                
                } 
                onKeyDown={onKeyDown}
                placeholder="Enter City .." 
                className="w-full focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/20 backdrop-blur-md border border-white/30 rounded-md text-center font-bold tracking-tight cursor-pointer px-1 py-2"/>
                <button onClick={() => fetchWeather()} className="p-2 bg-white/20 hover:bg-white/40 rounded-lg transform-transition active:scale-90">
                    <Search className="text-gray-500 hover:text-black cursor-pointer "/>
                </button>
            </header>
        </div>
    )
}
export default Header;