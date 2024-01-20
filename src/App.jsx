import { useEffect, useState } from "react"
import Results from "./Components/Results"
import axios from "axios"

function App() {

  const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

  const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState("");


  const changeTheSearch = (e) => {
    setSearch(e.target.value)
  }

  const getAllMovies = () => {
    axios.get(APIURL)
    .then((response) => {setMovies(response.data.results) } )
    
    .catch((error) => {console.log(error)})
  }

  const getSearchMovies = () => {
    axios.get(SEARCHAPI + search)
    .then((response) => {setMovies(response.data.results)})
    .catch((error) => {console.log(error)})
  }
 
  useEffect(() => {
    setMovies([]);
    if (search === "") {
      getAllMovies();
    }
    else{
      getSearchMovies();
    }
  
  }, [search]);

  

  return (
    <>
      <div className="max-w-[1000px] mx-auto shadow-xl min-h-[400px] p-3">
        <input type="search" value={search} onChange={changeTheSearch} name="search" id="search" placeholder="Search Here..." className="p-3 w-full border border-black rounded focus:border-green-700 focus:border-2 text-slate-600 outline-none"/>
        {movies.length === 0 ? <div className="text-center text-2xl m-2"> Loading.... </div> : <Results movies={movies}/>}
      </div>
    </>
  )
}

export default App
