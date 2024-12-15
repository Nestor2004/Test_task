import Image from "next/image";
import Icon  from '../../app/assets/Icon.svg'
import Twiter  from '../../app/assets/Twiter.svg'
import Youtube  from '../../app/assets/Youtube.svg'
import Facebook  from '../../app/assets/facebook.svg'
export default function Post({title, description}){
    return(
   
    <div className="flex flex-col items-center">
      <div className="flex items-center pt-6 pb-4">
        <Image src={Icon} alt="featured" width={18}  className="mr-2" />
        <h2 className="text-black font-semibold">Featured</h2>
      </div>
      
      <h1 className="text-3xl font-bold text-black w-[350px] text-center">{title}</h1>
      <p className="text-gray-700 mt-2 text-[14px] font-normal opacity-50">
        {description}
      </p>
      <div className="flex items-center gap-8 mt-8 text-sm text-gray-500">
        <span className="opacity-60">Wednesday 12, March 2024</span>
        <div className="flex gap-2 border border-gray-300 w-[104px] h-[34px] rounded-full items-center ">
        <span className="w-6 h-6 bg-gray-400 rounded-full ml-1">•</span>
        <span className="font-medium">John Doe</span>
        </div>
      </div>
      <div className="w-[894px]  mt-6 bg-gray-100  h-[339px] rounded-3xl flex items-end justify-start">
        <div className="bg-[rgba(0,0,0,0.4)] w-[87px] h-[20px] ml-4 mb-4 text-[10px] rounded-sm ">
        <span className="text-gray-300 from-neutral-400 pl-2 ">Photo by Andara</span>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <span>Share to </span>
        <a href="https://uk-ua.facebook.com/login/device-based/regular/login/?login_attempt=1" ><Image src={Facebook} alt="Facebook" width={24}/></a>
        <a href="https://uk-ua.facebook.com/login/device-based/regular/login/?login_attempt=1"><Image src={Youtube} alt="Youtube" width={24} /></a>
        <a href="https://www.youtube.com/"><Image src={Twiter} alt="Twiter" width={24} /></a>
      </div>
        </div>
    )
}