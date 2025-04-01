import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <div className='main'>
            <div className="main-container">
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter The Prompt Here' />
                        <div>
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img onClick ={() => onSent()} src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                </div>
            </div>
            {/* Output section */}
            {showResult &&
                <div className='result'>
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading
                            ? <div className='loader'>
                                <hr />
                                <hr />
                                <hr />
                            </div>
                            : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Main
