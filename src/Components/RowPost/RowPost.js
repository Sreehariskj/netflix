import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constants/constants'
import YouTube from 'react-youtube';
import './RowPost.css'
function RowPost(props){
  const [movie,setMovie] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
    console.log(response.data)
    setMovie(response.data.results)
  })
  },[])
  const opts = {
      height: '390',
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
   const videoEnd=(event) =>{    
            if(event.data === 0) {    
            setUrlId('')
            }
        }
  return(
    <div className="row">
    <h2>{props.title}</h2>
     <div className="posters">
     {movie.map((obj)=>{
       return(
     <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ?"smallPoster" :"poster"} src={`${imageUrl+obj.backdrop_path}`} alt='poster' />)
     })}
    </div>
   {urlId && <YouTube videoId={urlId.key} opts={opts} onStateChange={videoEnd}/>}
    </div>
    )
}
export default RowPost