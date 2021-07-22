import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'
import YouTube from 'react-youtube';
import './Banner.css'

function Banner(){
  const [movie,setMovie] =useState()
  const [urlId,setUrlId] = useState('')
  
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      setMovie(response.data.results[0])
      console.log(response.data.results)
    })
 },[])
 const opts = {
      height: '450',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
  const handleMovie=(id)=>{
     console.log(id)
     axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
       if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
       }else{console.log('trailer empty')}
     })
   } 
  
   const onVideoEnd=(event) =>{    
            if(event.data === 0) {    
            setUrlId('')
            }
        }
  return (
    <div>
    
    <div style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path :""})`}}className="banner">
   
      <div className="content">
      <h1 className="title">{movie ? movie.title :""}</h1>
      <div className="banner_buttons">
      <button className="button"
      onClick={()=>handleMovie(movie.id)
      } >Play</button>
      <button className="button">My List</button>
      </div>
       <h1 className="description">{
         movie ? movie.overview :""
       }</h1>
      </div>
      <div className="fade_bottom"></div>
    </div> 
      {urlId && <YouTube videoId={urlId.key} opts={opts} onStateChange={onVideoEnd}/>} 
    </div>
    )
}
export default Banner;