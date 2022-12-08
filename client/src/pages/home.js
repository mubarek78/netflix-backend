import React from 'react'
import Banner from '../Banner';
import Nav from '../Nav';
import requests from '../requests';
import Row from '../Row';
import List from '../List/List';
function Home({type}) {
  
    if(type === "Movies"){
    return (
      <>
         <Nav />
        <Banner type={type}/>
        {/* <Row title="Netflix original" fetchUrl={requests.fetchNetflixOriginals} isLarge={true} />
        <Row title="Trending" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies}/>
        <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horor" fetchUrl={requests.fetchHororMovies}/>
        <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Documentary" fetchUrl={requests.fetchDocumentaryMovies}/> */}
   
        <List title="Netflix original" fetchUrl={requests.fetchNetflixOriginalMovies} isLarge={true} />
        <List title="Trending" fetchUrl={requests.fetchTrendingMovies}/>
        <List title="Top Rated" fetchUrl={requests.fetchTopRatedMovies}/>
        <List title="Family" fetchUrl={requests.fetchFamilyMovies}/>
        <List title="Action" fetchUrl={requests.fetchActionMovies}/>
        <List title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
        <List title="Animation" fetchUrl={requests.fetchAnimationMovies}/>
        <List title="Horor" fetchUrl={requests.fetchHororMovies}/>
        <List title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
        <List title="Documentary" fetchUrl={requests.fetchDocumentaryMovies}/>
        <List title="Crime" fetchUrl={requests.fetchCrimeMovies}/>
   
       
        
      </>
     ) }
     else if(type === "Series"){
      return(
        <>
         <Nav />
          <Banner type={type}/>
        <List title="Netflix original" fetchUrl={requests.fetchNetflixOriginalsTvs} isLarge={true} />
        <List title="Trending" fetchUrl={requests.fetchTrendingTvs}/>
        <List title="Top Rated" fetchUrl={requests.fetchTopRatedTvs}/>
        <List title="Action" fetchUrl={requests.fetchActionTvs}/>
        <List title="Comedy" fetchUrl={requests.fetchComedyTvs}/>
        <List title="Drama" fetchUrl={requests.fetchDramaTvs}/>
        <List title="Romance" fetchUrl={requests.fetchRomanceTvs}/>
        <List title="Documentary" fetchUrl={requests.fetchDocumentaryTvs}/>
        </>
       )
     }
     else if(type === "Popular"){
      return(
        <>
         <Nav />
          <Banner type={type}/>
        <List title="Trending" fetchUrl={requests.fetchTrendingTvs}/>
        <List title="Top Rated" fetchUrl={requests.fetchTopRatedTvs}/>
        </>
       )
     }
  

 
}

export default Home