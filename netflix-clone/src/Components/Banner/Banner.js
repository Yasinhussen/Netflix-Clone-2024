import React, { useEffect,useState } from 'react'
import axios from "../../Utils/axios";
import requests from '../../Utils/requests';
import './banner.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

function Banner() {
const [movie, setMovie] =useState({});
useEffect(()=>{
    (async () => {
        
    try{
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request)
        setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
    }
    catch (error){
console.log("error",error);
    }
    })()
},[]);

function truncate(str, n){
    if((str?.length)>=n){
        return str.substring(0, n-1)+'...';
    }
    else{
        return str;
    }
    // return (str?.lenght>n ? str.slice(0, n-1)+'...':str); 
}
    return (
    <div className='banner' style={{backgroundSize:"cover", backgroundImage:`url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,backgroundPosition:"center",backgroundRepeat:'no-repeat'}}>
        <div className='banner-content'>
        <h1 className='b_title'>
            {movie?.title ||movie?.name || movie?.original_name}
        </h1>
        <div className='banner-buttons'>
            <button className='banner-b play '><PlayArrowIcon/> Play</button>
            <button className='banner-b list'><InfoIcon/>  More Info</button>
        </div>
            <h1 className='banner-description'>
                {truncate((movie?.overview), 150)}
            </h1>
        </div>
         <div className='banner_fadeBottom'/>
    </div>
  )
}

export default Banner
