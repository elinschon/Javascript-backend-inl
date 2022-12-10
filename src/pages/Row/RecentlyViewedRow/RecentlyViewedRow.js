import MovieCard from "../../MovieCard/MovieCard";

export default function RecentlyViewedRow({ title, recentlyViewed}) {

    console.log(recentlyViewed);

    return (
        <section className="row">
      <h1>{title}</h1>
      <div className="movies">
        {recentlyViewed.map((movie) => {
          return (
              <MovieCard key={movie.id} movie={movie}/>
          );
        })}
      </div>
    </section>
    )
}