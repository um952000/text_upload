// useState is a hook

import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{

        // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);

        //To show alert while clicking this button

        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick = ()=>{

        // console.log("Uppercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);

        //To show alert while clicking this button

        props.showAlert("Converted to lowercase!","success");

        
    }

    const clearClick = ()=>{

        // console.log("Uppercase was clicked" + text);
        // let newText=text.toLowerCase();
        setText("");
    }

    const handleOnChange = (event)=>{

        // console.log("on change");
        setText(event.target.value);
    }

    //creating state variable

   const [text, setText] = useState('');

   //text="new text";  this is wrong way to change the state.
   //setText("new text"); this is a right way to change the state

  return (

    <> <div>

    <h1>{props.heading}</h1>

<div className="mb-3">
<textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} rows="8"></textarea>
</div>

<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-2' onClick={clearClick}>Clear</button>


</div>

<div className="container my-3" >
<h1>Your text summary</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>

<p>{0.008 * text.split(" ").length}Minutes to read</p>

<h2>Preview</h2>
<p>{text}</p>


<p>NO of sentences = {text.split(".").length - 1} </p> 

</div>

</>
   
  )
}
