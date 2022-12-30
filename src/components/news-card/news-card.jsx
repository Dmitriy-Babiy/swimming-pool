export default function NewsCard({data, title}) {
 return (
    <div className='news-card'>
      <div className='news-card-wrapper'>
        <div className='news-card__data'>
          {data}
        </div>
          <div className='news-card__descripion'>
            {title}
          </div>
      </div>
    </div>
  )
}
