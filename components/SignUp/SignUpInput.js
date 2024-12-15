export default function SignUpInput({type,id,placegolder,label,value,setPassword}){
    return(
        <>
        <label htmlFor="password" className="block text-sm font-medium text-customBlack pb-2">{label}</label>
                    <input
                        type={type}
                        id={id}
                        placeholder={placegolder}
                        value={value}
                        onChange={(e) => {setPassword(e.target.value)}}
                        required
                        className="border border-gray-300 rounded w-full pl-3 h-12 border-customGray_2 placeholder:font-normal placeholder:text-placeholderColor placeholder:text-sm" // Increased height for larger input
                    />
        </>
    )
}