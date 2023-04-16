import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert('Converted Into UpperCase','success')
    }
    
    const handLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert('Converted Into LowerCase','success')
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    //! copy text
    const handleCopy=()=>{
        let text =document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to Clipboard','success')
    }
    //! handle Extra Space
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('removed extra space','success')
    }
    //! Clear Text
const ClearText=()=>{
    setText('')
}
    const [text, setText] = useState("")
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} placeholder='Enter Text Here' id="myBox" rows="8"></textarea>
        </div>
        <button type='button' className='btn btn-primary m-2' onClick={handleUpClick}>Convert To UpperCase</button>
        <button className='btn btn-primary active m-2 data-bs-toggle="button" aria-pressed="true"' onClick={handLowClick}>Convert To LowerCase</button>
        <button className='btn btn-primary m-2 ' onClick={handleCopy}>Copy To Clipboard</button>
        <button className='btn btn-primary m-2 ' onClick={handleExtraSpace}>Remove Extra Space</button>
        <button className='btn btn-primary active m-2 data-bs-toggle="button" aria-pressed="true"' onClick={ClearText}>Clear</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').length} words,{text.length} characters</p>
        <p>{0.008*text.split(' ').length}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter Something to Preview'}</p>
        </div>
        </>
        )
    }
    
    