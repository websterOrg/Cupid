import React, {useState} from 'react';

export default function Form() {
  const [page, setPage] = useState(0);
  const formProgressStage = ["Which best describes you?", "interest", "dob"];
  const [showMore, setShowMore] = useState(false);
  const formPage = () => {
    if(page === 0) {
      return (
        <div className='gender--options'>
          <input type="radio" className='options' value="Male" name="gender" /> Male
          <input type="radio" className='options' value="Female" name="gender" /> Female
          {!showMore && <button onClick={() => setShowMore(true)}>More Options </button>}
          {
            showMore && <span className='more--options'>
              <input type="radio" className='options' value="Agender" name="gender" /> Agender
              <input type="radio" className='options' value="Androgynous" name="gender" /> Androgynous
              <input type="radio" className='options' value="Bigender" name="gender" /> Bigender
              <input type="radio" className='options' value="Demiman" name="gender" /> Demiman
              <input type="radio" className='options' value="Demiwoman" name="gender" /> Demiwoman
              <input type="radio" className='options' value="Gender Fluid" name="gender" /> Gender Fluid
              <input type="radio" className='options' value="Gender Nonconforming" name="gender" /> Gender Nonconforming
              <input type="radio" className='options' value="Gender Questioning" name="gender" /> Gender Questioning
              <input type="radio" className='options' value="Gender Varient" name="gender" /> Gender Varient
              <input type="radio" className='options' value="Genderqueer" name="gender" /> Genderqueer
              <input type="radio" className='options' value="Intersex" name="gender" /> Intersex
              <input type="radio" className='options' value="Non-Binary" name="gender" /> Non-Binary
              <input type="radio" className='options' value="Other" name="gender" /> Other
              <input type="radio" className='options' value="Pangender" name="gender" /> Pangender
              <input type="radio" className='options' value="Polygender" name="gender" /> Polygender
              <input type="radio" className='options' value="Trans Man" name="gender" /> Trans Man
              <input type="radio" className='options' value="Trans Person" name="gender" /> Trans Person
              <input type="radio" className='options' value="Trans Woman" name="gender" /> Trans Woman
              <input type="radio" className='options' value="Transgender" name="gender" /> Transgender
              <input type="radio" className='options' value="Transsexual" name="gender" /> Transsexual
            </span>
          }
        </div>
      )
    }
    else if(page === 1) {
      return (
        <div>
          <input type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
        </div>
      )
    }
    else if(page === 2) {
      return (
        <input type='date' />
        )
      }
    }
    return (
    <div>
      <div className='form--container'>
        <div className='form--title'>
          {formProgressStage[page]}
        </div>
        <div className='form--body'>
          {formPage()}
        </div>
        <div className='form--footer'>
          <button
            disabled = {page === 0}
            onClick = { () => {
              setPage((cur) => cur - 1)
            }}
          >
            Prev
          </button>
          <button
            onClick={()=>{
              if(page === formProgressStage.length - 1) alert("Form Submitted");
              else setPage((cur) => cur + 1);
            }}
          >
            {page === formProgressStage.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  )
}
