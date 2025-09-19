import React from 'react'
import Hero_img from '../../assets/img/main-right.jpg'
import Navigator from '../mini/Navigator'
function Hero() {
    return (
        <>

            <div className="hero-left">
                <hr />
                <div className="hero-text">
                    <h1>Discover And <br />
                        Create NFTs</h1>
                    <p>Discover, Create and Sell NFTs On Our NFT Marketplace<br /> With Over Thousands Of NFTs And Get a <b>$20 bonus.</b></p>
                </div>
                <div className="hero-buttons">
                    <button className='hero-solid__button'>Explore More</button>
                    <button className='hero-outline__button'>Create NFT</button>
                </div>
                <div className="hero-stats">
                    <div className="stat">
                        <h2>430K+</h2>
                        <p>Art works</p>
                    </div>
                    <div className="stat">
                        <h2>159K+</h2>
                        <p>Creators</p>
                    </div>
                    <div className="stat">
                        <h2>87K+</h2>
                        <p>Collections</p>
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <img src={Hero_img} alt="hero" />
                <Navigator />
            </div>
        </>
    )
}

export default Hero
