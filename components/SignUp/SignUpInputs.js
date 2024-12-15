'use client'
import { useState } from 'react';
import SignUpInput from "../SignUp/SignUpInput"
import Link from 'next/link';
import Image from 'next/image';
import ButtonIcon from '../../app/assets/ic_arrow.svg';
import { redirect } from 'next/navigation';

export default function SignUpInputs(){
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        const userData = { email, firstName, lastName, password };
        localStorage.setItem('user', JSON.stringify(userData));
        alert('User registered successfully!');
        redirect('/authorization/signIn')
    };
    return(
        <form onSubmit={handleSignUp} className="bg-white p-8 pt-0 pl-8 rounded-l-full  w-96">
        <h3 className="text-2xl font-semibold  text-start pt-8 ">Sign Up</h3>
        <div className="pt-6 w-[350px]">
            <SignUpInput type="email" id="email" label="Email address" placegolder="Your email address" setPassword={setEmail} value={email} />
        </div>
        <div className="flex  pt-6 w-[350px]">
            
            <div className="mr-2 w-full">
                <SignUpInput type="text" id="firstname" label="First Name" placegolder="Your first name" setPassword={setFirstName} value={firstName}/>
            </div>
            <div className="ml-2 w-full">
                <SignUpInput type="text" id="lastName" label="Last Name" placegolder="Your last name" setPassword={setLastName} value={lastName}/>
            </div>
        </div>
        
        <div className="mb-4 pt-6 w-[350px]">
            <SignUpInput type="password" id="password" label="Password" placegolder="Your password" setPassword={setPassword} value={password}/>
        </div>
        <a href='/' className='text-customGreen_2 font-normal text-sm'>Forgot password?</a>
        <p><button type="submit" className="bg-customGreen_2 flex justify-end font-semibold text-sm text-white p-2 rounded hover:bg-green-600 transition duration-200 w-[350px] h-12 text-start mt-6">
          <span className=' pt-1 mr-60'>Sign Up</span>  
          <Image src={ButtonIcon} alt='' width={24}  className='pt-1 ml-2'/>
            </button></p>
        <p className='pt-12'>Already have an account?  <Link href='/authorization/signIn' className='text-customGreen_2'>Sign In</Link></p>
    </form>
    )
}
