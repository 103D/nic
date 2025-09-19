import React from 'react'
import Option from '../../assets/img/dots-vertical.jpg'
import ico from '../../assets/img/recent_ico.jpg'
import eth from '../../assets/img/eth.jpg'

function Recently() {
    return (
        <div className='recently'>
            <div className="recent-name">
                <h4>Recent Viewed</h4>
                <img src={Option} alt="" />
            </div>
            <div className="recent-profile">
                <div className="recent-profile__left">
                    <img src={ico} alt="" />
                    <div className="recent-profile__text">
                        <h4>Alex Ca.</h4>
                        <p>Alexy</p>
                    </div>
                    <div className="recent-profile__right">
                        <div className="recent_eth">
                            <img src={eth} alt="eth" />
                            <h4>8,456</h4>
                        </div>
                        <div className="recent-profile__percent">
                            +23,00%
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Recently
