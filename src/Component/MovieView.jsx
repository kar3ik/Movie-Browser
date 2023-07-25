import React, { useState } from 'react'
import Hero from './Hero'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const MovieView = () => {
    const {id} = useParams()
    const [movieDetails,setMovieDetails] = useState({})
    const [isLoading,setIsLoading]= useState(true)

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/search/movie/${id}?&api_key=0c9e2aead16efd0daa31100a5c80e66b&language=en-US`)
        .then(res=>res.json())
        .then (data=>{
            setMovieDetails(data)
            setIsLoading(false)
        })

    },[id])


    function renderMovieDetails(){
        if(isLoading){
            return <Hero text="Loading.." />
        }
        if(movieDetails){

            const backdropUrl =`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`

            const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`

            return(
                <>
                    <Hero text={movieDetails.original_title}  backdrop={backdropUrl}/>
                    <div className='container my-5'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <img src={posterPath} alt="..." className='img-fluid shadow rounded' />
                            </div>
                            <div className='col-md-9'>
                                <h2>{movieDetails.original_title}</h2>
                                <p className='lead'>
                                    {movieDetails.overview}
                                </p>
                            </div>

                        </div>

                    </div>

                </>
            )
        }
    }
  return renderMovieDetails()
}

export default MovieView