import React from 'react'
import css from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={` paddings ${css.wrapper}`}>
        <div className={`innerWidth ${css.container}`}>
            
            {/* upperElements */}
            <div className={css.upperElements}>
                <span>
                    Hey There, <br/> I'm Clyde </span>
                <span>
                    I design beautiful simple 
                <br/>
                things, And I love what I do
                </span>
            </div>


            {/* lowerElements */}
            <div className={css.lowerElements}></div>
        </div>
    </section>
  )
}

export default Hero