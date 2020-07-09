import React, { useState, useEffect } from 'react';
import '../../global.css';
import './Home.css';
import api from '../../services/api'
import banner from '../../assets/banner-2.jpg'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'
import history from '../../services/history'
import noticia from '../../assets/noticia.jpg'

function Home() {
  const [workshops, setWorkshop] = useState([])
  const [lectures, setLectures] = useState([])
  const [shows, setShows] = useState([])
  const [newses, setNews] = useState([])

  useEffect(()=>{
    async function getData(){
      const lastworkshops = await api.get(`/lastWorkshops`)
      const lastlectures = await api.get('/lectures')
      const lastShows = await api.get('/lastShows')
      const lastNews = await api.get('/lastNews')

      setWorkshop(lastworkshops.data.data)
      setShows(lastShows.data.data)
      setNews(lastNews.data)    
    }
    getData()
  }, [])

  return (
    <div className="home-container">
      <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
        <div className="banner-div">
        <section className="section-1">
          <p style={{fontSize:'2.4em', fontFamily:'Amatic SC' }}>Homenagem de Cristovão Bastos e Clarisse Grova a Aldir Blanc</p>
            <p className="min-home">Homenagem de Cristovão Bastos e Clarisse Grova a Aldir Blanc estreia, aqui no Bossa Criativa nesta sexta-feira, 10/7, a partir das 18h</p>
            <a className="leia btn news-btn" onClick={()=> { history.push(`/noticia/${5}`)}}>Leia mais</a>
          <br/>
        </section>
        <section className="section-2" style={{backgroundImage:`url(${noticia})`}}> 
        </section>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="banner-div">
        <section className="section-1">
          <p style={{fontSize:'2.4em', fontFamily:'Amatic SC' }}>BOSSACRIATIVA</p>
            <p className="min-home">No Bossa Criativa – Arte de Toda Gente, a Fundação Nacional de Artes – Funarte e a Universidade Federal do Rio de Janeiro (UFRJ) reúnem apresentações e capacitação em diversas formas artísticas e de economia criativa.</p>

          <br/>
        </section>
        <section className="section-2" style={{backgroundImage:`url(${banner})`}}> 
        </section>
      </div>
      </Carousel.Item>
      </Carousel>
    </div>
      <div className="home-content">
        <h4 className="title max-home">APRESENTAÇÕES</h4>
        <div className="artistas">
          <div className="mySlides">
            {shows.map(show=>
                    <div className="home-carousel-item" style={{ backgroundColor: "#E7C032"}} onClick={()=>history.push(`/apresentacao/${show.id}`)}>
                        <img className="div-img" src={show.img_url}/>
                        <h6 style={{backgroundColor:`${show.theme_color}`}}>{show.artist}</h6>
                          <p>{show.introduction}</p>
                    </div>
                        )}
          </div>         
        <div className="buttons">
          <Link to="/apresentacoes"><button>Veja mais</button></Link>
        </div>
        </div>
      </div>
      <div className="home-content">
        <h4 className="title max-home">ÚLTIMAS NOTÍCIAS</h4>
        <div className="noticias">
        {newses.map(news=>
                    <div style={{ backgroundColor: "#E7C032"}}>
                        <div className="div-img news-img" style={{backgroundImage: `url(${news.img_url})`}}/>
                        <div className="news-text">
                          <h6 className="not-title" style={{backgroundColor: 'white'}}>{news.title}</h6>
                          <p className="desc">{news.introduction}</p>
                          <a className="leia btn" onClick={()=> { history.push(`/noticia/${news.id}`)}}>Leia mais</a>
                        </div>
                    </div>
                    )}
        </div>
        <div className="buttons">
           <Link to="/noticias"><button>Veja mais</button></Link>
        </div>
      </div>
      <div className="home-content">
      <h4 className="title max-home">OFICINAS</h4>
      <div className="artistas">
          <div className="mySlides">
            {workshops.map(workshop =>
              <div style={{ backgroundColor: "#E7C032"}} onClick={()=>{ history.push(`/oficina/${workshop.id}`)}}>
                <div className="div-img" style={{backgroundImage: `url(${workshop.img_url})`}}/>
                <h6 style={{backgroundColor: `${workshop.theme_color}`}}>{workshop.artist_name}</h6>
                <p>{workshop.introduction}</p>
              </div>
            )}
          </div>
        <div className="buttons">
          {/*<div className="dots">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            </div>*/}
          <Link to="/oficinas"><button>Veja mais</button></Link>
        </div>
        </div>
      </div>
      {/*<div className="home-content">

      <h4 className="title max-home">PALESTRAS</h4>
          <Carousel>
            
          {lectures.map((item)=>{
            return (
              <Carousel.Item>
        
        <div className="oficinas-palestras">
                {item.map((lecture) => {
                  return (
                    <div className="home-carousel-item" style={{ backgroundColor: "#E7C032"}}>
                      <img className="div-img" src={lecture.img_url}/>
                      <h6 style={{backgroundColor:`${lecture.theme_color}`}}>{lecture.speaker}</h6>
                      <p>{lecture.speaker}</p>
                    </div>
                  )
                })}
        </div>
              </Carousel.Item>
            )
            
          })}
          </Carousel>
        <div className="buttons">   
        <Link to="/palestras"><button>Veja mais</button></Link>
        </div>
        </div>*/}
    </div>
  );
}
export default Home