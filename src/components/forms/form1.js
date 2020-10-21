import React, { useState } from "react";
import './form.css';

export default function Form1(props) {

  let [value1, setvalue1] = useState("");
  let [value2, setvalue2] = useState("");
  let [value3, setvalue3] = useState("");
  let [value4, setvalue4] = useState("");
  
  function handleOnChange1(e) {
    setvalue1(e.target.value1);
  }
  function handleOnChange2(e) {
    setvalue2(e.target.value2);
  }
  function handleOnChange3(e) {
    setvalue3(e.target.value3);
  }
  function handleOnChange4(e) {
    setvalue4(e.target.value4);
  }
  
  return (
    <form>
      <div className="form">   
        <div>   
            <p className="blink blink0">Họ và tên bạn : 
                <input type="text" value={value1} onChange={handleOnChange1} autoFocus />
            </p>       
        </div>      
        <div>
            <p className="blink blink0">Ngày sinh : 
                <input type="date" value={value2} onChange={handleOnChange2} />
            </p>     
        </div>  
        <div>  
            <p className="blink blink0">Ngành học : 
                <input type="text" value={value3} onChange={handleOnChange3} />
            </p>       
        </div>
        <div>
            <p className="blink blink0">Khoá : 
                <input type="text" value={value4} onChange={handleOnChange4} />
            </p>    
        </div>
      </div>
    </form>
  );
}
