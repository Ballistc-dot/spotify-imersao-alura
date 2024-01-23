import { FaHouse, FaMagnifyingGlass} from "react-icons/fa6";
import { SidebarButton } from "./sidebar-button";
import { Library } from "./library";

export function SideBar(){
  return(
     <div className="fixed w-[314px] flex-shrink-0 top-0 left-0 bottom-0 pl-[12px] pt-[12px]">
      <nav className="bg-[#121212] rounded-lg pl-4 pt-4">
        <div>
          <div className="pl-[10px]">
            <a href="/">
              <img className="w-[80px]" src="/assets/icons/logo-spotify.png" alt="Logo spotify" />
            </a>
          </div>
          <div>
            <ul className="text-[#b3b3b3] font-semibold text-base pl-[10px] pr-[20px] pb-[17px] mt-[20px]">
                <SidebarButton name="Home" icon={ <FaHouse width={24} color="#b3b3b3"/>} link="/"/>
                <SidebarButton name="Search" icon={ <FaMagnifyingGlass width={24} color="#b3b3b3"/>} link="/"/>
            </ul>
          </div>
         
        </div>
      </nav>

      <Library/>
    </div> 
  )
}