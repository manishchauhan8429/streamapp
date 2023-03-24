import { Slider } from "@/tailwind";
import { useSelector } from "react-redux";
const index = ()=>{
    const data = [
        {
            thumbnail: "sanddust2.jpg",
            title: "Stream dump",
            duration: "2:00:16"
        },
        {
            thumbnail: "movie-xyz-.png",
            title: "Stream dump",
            duration: "2:20:00"
        },
        {
            thumbnail: "movie-abc.png",
            title: "Stream dump",
            duration: "2:10:10"
        },
        {
            thumbnail: "movie-bcd.png",
            title: "Stream dump",
            duration: "2:00:16"
        },
        {
            thumbnail: "movie-abc.png",
            title: "Stream dump",
            duration: "2:20:00"
        },
        {
            thumbnail: "movie-abc.png",
            title: "Stream dump",
            duration: "2:10:10"
        },
        {
            thumbnail: "movie-abc.png",
            title: "Stream dump",
            duration: "2:10:10"
        },
        {
            thumbnail: "movie-xyz-.png",
            title: "Stream dump",
            duration: "2:20:00"
        },
        {
            thumbnail: "movie-abc.png",
            title: "Stream dump",
            duration: "2:10:10"
        },
    ]
    const {AnimationReducer} = useSelector(response=>response);
    const {image} = AnimationReducer;
    const design = (
        <>
        <div  style={{
            transition: "0.5s linear",
            height:600,
            background: `url( ${image ? image : 'sanddust2.jpg'})`,
            backgroundSize: "cover"
        }}>
            <div className="h-full p-8" style={{
                background: "linear-gradient(to right, rgba(0,0,0,0.9),transparent)"
            }}>
                <h1 className="text-white text-3xl mb-4">Top 10 Movies</h1>
                <div className="overflow-hidden relative" style={{
                    width: 330,
                    height: 516
                }}>
                    <Slider data={data} vertical={true} />
                </div>
            </div>
        </div>
        </>
    )
    return design;
}
export default index;