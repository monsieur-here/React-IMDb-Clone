import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from './Pagination'

// const movies = [{
//     id: 10,
//     posterURL: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6508d53d-9f08-4740-a8a1-d26e4506f78a/deth59e-91bff3f3-a2f9-45d3-a28e-b806141b451d.jpg/v1/fill/w_1280,h_1811,q_75,strp/the_batman__2022__poster_by_marvelmango_deth59e-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMSIsInBhdGgiOiJcL2ZcLzY1MDhkNTNkLTlmMDgtNDc0MC1hOGExLWQyNmU0NTA2Zjc4YVwvZGV0aDU5ZS05MWJmZjNmMy1hMmY5LTQ1ZDMtYTI4ZS1iODA2MTQxYjQ1MWQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.msFvdkVD4e5FcPNBBNoRgCfkbwfkXZDG-KzHkmzcY8U",
//     title:"The Batman"
// },

//   {
//     id: 30,
//     posterURL: "https://www.tallengestore.com/cdn/shop/products/Joker_-_Put_On_A_Happy_Face_-_Joaquin_Phoenix_-_Hollywood_English_Movie_Poster_3_de5e4cfc-cfd4-4732-aad1-271d6bdb1587_large.jpg?v=1579504979",
//     title:"The Joker"
//   },

//   {
//     id: 20,
//     posterURL: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
//     title:"The Dark Knight Rises"
//   }
  
// ]

// Make a request to an API endpoint
// Get the response
// Use the response to store the list of movies in our component



function Movies() {

  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [watchList, setWatchList] = useState(JSON.parse(localStorage.getItem("imdb-clone")|| "[]"))
  const [hoveredMovie, setHoveredMovie] = useState(null)

  const trendingMovies = async () => {

    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=8b227ceaeb8acf6e61e1aab20eff8097&page=${currentPage}`)
    const moviesRes = response.data.results

    setMovies(moviesRes)
  }

  const decreasedPageNumber = () => {
    console.log("Decreased")
    if(currentPage > 1){
      setCurrentPage(currentPage-1)
    }
  }

  const increasedPageNumber = () => {
    console.log("Increased")
    setCurrentPage(currentPage+1)
  }

  useEffect(() => {
    trendingMovies() 
  }, [ currentPage ]
  )

  const addToWatchList = (movie) => {
     const newList = [...watchList]
     newList.push(movie)
     localStorage.setItem("imdb-clone", JSON.stringify(newList))
     setWatchList(newList)
  }

  const removeFromWatchList = (movie) => {
    const newList = watchList.filter((mov) => {
      return mov !== movie
    })
    localStorage.setItem("imdb-clone", JSON.stringify(newList))
    setWatchList(newList)
 }

//  console.log({ watchList, hoveredMovie })

  const watchListIds = watchList.map((movie)=> movie.id)

  return (
    <div>
      <div className='text-2xl mt-4 mb-8 font-bold text-center'>
        Trending Movies
      </div>
      <div className='flex justify-center flex-wrap'>
        {movies.map((movie) => {
          return (
            <div
            onMouseOver = {() => setHoveredMovie(movie.id)}
            onMouseLeave = {() => setHoveredMovie(null)} 
            style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`}} 
            key={movie.id} className='w-[250px] h-[40vh] bg-center bg-cover m-4 md: h-[30vh] md: w-[250px] flex items-end rounded-md relative'>
              {/* Check if movie is present in watchlist
              If present display '-' else display '🧡' */}
              <div 
              style={{visibility: movie.id === hoveredMovie ? "visible" : "hidden"}}
              className='text-2xl p-2 bg-gray-900 text-white absolute left-2 top-2 bg-opacity-60'>
                { watchListIds.includes(movie) ? (
                <div onClick={() => removeFromWatchList(movie)}>
                    <div> - </div>
                </div> 
                ) :
                <div onClick={() => addToWatchList(movie)}>
                  <div> 🧡 </div>
                </div>
                }
              </div>
              
              <div className='overflow-hidden text-white font-bold text-center w-full bg-gray-900'>
                {movie.title}
              </div>
              
            </div>
          )
        })}
      </div>
      <Pagination page={currentPage} increasePageNumber={increasedPageNumber} decreasePageNumber={decreasedPageNumber} />
    </div>
  )
}

export default Movies

