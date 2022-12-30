// import { useState } from 'react';
import { Link } from 'react-router-dom'
import NewsCard from '../../components/news-card/news-card'
import Title from '../../components/title/title'
import { newsCardData } from '../../mocks/mocks'
import { appRoutes } from '../../router/app-routes-const'

export default function News({ title }) {

  return (
    <section className="news">
      <div className="container-main">
        <Title mb={60} mt={60}>{title}</Title>
        <div className="news-wrapper">
          {newsCardData.map((item) => (
            <Link style={{textDecoration: 'none'}} to={`${appRoutes.NEWS}/${item.id}`} key={item.id}>
              <NewsCard
                data={item.data}
                title={item.title}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
