import React from 'react'
import Row from '../Rows/Row'
import requests from '../../../Utils/requests'

function RowList() {
  return (
    <>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}isLargeRow={true}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romancs" fetchUrl={requests.fetchRomanceovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      <Row title="TV Serieses" fetchUrl={requests.fetchTvShows}/>
    </>
  )
}
export default RowList