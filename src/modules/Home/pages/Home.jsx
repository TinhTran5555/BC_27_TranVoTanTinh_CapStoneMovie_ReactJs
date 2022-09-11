import Banner from "../components/Banner";
import Cinema from "../components/Cinema";
import MovieShowing from "../components/MovieShowing";

const Home = () => {
  return (
    <div className="mt-24">
      <Banner />
       <MovieShowing />
      <Cinema/>
    </div>
  );
};

export default Home;
