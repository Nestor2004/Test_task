import Logotype from '@/components/Logotype';
import SignInInputs from '@/components/signIn/SignInInputs';
export default function SignIn() {
    return (
        <>
        <header className='bg-white flex items-center justify-center pt-28'> {/* Зменшено з pt-28 на pt-20 */}
            <Logotype />
        </header>
        <main className='bg-white min-h-screen items-center justify-center grid'>
            <div className="h-[465px] w-[751px] flex border-2 rounded-3xl border-black">
                <div className='w-[500px]'>
                    <SignInInputs />
                </div>
                
                <div className='bg-black rounded-r-3xl flex flex-col items-center justify-center text-center p-4 w-full ml-8'>
                <h3 className='text-white font-bold text-2xl font-inter flex items-center'>
                    Kodix
                    <span className='text-customGreen ml-2 font-medium text-[12px] border border-customGreen rounded px-2 py-1 h-[24px] flex items-center'>
                        PRO
                    </span>
                </h3>
                <p className='text-customGray font-normal text-sm pt-4'>Unlimited traffic, strategic <br/> support, and AI-driven upsells</p>
                <a href='https://www.kodix.tech/' className='text-customGreen border-b pt-6 border-customGreen font-medium text-[16px]'>Learn More</a>
                </div>
            </div>
        </main>
        </>
    )


}