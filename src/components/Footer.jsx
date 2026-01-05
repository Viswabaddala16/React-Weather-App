import { DropletIcon, Wind } from "lucide-react";

function Footer({data}){


    return(
        <div className=" flex gap-6 justify-between p-2"> 
            <div className="flex items-center gap-2  bg-white/10 p-4 rounded-2xl">
                <span><DropletIcon className="text-yellow-500"/></span>
                <span className="text-white/90">{data.main.humidity}% Humidity</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 p-4 rounded-2xl">
                <span><Wind className="text-green-600"/></span>
                <span className="text-white/90">{data.wind.speed} km/h Wind</span>
            </div>
        </div>
    )
}
export default Footer;