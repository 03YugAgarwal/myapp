import React,{useState} from 'react'
import "./TextForm.css"



export default function TextForm(props) {
    const [text,setText] = useState('');
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert('Cleared the text');
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    return (
    <>
        <div className={`container-${props.mode}`}>   
            <div className="text">
                <label htmlFor="myBox" className="text-label">{props.heading}</label>
                <textarea name="" id="myBox" value={text} onChange={handleOnChange}></textarea>
            </div>
            <div className="btn">
                <button className="btn-primary" onClick={handleUpClick} >Convert To UpperCase</button>
                <button className="btn-secondary" onClick={handleDownClick} >Convert To LowerCase</button>
                <button className="btn-secondary" onClick={handleClearClick} >Clear</button>
            </div>
        </div>
        <div className="textSummary">
            <div className={`container-${props.mode}`}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length -1} words & {text.length} characters</p>
                <p>{0.008*(text.split(" ").length-1)} Minutes Read</p>
                <h1>Preview</h1>
                <p>{text}</p>
            </div>
        </div>
    </>
  )
}
