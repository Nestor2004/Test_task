import Logo from "../app/assets/Logo.svg"
import Image from "next/image";
export default function Logotype(){
    return(
        <div className="gap-4">
        <Image src={Logo} alt='Logotype' width={240}/>
    </div>
    )
}