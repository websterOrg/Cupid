import React from 'react'

export default function Nav({setIsSignUp, isShowModal, setIsShowModal}) {
    const handleClick = () => {
        setIsSignUp(true);
        setIsShowModal(true);
    }

  return (
    <nav className='navbar'>
      <div className='logo--container'>
        {/* <img className='logo' src='#' alt='Cupid' /> */}
        <div className='logo'>CUPID</div>
      </div>
      {!isShowModal && 
      <button 
        className='btn sign--in'
        onClick={handleClick}
      >
        Already a member?
      </button>
      }
    </nav>
  )
}
