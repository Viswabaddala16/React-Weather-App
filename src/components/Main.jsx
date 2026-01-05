import { CloudSunIcon } from "lucide-react";

function Main({data}){


    return(
        <div className="flex flex-col items-center p-4">
            <CloudSunIcon className="text-red-400 "/>
            <span className="">{Math.round(data.main.temp)}°C</span>
            <span className="font-bold tracking-tight">{data.name}</span>
        </div>
    )
}
export default Main;