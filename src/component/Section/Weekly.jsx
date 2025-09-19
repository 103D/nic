import React from 'react'
import WeeklyCard from '../mini/WeeklyCard'
import Navigator from '../mini/Navigator'


function Weekly() {
  return (
    <>
      <div className="weekly-title">
        Weekly-Top NFT
      </div>
      <div className="weekly-list">
        <WeeklyCard />
        <WeeklyCard />
        <WeeklyCard />
        <WeeklyCard />
        <WeeklyCard />
      </div>
      <Navigator />
    </>
  )
}

export default Weekly
