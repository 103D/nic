import React from 'react'
import Categories from '../mini/Categories'
import WeeklyCard from '../mini/WeeklyCard'
import Explore from '../mini/Explore'

function Marketplace() {
  return (
    <>
      <h2>Explore Marketplace</h2>
      <div className="marketplace-categories">
        <Categories />
      </div>
      <div className="marketplace-list">
        <WeeklyCard  />
        <WeeklyCard />
        <WeeklyCard />
        <WeeklyCard />
        <WeeklyCard />
        <WeeklyCard />
        <WeeklyCard />
        <WeeklyCard />
      </div>
      <Explore />
    </>
  )
}

export default Marketplace
