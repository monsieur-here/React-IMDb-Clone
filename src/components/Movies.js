import React from 'react'

const movies = [{
    id: 10,
    posterURL: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6508d53d-9f08-4740-a8a1-d26e4506f78a/deth59e-91bff3f3-a2f9-45d3-a28e-b806141b451d.jpg/v1/fill/w_1280,h_1811,q_75,strp/the_batman__2022__poster_by_marvelmango_deth59e-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMSIsInBhdGgiOiJcL2ZcLzY1MDhkNTNkLTlmMDgtNDc0MC1hOGExLWQyNmU0NTA2Zjc4YVwvZGV0aDU5ZS05MWJmZjNmMy1hMmY5LTQ1ZDMtYTI4ZS1iODA2MTQxYjQ1MWQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.msFvdkVD4e5FcPNBBNoRgCfkbwfkXZDG-KzHkmzcY8U",
    title:"The Batman"
},

  {
    id: 30,
    posterURL: "https://www.tallengestore.com/cdn/shop/products/Joker_-_Put_On_A_Happy_Face_-_Joaquin_Phoenix_-_Hollywood_English_Movie_Poster_3_de5e4cfc-cfd4-4732-aad1-271d6bdb1587_large.jpg?v=1579504979",
    title:"The Joker"
  },

  {
    id: 20,
    posterURL: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
    title:"The Dark Knight Rises"
  }
  
]



function Movies() {
  return (
    <div>
      <div className='text-2xl mt-4 mb-8 font-bold text-center'>
        Trending Movies
      </div>
      <div className='flex flex-wrap'>
        {movies.map((movie) => {
          return (
            <div style={{backgroundImage: `url(${movie.posterURL})`}} key={movie.id} className='w-[250px] h-[40vh] bg-center bg-cover m-4 md: h-[30vh] md: w-[250px] flex items-end rounded-md'>
              <div className='text-white font-bold text-center w-full bg-gray-900'>
                {movie.title}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Movies
