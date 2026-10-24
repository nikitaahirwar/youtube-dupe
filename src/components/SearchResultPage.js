import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_RESULTS_API, GOOGLE_API_KEY } from "../utils/constant";

const SearchResultPage = () => {
  const [params] = useSearchParams();
  const results = params.get("results");
  const [searchMovies, setSearchMovie] = useState(null);

  useEffect(() => {
    getSearchResults();
  }, [results]);

  const getSearchResults = async () => {
    const data = await fetch(
      YOUTUBE_RESULTS_API + results + "&key=" + GOOGLE_API_KEY,
    );
    const json = await data.json();
    console.log("json...", json);
    setSearchMovie(json.items);
  };

  return (
    <div className="md:w-3/4 md:m-auto">
      {searchMovies?.map((movie) => (
        <div key={movie.id.videoId} className="m-2 p-2">
          <Link to={"/watch?v=" + movie.id.videoId} className="md:flex">
            <img
              className="rounded-lg md:h-auto h-[200px]"
              alt="movie image"
              src={movie.snippet.thumbnails.medium.url}
            />
            <div className="md:m-2 md:ml-[10rem] md:p-2">
              <h1 className="font-bold">{movie.snippet.title}</h1>
              <p className="text-sm mb-4">{movie.snippet.channelTitle}</p>
              <p>{movie.snippet.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default SearchResultPage;
