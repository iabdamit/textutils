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
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
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
        <button disabled={text.length===0} type='button' className='btn btn-primary m-2' onClick={handleUpClick}>Convert To UpperCase</button>
        <button disabled={text.length===0} className='btn btn-primary active m-2 data-bs-toggle="button" aria-pressed="true"' onClick={handLowClick}>Convert To LowerCase</button>
        <button disabled={text.length===0} className='btn btn-primary m-2 ' onClick={handleCopy}>Copy To Clipboard</button>
        <button disabled={text.length===0} className='btn btn-primary m-2 ' onClick={handleExtraSpace}>Remove Extra Space</button>
        <button disabled={text.length===0} className='btn btn-primary active m-2 data-bs-toggle="button" aria-pressed="true"' onClick={ClearText}>Clear</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words,{text.length} characters</p> 
        {/* means if element.length is should not be eqaul to zero (agar array ki length zero he to array me nahi rahega) */}
        <p>{0.008*text.split(/\s/).filter((element)=>{return element.length!==0}).length}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to Preview'}</p>
        </div>
        </>
        )
    }
    
    