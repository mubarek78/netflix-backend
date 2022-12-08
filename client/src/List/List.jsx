import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,
  } from "@material-ui/icons";
  import { useRef, useState, useEffect } from "react";
  import axios from "../axios";
  import ListItem from "../ListItem/ListItem";
  import "./list.css";
  
  export default function List({title, fetchUrl, isLarge}) {
     
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
  
    const listRef = useRef();
  
    const [movies, setMovies] = useState(false)
    const [trailerUrl, setTrailerUrl] = useState("")
    console.log(movies)
    
    useEffect( () => {
         async function fetchData() {
             const  request = await axios.get(fetchUrl)
             console.log(request)
             setMovies(request.data.results)
          
    
         }
         fetchData()
    }
    
    , [fetchUrl])


    const handleClick = (direction) => {
      setIsMoved(true);
      let distance = listRef.current.getBoundingClientRect().x - 50;
      if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
        listRef.current.style.transform = `translateX(${230 + distance}px)`;
      }
      if (direction === "right" && slideNumber < 18) {
        setSlideNumber(slideNumber + 1);
        listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      }
    };

    if(movies == false) { 
        return(<p>Loading</p>)
    }else{
    return (
      <div className="list">
        <h1 className="listTitle">{title}</h1>
        <div className="wrapper">
          <ArrowBackIosOutlined
            className="sliderArrow left"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />
          <div className="container" ref={listRef}>
          { movies.map((movie, index) => <ListItem index={index} movie={movie}/>)}
          </div>
          <ArrowForwardIosOutlined
            className="sliderArrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    );
        }
  }