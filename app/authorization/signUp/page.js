import Logotype from '@/components/Logotype';
import SugnUptext from '@/components/SignUp/SignUpText';
import Icon_1 from "../../assets/Icon_1.svg";
import Icon_2 from "../../assets/Icon_2.svg";
import Icon_3 from "../../assets/Icon_3.svg";
import Icon_4 from "../../assets/Icon_4.svg";
import SignUpInputs from '@/components/SignUp/SignUpInputs';
import AuthLayout from './layout';
export default function SignUp() {
    

    return (
        <AuthLayout>
       <header className='bg-white flex items-center justify-center pt-28'>
        <Logotype/>
       </header>
        <main className='bg-white min-h-screen items-center justify-center grid'>
       
        <div className="h-[586px] w-[751px]  flex  border-2 rounded-3xl border-black">
            <div className='w-[500px]'>
            <SignUpInputs/>
            </div>
            <div className='bg-black rounded-r-3xl '>
            <h1 className='text-semibold text-2xl text-white pt-8 pl-8'>Get Your Tree <br/> 30-Days Trial Now</h1>
            <ul>
            <SugnUptext Icon={Icon_1} title="Absolutely FREE">No hidden charges, No credit card required</SugnUptext>
            <SugnUptext Icon={Icon_2} title="Fast & Easy">Get access instantly, no downloads required</SugnUptext>
            <SugnUptext Icon={Icon_3} title="Your Own Data">Enjoy the Free Trial with your company data</SugnUptext>
            <SugnUptext Icon={Icon_4} title="Unlimited Features">Access all features of the world's #1 business software!</SugnUptext>
            </ul>
            <p className='text-white pl-8 text-sm font-semibold gap-1 pt-20'>
                <span>Call us at </span>
                <span className='text-customGreen'>800 1301 448</span>
            </p>
            </div>
        </div>
        </main>
        </AuthLayout>
    );
}