import React, {useState, useEffect} from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([]);

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

    return (
        <header className='banner'
            style={{
                backgroundSize:'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition:'center center'
            }}>
            <div className='banner__contents'>
                <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name} </h1>

                <div className='banner__buttons'>
                    <button className='banner__button'>Lire</button>
                    <button className='banner__button'>Ma playlist</button>
                </div>

                <h1 className='banner__description'>{cut(movie?.overview, 150)}</h1>
            </div>
            <div className='banner__fadeBottom'/>
        </header>
    )
}

export default Banner
