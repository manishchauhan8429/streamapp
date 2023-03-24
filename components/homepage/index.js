import Header from "./header";
import LatestMovies from "./latest-movies"
import UpcomingMovies from "./upcoming-movies";
import TopTenMovies from "./top-ten-movies";
import TrandingMovies from "./tranding-movies";
const index = ()=>{
    const design =(
        <>
          <Header />
          <div className="bg-slate-800 p-8 sm:p-16 ">
            <div className="flex flex-col gap-8 sm:gap-16">
              <LatestMovies />
              <UpcomingMovies />
              <TopTenMovies />
              <TrandingMovies />
            </div>
          </div>
        </>
    );
    return design;
}
export default index;