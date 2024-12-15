import Image from "next/image"
export default function SugnUptext({Icon,title,children}){
    return(
        <li className="flex flex-col pl-8 mt-4 ">
                <div className="flex gap-3 items-start mb-2">
                    <Image src={Icon} alt='' width={24} />
                    <p className="text-sm font-semibold text-white">{title}</p>
                </div>
                <p className="text-start ml-8 w-3/4 text-sm font-normal text-customGray">{children}</p>
            </li>
    )
}