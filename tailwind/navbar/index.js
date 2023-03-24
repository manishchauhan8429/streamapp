import Link from "next/link";
import { useEffect , useState } from "react";
import { Expand } from "../effect";
import { IconButton } from "..";
const sample ={
    fixed : "fixed top-0 left-0 w-full animate__animated animate__slideInDown",
    sticky : "",
    fixedWidth: "sm:w-4/5 mx-auto",
    dark: {
        nav: "bg-slate-900 sm:px-4",
        a: "text-white py-4 sm:py-6 px-8 sm:px-10 hover:bg-slate-800 hover:text-white"
      },
    light: {
        nav: "bg-secondary sm:px-4",
        a: "text-black py-4 sm:py-6 px-8 sm:px-10 hover:bg-gray-50"
      },
    primary: { nav:"bg-indigo-600 sm:px-4",
               a : "text-white py-4 sm:py-6 px-8 sm:px-10 hover:bg-indigo-500"},
    secondary :{ nav:"bg-blue-600 sm:px-4",
    a : "text-white py-4 sm:py-6 px-8 sm:px-10 hover:bg-blue-500"},
    info :{ nav:"bg-cyan-600 sm:px-4",
    a : "text-white py-4 sm:py-6 px-8 sm:px-10 hover:bg-cyan-500"},
    error : { nav:"bg-red-600 sm:px-4",
    a : "text-white py-4 sm:py-6 px-8 sm:px-10 hover:bg-red-500"},
    warning : { nav:"bg-orange-600 sm:px-4",
    a : "text-white py-4 sm:py-6 px-8 sm:px-10 hover:bg-orange-500"},
    success : { nav:"bg-green-600 sm:px-4",
    a : "text-white py-4 sm:py-6 px-8 sm:px-10 hover:bg-green-500"},
    variant :{
        one :"flex flex-col sm:flex-row sm:items-center sm:justify-start gap-12",
        two:"flex flex-col sm:flex-row sm:items-center sm:justify-end gap-12",
        three:"flex flex-col sm:flex-row sm:items-center sm:justify-between",
        four :"flex flex-col sm:flex-row sm:items-center sm:justify-around",
        five :"flex flex-col sm:flex-row sm:items-center sm:justify-evenly"
    }
}
const navbar = ({
    fullWidth=true, 
    theme="secondary", 
    variant="one", 
    fixed=null, 
    sticky=null, 
    toolbar=null,
    menu}) =>{
   const [stickyControl ,setStickyControl] = useState(sticky);
   const [show,setShow] = useState(false);
    useEffect(()=>{
        if(sticky !== null)
        {
            window.onscroll = () =>{
                if(window.scrollY > 300)
                 {
                    
                   return (setStickyControl(true));
                 }
                 else{
                   return setStickyControl(false);
                 }
                }
        }
            },[stickyControl]);
    const Menus = ({item})=>{
        const m = (
            <>
            <Link href={item.href} className={sample[theme].a}>{item.label}</Link>
            </>
        );
        return m; 
    }
    const design = (
        <> 
        <nav className={`
            ${sample[theme].nav} 
            ${fixed ? sample.fixed : null}
            ${stickyControl ? sample.fixed : null}
            `}>
            <div className={`
                ${sample.variant[variant]} 
                ${fullWidth ? null : sample.fixedWidth}
                `}>
                <div className="flex justify-between items-center">
                 <Link href="/" className={sample[theme].a}>
                 {menu.brand} 
                 </Link>
                 <IconButton onClick={()=>setShow(!show)} className="block sm:hidden bg-white text-black mr-4" size="sm">menu</IconButton>
                 </div>
                    <div className=" hidden sm:flex flex-col sm:flex-row" >
                     {
                        menu.link.map((item,index)=>{
                            return <Menus key={index} item={item}/> 
                        })
                     }
                    </div>
                    {
                        toolbar ? 
                        <div className="hidden sm:flex flex-row gap-4">
                          { toolbar.map((item,index)=>{
                            return <div key={index}>{item.label}</div>
                           }) 
                           }
                        </div> 
                        : null 
                    }
            </div>
        </nav>
        <Expand state={show} className="block sm:hidden fixed bottom-0 left-0 w-full bg-slate-900 z-50">
        <div className="flex flex-col sm:flex-row" >
                     {
                        menu.link.map((item,index)=>{
                            return <Menus key={index} item={item}/> 
                        })
                     }
                    </div>
                    {
                        toolbar ? 
                        <div className="flex flex-row gap-8">
                          { toolbar.map((item,index)=>{
                            return <div key={index}>{item.label}</div>
                           }) 
                           }
                        </div> 
                        : null 
                    }
        </Expand>
        </>
    );
    return design;
}
export default navbar;