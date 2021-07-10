import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail  />,
                title:"Free Cocktail",
                info:'lorem ipsum dollor sit amet consectors adipising elit.mangni, corpors!'

            },
            {
                icon:<FaHiking />,
                title:"Endless HiKing",
                info:
                'lorem ipsum dollor sit amet consectors adipising elit.mangni, corpors!'

            },
            {
                icon:<FaShuttleVan  />,
                title:"Free Shuttle",
                info:'lorem ipsum dollor sit amet consectors adipising elit.mangni, corpors!'

            },
            {
                icon:<FaBeer />,
                title:"Strongest Beeer",
                info:'lorem ipsum dollor sit amet consectors adipising elit.mangni, corpors!'

            }
        ]
    }
    render() {
        return (
            <section className="services">
              <Title title="Services" />
              <div className="services-center">
                  {this.state.services.map((item, index) => {
              return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
              <p>{item.info}</p>

              </article>
              );
                  })}
              </div>          
            </section>
        )
    }
}
