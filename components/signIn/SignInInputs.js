'use client';
import { useState } from 'react';
import SignUpInput from "../SignUp/SignUpInput";
import Link from 'next/link';
import Image from 'next/image';
import ButtonIcon from '../../app/assets/ic_arrow.svg';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/authSlice';
import { redirect } from 'next/navigation';

export default function SignInInputs() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSignIn = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            dispatch(login({ email }));
            alert('Sign In successful!');
            redirect('/');
        } else {
            alert('Invalid email or password. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSignIn} className="bg-white p-8 pt-0 pl-8 rounded-l-full w-96">
            <h3 className="text-2xl font-semibold text-start pt-8">Sign In</h3>
            <div className="pt-6 w-[350px]">
                <SignUpInput
                    type="email"
                    id="email"
                    label="Email address"
                    placegolder="Your email address"
                    setPassword={setEmail}
                    value={email}
                />
            </div>
            <div className="mb-4 pt-6 w-[350px]">
                <SignUpInput
                    type="password"
                    id="password"
                    label="Password"
                    placegolder="Your password"
                    setPassword={setPassword}
                    value={password}
                />
            </div>
            <a href="/forgot-password" className="text-customGreen_2 font-normal text-sm">Forgot password?</a>
            <p>
                <button
                    type="submit"
                    className="bg-customGreen_2 flex justify-end font-semibold text-sm text-white p-2 rounded hover:bg-green-600 transition duration-200 w-[350px] h-12 text-start mt-6"
                >
                    <span className="pt-1 mr-60">Sign In</span>
                    <Image src={ButtonIcon} alt="" width={24} height={24} className="pt-1 ml-2" />
                </button>
            </p>
            <p className="pt-10 h-2 ">
                Don’t have an account? <Link href="/authorization/signUp" className="text-customGreen_2">Sign Up</Link>
            </p>
        </form>
    );
}
