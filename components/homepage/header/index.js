import { Button, Carousel, Icon } from "@/tailwind";
const index = ()=>{
    const Caption = ({data}) =>{
        const design = (
          <>
          <div className="flex flex-col gap-4 sm:gap-10 px-5">
            <div>
                <h1 className="text-white text-3xl sm:text-8xl font-bold mb-3">{data.title}</h1>
                <div className="flex gap-8 sm:gap-16 items-center">
                    <div>
                        {
                            Array(data.rating).fill(0).map((item, index)=>{
                                return<Icon key={index} className="text-red-600">star</Icon>
                            })
                        }
                        {
                            Array(5-data.rating).fill(0).map((item, index)=>{
                                return<Icon key={index} className="text-red-600"  >star_outline</Icon>
                            })
                        }
                    </div>
                    <p className="text-white text-lg"><span className="text-red-600 font-bold">Duration</span> : {data.duration}</p>
                </div>   
            </div>
            <div className="text-white flex flex-col gap-0 sm:gap-2 text-lg">
                <p><span className="text-red-600 font-bold">Starring</span> : {data.starring}</p>
                <p><span className="text-red-600 font-bold">Category</span> :{data.category}</p>
                <p><span className="text-red-600 font-bold">Tags</span> :{data.tags}</p>
            </div>
            <div>
                <Button theme="error" className="flex gap-2 py-3.5 px-6">
                    <Icon outline={true} className="text-white">play_circle</Icon>
                    PLAY NOW
                </Button>
            </div>
          </div>
          </>
        );
        return design;
    }
    const data = [
        {
            image: "/sanddust2.jpg",
            caption: <Caption data={{
                title: " STREAM DUMP",
                rating: 4,
                duration: " 02.20.00",
                starring: " Balaji",
                category: " Drama, Action, Comedy",
                tags: " Drama, Action, Comedy"
            }} />
        },
        {
            image: "/movie-abc.png",
            caption: <Caption data={{
                title: " STREAM STAR",
                rating: 3,
                duration: " 02.20.00",
                starring: " Balaji",
                category: " Drama, Action, Comedy",
                tags: " Drama, Action, Comedy"
            }}
            />
        },
        {
            image: "/movie-xyz-.png",
            caption: <Caption data={{
                title: " LATEST STREAM NEW",
                rating: 2,
                duration: " 02.20.00",
                starring: " Balaji",
                category: " Drama, Action, Comedy",
                tags: " Drama, Action, Comedy"
            }}
            />
        }
    ]
    const design =(
        <>
        <div className="hidden sm:block">
             <Carousel data={data} height={600} counting={false}/>
       </div>
       <div className="block sm:hidden">
             <Carousel data={data} height={300} counting={false} dots={false} />
       </div>
        </>
    );
    return design;
}
export default index;