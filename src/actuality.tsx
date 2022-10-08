import "./Actuality.css";
import newsData from './news.json';
import Select from 'react-select';
import React from "react";

const news = newsData.news;
const categoryList = ["Toutes","Évènement", "Utilisateurs", "Au bureau", "Acteurs culturels","Ambassadeurs"];
const dateList = ["Toutes","2022-06-07","2022-06-06", "2022-06-03","2022-06-02","2022-05-31","2022-05-25","2022-05-25"]

function Actuality() {
    return (
        <div className='container'>
        <h1>Nos Actualités</h1>
        <div className="filters">
            <div className="filter">
                <p className="category-filter">Catégory:</p>
                <select name="category" id="" >
                {categoryList.map((category) => (
                    <option value={category}>{category}</option>
                ))}
                </select>
            </div>
            <div className="filter">
                <p className="category-filter">Date:</p>
                <select name="category" id="">
                {dateList.map((date) => (
                    <option value={date}>{date}</option>
                ))}
                </select>   
            </div>
        </div>
        
        
        <div className='news'>
            {news.map((data) => ( 
            <div className='post' id={data.category}>
                <h2 className='title'>{data.title}</h2>
                <p className='content'>{data.category}</p>
                <p className="date">{data.date}</p>
                <p className="desc">{data.text}</p>
                {data.images?.map((image) => ( 
                    <img src={image} alt="" />
                ))}
            </div>
            ))}
        </div>
        </div>
    );
  }

  export default Actuality;
