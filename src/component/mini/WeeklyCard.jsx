import React from 'react'
import { useNavigate } from 'react-router-dom'
import Image from '../../assets/img/cardImage.jpg'
import ETH from '../../assets/img/eth.jpg'

function WeeklyCard() {
  const navigate = useNavigate();
  return (
    <div className='weekly-card'>
      <div className="week-card__img">
        <img src={Image} alt="" />
        <div className="week-timer">
          07h 09m 12s
        </div>
      </div>
      <div className="week-card__info">
        <h3>Sun-Glass</h3>
        <div className="week-card__bottom">
          <div className="week-card__price">
            <span>Current bid</span>
            <div className="week-card__eth">
              <img src={ETH} alt="eth" />
              <h4>1.75</h4>
            </div>
          </div>
          <button className='week-card__button' onClick={() => navigate('/case')}>
            Place a bid
          </button>
        </div>
      </div>

    </div>
  )
}

export default WeeklyCard
