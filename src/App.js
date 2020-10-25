import React from 'react';

import './App.css';
import Row from "./Components/Row/Row";
import Banner from "./Components/Banner/Banner";
import Nav from './Components/Nav/Nav'
import requests from "./source/requests";

function App() {
    return (
        <div className="app">
            <Nav />
            <Banner />
            <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} largeRow/>
            <Row title="Trending now" fetchURL={requests.fetchTrending}/>
            <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>s
            <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
        </div>
    );
}

export default App;
