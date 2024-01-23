import { FaBook, FaPlus } from "react-icons/fa6";

export function Library(){
  return(
    <div className="w-[300px] bg-[#121212] px-[6px] py-4 mt-[12px] rounded-lg font-DM-sans">
        <header className="flex flex-row gap-2 justify-between px-2 ">
          <div className="flex flex-row gap-2">
            <FaBook  color="#b3b3b3" width={24}/>
            <h3 className="font-bold text-[#b3b3b3]">Your Library</h3>
          </div>
          <button><FaPlus color="#b3b3b3" width={24}/></button>
        </header>
        <div className="mt-5"> 
          <div className="bg-[#242424] text-white px-4 py-2 rounded-md flex gap-6 flex-col">
            <div>
              <span className="text-base font-bold">Create your first playlist</span>
              <p className="text-sm">It's easy, we'll help you.</p>
            </div>
            <button className="mb-2 bg-white rounded-2xl p-2 text-black font-semibold w-36">Create playlist</button>
          </div>
        </div>
    </div>
  )
}