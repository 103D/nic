import React from 'react'
import image from '../../assets/img/subscribe.jpg'

function Subscribe() {
    return (
        <div className='subscribe-popup'>
            <div className="subscribe-left">
                <div className="subscribe-text">
                    <div className="subscribe-title">Create and Sell NFTs</div>
                    <div className="subscribe-subtitle">World’s Largest NFT Place</div>
                </div>
                <div className="subscribe-buttons">
                    <button className="subscribe-button__solid">Explore More</button>
                    <div className="subscribe-button__linear">Sell Artwork</div>
                </div>

            </div>
            <div className="subscribe-right">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default Subscribe
