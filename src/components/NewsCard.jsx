import React, { useContext } from 'react'
import ThemeContext from '../context/theme/ThemeContext'
import ImageNotFound from '../assets/image-not-found.png'

const NewsCard = ({news}) => {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme ? "card mb-3 bg-dark text-light": "card mb-3 border-dark"}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={!news.urlToImage ? ImageNotFound : news.urlToImage} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8" style={{padding:'10px'}}>
      <div className="card-body">
        <h5 className="card-title">{news.title}</h5>
        <p className="card-text" >{news.description}</p>
        <p className="card-text"><small className="text-body-secondary">{news.author}</small>
            <a className={theme?"btn btn-secondary float-end" : "btn btn-warning float-end"} href={news.url} target='_blank'>Read More</a>
        </p>
      </div>
    </div>
  </div>
</div>
  )
}

export default NewsCard