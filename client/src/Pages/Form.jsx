import React, {useState} from 'react';
import { MdOutlineArrowBackIosNew } from "react-icons/md";

export default function Form() {
  const [page, setPage] = useState(0);
  const formProgressStage = ["Which best describes you?", "I am interested in..", "My age is", "Bio:", "My all time favourite show has to be:"];
  const [showMore, setShowMore] = useState(false);
  
  const handleNextStep = () => {
    if(page === formProgressStage.length - 1) alert("Form Submitted");
    else setPage((cur) => cur + 1);
  }

  const handlePrevStep = () => {
    setPage((cur) => cur - 1);
  }

  const formPage = () => {
    if(page === 0) {
      return (
        <div className='gender--options'>
          <button className='options' onClick={handleNextStep}> Male </button>
          <button className='options' onClick={handleNextStep}> Female </button>
          {!showMore && <button className='show-btn' onClick={() => setShowMore(true)}>More Options </button>}
          {
            showMore && <span className='more--options'>
              <button className='options' onClick={handleNextStep}> Agender </button>
              <button className='options' onClick={handleNextStep}> Androgynous </button>
              <button  className='options' onClick={handleNextStep}> Bigender </button>
              <button className='options' onClick={handleNextStep}> Demiman </button>
              <button className='options' onClick={handleNextStep}> Demiwoman </button>
              <button className='options' onClick={handleNextStep}> Gender Fluid </button>
              <button className='options' onClick={handleNextStep}> Gender Nonconforming </button>
              <button className='options' onClick={handleNextStep}> Gender Questioning </button>
              <button className='options' onClick={handleNextStep}> Gender Varient </button>
              <button className='options' onClick={handleNextStep}> Genderqueer </button>
              <button className='options' onClick={handleNextStep}> Intersex </button>
              <button className='options' onClick={handleNextStep}> Non-Binary </button>
              <button className='options' onClick={handleNextStep}> Other </button>
              <button className='options' onClick={handleNextStep}> Pangender </button>
              <button className='options' onClick={handleNextStep}> Polygender </button>
              <button className='options' onClick={handleNextStep}> Trans Man </button>
              <button className='options' onClick={handleNextStep}> Trans Person </button>
              <button className='options' onClick={handleNextStep}> Trans Woman </button>
              <button className='options' onClick={handleNextStep}> Transgender </button>
              <button className='options' onClick={handleNextStep}> Transsexual </button>
            </span>
          }
        </div>
      )
    }
    else if(page === 1) {
      return (
        <div>
          <button className='options' onClick={handleNextStep}> Male </button>
          <button className='options' onClick={handleNextStep}> Female </button>
          <button className='options' onClick={handleNextStep}> Everyone </button>
        </div>
      )
    }
    else if(page === 2) {
      return (
        <>
        <input type='number' />
        <button className='options' onClick={handleNextStep}>Thats it</button>
        </>
        )
      }
    else if(page === 3) {
      return (
        <>
          <textarea name="bio" cols="30" rows="10" />
          <button className='options' onClick={handleNextStep}>Next</button>
        </>
      )
    }
    else if(page === 4) {
      return (
        <>
          <input type='text' />
          <button className='options' onClick={handleNextStep}>Next</button>
        </>
      )
    }
    }


    return (
    <div>
      <div className='form--container'>
        <div className='form--header'>
          {page > 0 && <MdOutlineArrowBackIosNew className='back-icon' onClick={handlePrevStep}/> }
          {formProgressStage[page]}
        </div>
        <div className='form--body'>
          {formPage()}
        </div>
      </div>
    </div>
  )
}