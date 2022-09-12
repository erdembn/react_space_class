
import './newscard.css'

import React, { Component } from 'react'

export default class NewsCard extends Component {
    render() {

        const { news } = this.props
        return (
            <div className='news-container'>
                {news?.map((article) => {
                    return (
                        <div key={article.id} className="news-card">

                            <img src={article.imageUrl} alt={`image for the article of ${article.title}`} />
                            <h1 >{article.title}</h1>
                            <p>{article.summary}</p>
                            <a href={article.url}>Click to Read More</a>
                        </div>

                    )
                })}
            </div>
        )
    }
}







