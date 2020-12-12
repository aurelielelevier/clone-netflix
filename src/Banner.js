import React, {useState, useEffect} from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer'

function Banner() {
    const [movie, setMovie] = useState([]);
    const [trailerURL, setTrailerURL] = useState('')

    useEffect(() => {
        async function fetchData (){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ])
        }
        fetchData()
    }, [])

    function cut (string, number){
        return string?.length > number ? string.substr(0,number-1)+ '...': string
    }
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };

    const handleClick = (movie)=>{
        if (trailerURL){
            setTrailerURL('');
        } else {
            movieTrailer(movie?.name || movie?.title || movie?.original_name || '')
            .then (url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerURL(urlParams.get('v'))
            }).catch((error)=> console.log(error))
        }
    }
    return (
        <>
        <header className='banner'
            style={{
                backgroundSize:'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition:'center center'
            }}>
            <div className='banner__contents'>
                <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name} </h1>

                <div className='banner__buttons'>
                    <button 
                        className='banner__button'
                        onClick={()=> handleClick(movie)}
                    >Lire</button>
                    <button className='banner__button'>Ma playlist</button>
                </div>

                <h1 className='banner__description'>{cut(movie?.overview, 150)}</h1>
            </div>
            <div className='banner__fadeBottom'/>
        </header>
        { trailerURL && <Youtube videoId={trailerURL} opts={opts}/>}
        </>
    )
}

export default Banner
