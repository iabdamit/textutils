import React from 'react'

export default function About(props) {
    // const [myStyle,SetmyStyle]=useState({
    //     color:'white',
    //     backgroundColor:'black'
    // })
    let myStyle={
        color:props.mode==='dark'?'white':'#042743',
        backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
        // border:'1px solid',
        // borderColor:props.mode==='dark'?'white':'black'
    }
    return (
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className='my-2'>About Us</h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        <h5>Analyze Your Text</h5>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        Textutils gives you a way to analyze your text quickly and efficiently. Be it woord count, character count.
        </div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        <h5>Free to use</h5>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        TextUtils is a free character counter tool that provides instant character count & word count statics for a given text.
        TextUtils reports the number of words and characters. that it is suitable for wrting text with word/character limit. 
        </div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
        <h5>Browser Compatible</h5>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        This word counter software works in any web browser such as Chrome,Firefox,Brave,Bing,Safari,Opera.It suits to count characters in facebook,bolg,books,excel document,pdf document, eassys, etc.
        </div>
        </div>
        </div>
        </div> 
        </div>
        )
    }
    
    