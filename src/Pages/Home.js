import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../Components/Nav'

export default function Home() {
    const [isShowModal, setIsShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true);
    let navigate = useNavigate();

    const handleOnClick = () => {
        setIsShowModal(true);
        setIsSignUp(false);
    }

    const handleBtnClick = () => {
        if(!isSignUp) {
            navigate('/Form')
        }
        else {
            navigate('/Profile')
        }
    }

    return (
        <div className='home'>
            <Nav 
                setIsSignUp={setIsSignUp}
                isShowModal = {isShowModal}
                setIsShowModal = {setIsShowModal}
            />
            {isSignUp && !isShowModal &&
            <div className='home--container'>
                <div>
                    The place where your search for 'The One' ends.
                </div>
                <button onClick={handleOnClick}>Create Account</button>

            </div>
            }
            {isShowModal && 
                <div className='log-in-modal'>
                   <input
                        type="email"
                        name='email'
                        placeholder='email'
                        required={true}
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='password'
                    />
                    {!isSignUp && <input
                        type='password'
                        name='confirm-pwd'
                        placeholder='confirm password'
                    />}
                    <button onClick={handleBtnClick}>{isSignUp ? "Sign In" : "Sign Up"}</button> 
                </div>
            }
        </div>
  )
}