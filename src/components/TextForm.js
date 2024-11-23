import React,{useState} from 'react'
export default function TextForm(props) {
 
  const handleupclick=()=>{
    let nextext=text.toUpperCase();
    setText(nextext)
    props.showAlert("Converted to upperCase!",'primary');
  }

  const handleloclick=()=>{
    let newtext2=text.toLocaleLowerCase();
    setText(newtext2);
    props.showAlert("Converted to lowerCase!",'success');
  }

  const handleclearclick=()=>{
    let nextext='';
    setText(nextext);
    props.showAlert("Clear screen!",'danger');
  }

  const handleonchange=(event)=>{
    setText(event.target.value)
  }

  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard",'info'); 
  }

  const [text,setText]=useState('');
  return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h2 className='mb-4'>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor : props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleupclick}>Convert to Upper case </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloclick}>Convert to Lower case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleclearclick}>Clear</button>
        
  
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length} character</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to preview.'}</p>
    </div>
    </>
  )
}
