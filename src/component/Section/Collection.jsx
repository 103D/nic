import React from 'react'
import CollectionProfile from '../mini/CollectionProfile'
import Explore from '../mini/Explore'

function Collection() {
    return (
        <>
            <div className="collection-title">
                <h2>Top Collections</h2>
            </div>
            <div className="collection-sheet">
                <div className="collection-sheet__titles">
                    <div className="collection-left">
                        <div className="collection-sheet__title">
                            Collection
                        </div>
                    </div>
                    <div className="collection-right">
                        <div className="collection-sheet__title">
                            Volume
                        </div>
                        <div className="collection-sheet__title">
                            24h %
                        </div>
                        <div className="collection-sheet__title">
                            Floor Price
                        </div>
                        <div className="collection-sheet__title">
                            Owners
                        </div>
                        <div className="collection-sheet__title">
                            Items
                        </div>
                    </div>
                </div>
                <div className="collection-sheet__data">
                    <CollectionProfile />
                    <CollectionProfile />
                    <CollectionProfile />
                    <CollectionProfile />
                </div>
            </div>
            <Explore />
        </>
    )
}

export default Collection
