import{ Navbar,IconButton,Footer} from "@/tailwind";
import Logo from "../logo";
const index = ({children})=>{
    //const.....
    const menus = 
        {
            brand:<Logo />,
            link: [
                {
                    label: "HOME",
                    href: "/"
                },
                {
                    label: "MOVIES",
                    href: "/movies"
                },
                {
                    label: "VIDEOS",
                    href: "/videos"
                },
                {
                    label: "BLOG",
                    href: "/blog"
                },
                {
                    label: "CONTACT",
                    href: "/contact"
                }
            ]
        }
        const toolbars = [
            {
              label : <IconButton size="sm" classForIcon="text-white">search</IconButton>,
              href : "/"
            },
            {
              label : <IconButton size="sm" theme="error"  >person</IconButton>,
              href : "/"
            }
          ]
    
    //markup...
    const design = (
      <>
    <Navbar menu={menus} theme="dark" variant="three" toolbar={toolbars} />
      <div>
        {
          children
        }
      </div>
    <Footer />
      </>
    );
    return design;
   }
   export default index;