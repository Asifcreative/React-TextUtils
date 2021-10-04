import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("upper case was click" + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to UPPERCASE!","success");
    }
    const handleLowClick = ()=>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to lowercase!","success");
    }
    const handleClear = ()=>{
        let newText= '';
        setText(newText);
        props.showAlert("Text Area Cleared!","success");
    }
    const handleOnChange = (event)=>{
        // console.log("handle change was click");
        setText(event.target.value);
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!","success");
    }
    const handleExtraSpaces = ()=>{
        let newText= text.split(/[  ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!","success");
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container my-3"  style={{color:props.mode==='light'?'black':'white'}} >
            <div className="mb-3">
                <h2 className="text-center">{props.heading}</h2>
                <textarea className="form-control" id="myBox" rows="6" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#b1b1b1', color:props.mode==='light'?'black':'white'}} ></textarea>
            </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>UPPERCASE</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
        </div>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
            <h2> Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes Read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
            
        </div>
        </>
    )
}
