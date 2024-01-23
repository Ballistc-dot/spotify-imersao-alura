import { ReactNode } from "react";
import { FaHouse } from "react-icons/fa6";

interface ISidebarButton{
  name: string
  icon: ReactNode
  link: string
}

export function SidebarButton({ name,icon,link}:ISidebarButton){
  return(
    <li className="pt-[10px]">
      <a href="" className="flex items-center gap-3">
        {icon}
        <span className="font-DM-sans font-semibold text-[14px]">{name}</span>
      </a>
    </li>
  )
}