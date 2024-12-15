'use client'
import Image from "next/image";
import { useSelector } from "react-redux";
import Twiter  from '../../app/assets/Twiter.svg'
import Youtube  from '../../app/assets/Youtube.svg'
import Facebook  from '../../app/assets/facebook.svg'
export default  function PostDetail({title,body}){
   
    return(
        <div className="flex flex-col pl-44 w-full pt-7">
  <div className="grid gap-2 w-[553px]">
    <h1 className="text-3xl font-semibold text-black w-[500px] font-inter">{title}</h1>
    <p className="text-gray-700 mt-2 text-[14px] font-normal opacity-50 font-inter">
      {body}
    </p>
  </div>
  <div className="flex gap-4 mt-8 text-sm text-gray-500 ">
    <span className="opacity-60 font-inter font-medium text-[12px] pt-2">WEDNESDAY 12, MARCH 2024</span>
    <div className="flex gap-2 border border-gray-300 w-[104px] h-[34px] rounded-full items-center">
      <span className="w-6 h-6 bg-gray-400 rounded-full ml-1">•</span>
      <span className="font-medium">John Doe</span>
    </div>
  </div>
  <div className="w-[553px] mt-6 bg-gray-100 h-[246px] rounded-3xl flex items-end justify-start">
    <div className="bg-[rgba(0,0,0,0.4)] w-[87px] h-[20px] ml-4 mb-4 text-[10px] rounded-sm">
      <span className="text-gray-300 pl-2">Photo by Andara</span>
    </div>
  </div>
  <div className="flex gap-4 mt-4">
    <span>Share to</span>
    <a href="https://uk-ua.facebook.com/login/device-based/regular/login/?login_attempt=1">
      <Image src={Facebook} alt="Facebook" width={24}  />
    </a>
    <a href="https://uk-ua.facebook.com/login/device-based/regular/login/?login_attempt=1">
      <Image src={Youtube} alt="Youtube" width={24}  />
    </a>
    <a href="https://www.youtube.com/">
      <Image src={Twiter} alt="Twiter" width={24}  />
    </a>
  </div>
</div>

    )
}