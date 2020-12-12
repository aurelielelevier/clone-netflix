import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {

  return (
    <div className="app">
      <Nav/>
      <Banner/>
      
      <Row 
        title='NETFLIX ORIGINALS' 
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}/>
      <Row title='Trending Row' fetchURL={requests.fetchTrending}/>
      <Row title='Top' fetchURL={requests.fetchTopRated}/>
      <Row title='Action' fetchURL={requests.fetchActionMovies}/>
      <Row title='Comédies' fetchURL={requests.fetchComedyMovies}/>
      <Row title='Horreur' fetchURL={requests.fetchHorrorMovies}/>
      <Row title='Romances' fetchURL={requests.fetchRomanceMovies}/>
      <Row title='Documentaires' fetchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
