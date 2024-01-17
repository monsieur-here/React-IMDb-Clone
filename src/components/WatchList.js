import { useState } from "react"

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

  return (
    <div className='rounded lg-border border-gray-200 m-5 shadow-md'>
      <table className='w-full bg-white text-sm text-gray-500'>
        <thead className='bg-gray-50'>
            <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Ratings</th>
                <th>Popularity</th>
                <th>Genre</th>
            </tr>
        </thead>
        <tbody className='border text-center'>
            {watchList.map((watchListItem) => (
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
                    <td>{watchListItem.genre_ids.map((id) => id)}</td>
                    <td className='text-red-600'>
                        Delete
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default WatchList
