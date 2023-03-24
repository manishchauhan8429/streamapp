import { Slider } from "@/tailwind";
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
    const design = (
        <>
        <div>
            <h1 className="text-white text-3xl">Upcomming Movies</h1>
            <Slider data={data} />
       </div>
        </>
    );
    return design;
}
export default index;