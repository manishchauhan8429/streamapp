import Image from "next/image";
import Logo from "../../components/logo";
import ContactForm from "../../components/Contact-form";
import { IconButton } from "..";
const index = ()=>{
    const design = (
        <>
        <div className="bg-slate-900 p-8 sm:p-16">
            <div className=" mx-auto flex flex-col sm:flex-row sm:justify-between gap-10 sm:gap-0">
                <div>
                    <Logo />
                    <p className="text-gray-300 my-5">
                        If you ever come up with a situationwhere your client <br />  
                        asked to publish content 
                    </p>
                    <div className="flex gap-3 items-center">
                        <button className="bg-slate-800 px-5 py-2 rounded-md">
                            <Image src="/google-play.png" width={150} height={48} alt="google-play" /> 
                        </button>
                        <button className="">
                            <Image src="/app-store.png" width={190} height={60} alt="app-store" /> 
                        </button>
                    </div>
                </div>

                <div>
                <h1 className="text-gray-300 text-xl">Follow us</h1>

                    <div className="text-gray-300 my-5 flex gap-3">
                        <IconButton theme="error">home</IconButton>
                        <IconButton theme="primary">home</IconButton>
                        <IconButton theme="warning">home</IconButton>
                        <IconButton theme="secondary">home</IconButton>
                        <IconButton theme="info">home</IconButton>
                    </div>
                </div>

                <div className="w-full sm:w-3/12">
                    <h1 className="text-gray-300 text-xl">Contact us</h1>
                    <div className="text-gray-300 my-5">
                        <ContactForm />
                    </div>
                </div>
            </div>
            
        </div>
        </>
    );
    return design;
}
export default index;