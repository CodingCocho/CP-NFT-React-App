import React from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'
import { useState, useEffect } from 'react'

const Main = ({selectedPunk, punkListData}) => {
    const [activePunk, setActivePunk] = useState(punkListData[0])
    
    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])
    
    return (
        <div className="main">
            <div className="mainContent">
                <div className="punkHighlight">
                    <div className="punkContainer">
                        <img  className="selectedPunk" src={activePunk.image_original_url} alt=""/>
                    </div>
                </div>
                
                <div className="punkDetails" style={{ color: '#fff' }}>
                    <div className='title'>
                        {activePunk.name}   
                    </div>
                    <span className="itemNumber">
                        .#{activePunk.token_id}
                    </span>
                    <div className="owner">
                    <div className="ownerImageContainer">
                        <img src={activePunk.owner.profile_img_url} alt="nft"/>
                    </div>
                    <div className="ownerDetails">
                        <div className="ownerNameAndHandle">
                            <div className='ownerAddress'>
                                {activePunk.owner.address}
                            </div>
                            <div className="ownerHandle">
                                raulujr@gmail.com
                            </div>
                        </div>

                        <div className='ownerLink'>
                            <img src={instagramLogo} alt='logo'></img>
                        </div>
                        <div className='ownerLink'>
                            <img src={twitterLogo} alt='logo'></img>
                        </div>
                        <div className='ownerLink'>
                            <img src={moreIcon} alt='logo'></img>
                        </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
