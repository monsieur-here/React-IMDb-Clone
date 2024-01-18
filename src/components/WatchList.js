import { useState } from "react"


// If we have any static/const values that depend on state/props, then we
// should move it outside the component
let genreIds = {      
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western"  
}

function WatchList() {
    // const watchListElement = [{
    //         "adult": false,
    //         "backdrop_path": "/feSiISwgEpVzR1v3zv2n2AU4ANJ.jpg",
    //         "id": 609681,
    //         "title": "The Marvels",
    //         "original_language": "en",
    //         "original_title": "The Marvels",
    //         "overview": "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
    //         "poster_path": "/Ag3D9qXjhJ2FUkrlJ0Cv1pgxqYQ.jpg",
    //         "media_type": "movie",
    //         "genre_ids": [
    //           878,
    //           12,
    //           28
    //         ],
    //         "popularity": 569.145,
    //         "release_date": "2023-11-08",
    //         "video": false,
    //         "vote_average": 6.373,
    //         "vote_count": 885        
    //       }
    //     ]

    const [watchList, setWatchList] = useState(JSON.parse(localStorage.getItem("imdb-clone")|| "[]"))
    const genreNames = new Set(watchList.map((id) => genreIds[id.genre_ids[0]]))
    const [selectedGenre, setSelectedGenre] = useState(null)
    const [searchStr, setSearchStr] = useState("")
    const [sortState, setSortState] = useState(0)
    console.log({genreNames})

    // Need to filter out movies by selected genre
    const watchListFiltered = watchList.filter((item) => {
      //figure out if the item contains this genre
      const genreId = item.genre_ids
      const genreName = genreId.map((id) => genreIds[id]) 

      return selectedGenre ? genreName.includes(selectedGenre) : true

    })
    // Filter out and search the data
    const watchListFilteredAndSearched = watchListFiltered.filter((item) => {
      return item.original_title.toLowerCase().includes(searchStr)
    })

    // Sort the data by ratings after adding in the watchlist
    let watchListFilteredAndSearchedAndSorted = watchListFilteredAndSearched

    if(sortState == 1){
      watchListFilteredAndSearchedAndSorted = watchListFilteredAndSearched.sort((objA, objB) => {
        return objB.vote_average - objA.vote_average
      })
    }

    if(sortState == -1){
      watchListFilteredAndSearchedAndSorted = watchListFilteredAndSearched.sort((objA, objB) => {
        return objA.vote_average - objB.vote_average
      })
    }

  return (
    // Since JSX can handle only one div in a return statement -- To counter that
    // we use Fragment to handle multiple divs
    <>
      <div className="mt-6 flex space-x-2 justify-center">
        {/* Buttons for genres */}
        {Array.from(genreNames).map((name) => (
          <button key={name} onClick={() => setSelectedGenre(name)} 
          className= {selectedGenre === name ? "m-2 text-lg p-1 px-2 bg-gray-400 text-white rounded-xl font-bold" 
                                            : "m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold"
                     }>
            {name}
          </button>
        ))}
        <button key="reset" 
        onClick={() => {setSelectedGenre(null)}}
        className="m-2 text-lg p-1 px-2 bg-red-400 text-white rounded-xl font-bold">
          Reset
        </button>

        <div className="text-center relative">
          <input type="text" placeholder="Search for Movies" 
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={searchStr} onChange={(e) => setSearchStr(e.target.value)}/>
        </div>

      </div>
      <div className='rounded lg-border border-gray-200 m-5 shadow-md'>
        <table className='w-full bg-white text-sm text-gray-500'>
          <thead className='bg-gray-50'>
              <tr>
                  <th>Name</th>
                  <th>Image</th>
                  <th>
                    <div className="flex space-x-2">
                      <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png" 
                           className="mr-1 w-[20px]" onClick={() => setSortState(1)}/>
                      Ratings
                      <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png" 
                           className="mr-1 w-[20px]" onClick={()=>setSortState(-1)}/>
                    </div>
                  </th>
                  <th>Popularity</th>
                  <th>Genre</th>
              </tr>
          </thead>
          <tbody className='border text-center'>
              {watchListFilteredAndSearchedAndSorted.map((watchListItem) => (
                  <tr key={watchListItem.id} className='hover:bg-gray-50'>
                      <td>{watchListItem.original_title}</td>
                      <td>
                        <div className='flex justify-center items-center'>
                          <div className='h-60 w-60 bg-cover'
                          style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${watchListItem.poster_path})`}}>
                          </div>
                          </div>
                      </td>
                      <td>{watchListItem.vote_average}</td>
                      <td>{watchListItem.popularity}</td>
                      <td>{watchListItem.genre_ids.map((id) => genreIds[id]).join(",")}</td>
                      <td className='text-red-600'>
                          Delete
                      </td>
                  </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList
