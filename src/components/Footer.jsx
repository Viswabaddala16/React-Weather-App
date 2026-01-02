import { DropletIcon, Wind } from "lucide-react";

function Footer({data}){


    return(
        <div className="border flex gap-6 justify-between p-2"> 
            <div className="flex items-center gap-2">
                <span><DropletIcon className="text-yellow-500"/></span>
                <span>{data.main.humidity}% Humidity</span>
            </div>
            <div className="flex items-center gap-2">
                <span><Wind className="text-green-600"/></span>
                <span>{data.wind.speed} km/h Wind</span>
            </div>
        </div>
    )
}
export default Footer;