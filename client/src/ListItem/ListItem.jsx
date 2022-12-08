import "./listitem.css";
import movieTrailer from "movie-trailer"
import YouTube from "react-youtube"
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUrl } from "./../features/url";

export default function ListItem({ index, movie, isLarge}) {
  const [isHovered, setIsHovered] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("")
  const dispatch = useDispatch();
  const base_Url = "https://image.tmdb.org/t/p/original/"

  
  
//   const handleUrl = (e) => {
//     e.preventDefault();
//     setUrl(dispatch, { url });
//   };

  // let isLarge = false
  const handleClick = (movie) => {
    if(trailerUrl){
      setTrailerUrl('')
      setUrl(dispatch, {});
    }else {
      movieTrailer(movie?.title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search)
        let newurl = urlParams.get('v')
        setTrailerUrl(newurl)
        dispatch(setUrl({newurl}));
        
      })
      .catch((error) => console.log(error))
    }
  }

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const opts = {
    height: "140px",
    width: "100%",
    playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        mute: 1,
        loop: 1
    }
  }

  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
       <img
         onClick={() => handleClick(movie)}
         src={`${base_Url}${isLarge ? movie.poster_path : movie.backdrop_path}`}
        alt=""
      />
      {isHovered && (
        <>
       
       {trailerUrl ? <YouTube  className="video" videoId={trailerUrl} opts={opts} /> : handleClick(movie)}
      
          {/* <video
          onClick={() => handleClick(movie)}
           src={trailer} autoPlay={true} loop /> */}
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">{movie.adult ? "+18" : "All age"}</span>
              <span>{movie?.release_date}</span>
            </div>
            <div className="desc">
            {truncate(movie?.overview, 150)}
              {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus. */}
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}