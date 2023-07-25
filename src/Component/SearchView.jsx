import React from 'react'
import Hero from './Hero'
import MovieCard from './MovieCard'



const SearchView = ({keyword, searchresult}) => {

    const title = `you are searching for ${keyword}`

    const resultsHtml = searchresult.map((obj,i)=>{
      return <MovieCard movie={obj} key={i} />
    })

  return (
    <div>
        <Hero text={title}/>
        {resultsHtml &&
        <div className='container'>
          <div className='row'>
            {resultsHtml}
          </div>  
        </div>
        }
    </div>
  )
}

export default SearchView