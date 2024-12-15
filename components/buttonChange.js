import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import Link from "next/link";
import { checkAuth,logout } from "@/store/slices/authSlice";
export default function ButtonChange(){
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

    const handleLogOut = () => {
        dispatch(logout());
        alert('You have been logged out.');
    };
    return(
        <>
        {!user ? (
            <div className="flex gap-4">
                <button className="h-[42px] w-[114px] text-gray-700 border border-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded-full">
                    <Link href="/authorization/signIn">Log In</Link>
                </button>
                <button className="h-[42px] w-[114px] text-white bg-green-500 px-4 py-2 hover:bg-green-600 rounded-full">
                    <Link href="/authorization/signUp">Sign Up</Link>
                </button>
            </div>
        ) : (
            <button
                onClick={handleLogOut}
                className="h-[42px] w-[114px] text-white bg-green-500 px-4 py-2 hover:bg-green-600 rounded-full"
            >
                Log Out
            </button>
        )}
        </>
    )
}