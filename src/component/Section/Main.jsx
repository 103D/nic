import React from 'react'
import Collection from './Collection'
import Marketplace from './Marketplace'
import FAQ from './FAQ'
import Subscribe from './Subscribe'
import Weekly from './Weekly'
import Hero from '../Section/Hero'

function Main() {
  return (
    <div className='main'>
      <section className="hero">
        <Hero />
      </section>
      <section className="weekly">
          <Weekly />
      </section>
      <section className="collection">
        <Collection />
      </section>
      <section className="marketplace">
        <Marketplace />
      </section>
      <section className="faq">
        <FAQ />
      </section>
      <section className="subscribe">
        <Subscribe />
      </section>
    </div>
  )
}

export default Main
