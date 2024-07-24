import React, { useContext, useState } from 'react'
import ThemeContext from '../context/theme/ThemeContext';
import NewsContext from '../context/theme/news/NewsContext'
import { fetchNews } from '../context/theme/news/NewsAction';


const Navbar = () => {
  
  const {theme} = useContext(ThemeContext);
  const {newsDispatch} = useContext(NewsContext);

  const [text, setText] = useState('');

  const getNews = async(topic) => {
    const data = await fetchNews(topic);
    newsDispatch({
      type: 'GET_NEWS',
      payload : data,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getNews(text);
  };

  return (
    <nav className={theme?"navbar navbar-expand-lg bg-dark shadow-lg": "navbar navbar-expand-lg bg-light shadow-sm"}>
    <div className="container-fluid">
      <a className="navbar-brand text-danger" href="#">KALTAK</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className={theme?"nav-link active text-light":"nav-link active text-dark"} aria-current="page" href="#" onClick={()=>getNews('Sports')}>Sports</a>
          </li>
          <li className="nav-item">
            <a className={theme?"nav-link active text-light":"nav-link active text-dark"} aria-current="page" href="#" onClick={()=>getNews('Economics')}>Economics</a>
          </li>
          <li className="nav-item">
            <a className={theme?"nav-link active text-light":"nav-link active text-dark"} aria-current="page" href="#" onClick={()=>getNews('Politics')}>Politics</a>
          </li>
          <li className="nav-item">
            <a className={theme?"nav-link active text-light":"nav-link active text-dark"} aria-current="page" href="#" onClick={()=>getNews('International')}>International</a>
          </li>
          <li className="nav-item">
            <a className={theme?"nav-link active text-light":"nav-link active text-dark"} aria-current="page" href="#" onClick={()=>getNews('Religion')}>Religion</a>
          </li>
          <li className="nav-item">
            <a className={theme?"nav-link active text-light":"nav-link active text-dark"} aria-current="page" href="#" onClick={()=>getNews('Bollywood')}>Entertaiment</a>
          </li>
        </ul>

        <form className="d-flex" role="search" onSubmit={(e)=>handleSubmit(e)}>
        <input className={theme ? "form-control me-2 bg-secondary border-dark" : "form-control me-2" } type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setText(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
    </div>
  </nav>
    )
}

export default Navbar


