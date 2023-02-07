import React from 'react'

const Card = (props) => {
    const {cardTitle} = props;
  return (
    <>
      <section className='card'>
        <h2 className='cardTitle'>{cardTitle}</h2>
        <p className='cardDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quo excepturi incidunt nobis assumenda enim dignissimos repudiandae doloribus blanditiis, consequuntur architecto alias nostrum dicta, nisi officia facilis ipsum eveniet impedit?</p>
        <p className='cardFooter'>{new Date().toLocaleDateString()}</p>
      </section>
    </>
  )
}

export default Card