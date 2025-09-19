import React from 'react'
import ico from '../../assets/img/icon.jpg'
import eth from '../../assets/img/eth.jpg'

function CollectionProfile() {
    return (<>
        <div className="collection-var">
            <div className="collection-profile__text">
                <div className="collection-ico">
                    <img src={ico} alt="" />
                </div>
                <div className="collection-profile__title">
                    <h4>Alex Ca.</h4>
                    <p>By Alex</p>
                </div>

            </div>
            <div className="collection-profile__right">
                <div className="collection-profile__volume">
                    <img src={eth} alt="" />
                    <span>8,456</span>
                </div>
                <div className="collection-profile__percent">
                    +27.78%
                </div>
                <div className="collection-profile__fprice">
                    <img src={eth} alt="" />
                    <span>3,5</span>
                </div>
                <div className="collection-profile__owners">
                    <p>2.2K</p>
                </div>
                <div className="collection-profile__items">
                    <p>500</p>
                </div>
            </div>
        </div>
        <hr />
    </>
    )
}


export default CollectionProfile
