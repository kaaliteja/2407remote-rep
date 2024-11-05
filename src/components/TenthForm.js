import React from 'react';

function TenthForm() {
    let engInputRef = useRef();




  return <div>
      <form>
        <div>
           <label>First Name</label>
           <input></input>
        </div>
        <div>
           <label>Last Name</label>
           <input></input>
        </div>
        <div>
           <label>English</label>
           <input ref={engInputRef}></input>
        </div>
        <div>
           <label>Telugu</label>
           <input></input>
        </div>
        <div>
           <label>Hindi</label>
           <input></input>
        </div>
        <div>
           <label>Maths</label>
           <input></input>
        </div>
        <div>
           <label>Science</label>
           <input></input>
        </div>
        <div>
           <label>Social</label>
           <input></input>
        </div>
        <div>
            <button type='button' onClick={()=>{
                let engMarks=engInputRef.current.value;
                let telMarks=2;
                let hindiMarks=3;
                let mathsMarks=4;
                let sciMarks=5;
                let socMarks=6;
                let totalMarks=engMarks+telMarks+hindiMarks+mathsMarks+sciMarks+
                socMarks

                alert(totalMarks)

             }}>Calculate Result</button>
        </div>
        <div>
            <p>Please enter values</p>
        </div>
      </form>
    </div>;

}

export default TenthForm;
