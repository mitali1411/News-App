import React, { useContext, useEffect } from 'react'
import WeatherComponent from '../components/WeatherComponent'
import Carousal from '../components/Carousal'
import NewsCard from '../components/NewsCard'
import ThemeContext from '../context/theme/ThemeContext'
import { getWeather } from '../context/theme/Weather/WeatherAction'
import WeatherContext from '../context/theme/Weather/WeatherContext'
import NewsContext from '../context/theme/news/NewsContext'
import { fetchNews } from '../context/theme/news/NewsAction'
import QuoteComponent from '../components/QuoteComponent'
import Chart from '../components/Chart'

const Home = () => {

  const {theme} = useContext(ThemeContext);
  const {allNews, newsDispatch} = useContext(NewsContext);
  const {dispatch} = useContext(WeatherContext);

  // console.log(allNews);

  const fetchWeather = async() => {
    const data = await getWeather();
    dispatch({
      type : "GET_WEATHER",
      payload : data
    })
  };

  const getNews = async() => {
    const data = await fetchNews('Indore');
    // console.log(data)
    newsDispatch({
      type : 'GET_NEWS',
      payload : data
    })
  };


  useEffect(() => {
    fetchWeather();
    getNews();
  }, []);


  return (
    <div className={theme ? 'container-fluid py-3 bg-secondary' : 'container-fluid py-3'}>
        <QuoteComponent/>
        <Carousal/>
        <div className="row g-3 my-3">
            
            <div className="col-sm-12 col-md-8">
            {allNews.map((news, index)=>{
                   return <NewsCard key={index} news={news}/>
                  })}
            </div>

            <div className="col-sm-12 col-md-4">
              <WeatherComponent/>  
            </div>
        </div>

                  <Chart/>

    </div>
  )
}

export default Home