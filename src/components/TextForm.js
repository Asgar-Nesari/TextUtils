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



  const handleaDDclick=()=>{
    let nextext=text+"\n\n\n ------Thank you Have a Nice Day -----";
    setText(nextext);
    props.showAlert("End of content!",'dark');
  }

  const handleonchange=(event)=>{
    setText(event.target.value)
  }

  const handleCopy=()=>{
    var text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard",'info');
    
  }

  const [text,setText]=useState('');
  return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor : props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to Upper case </button>
        <button className="btn btn-primary mx-2" onClick={handleloclick}>Convert to Lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleclearclick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-2" onClick={handleaDDclick}>End</button>
        
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length}words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length} Minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
    </div>
    </>
  )
}
