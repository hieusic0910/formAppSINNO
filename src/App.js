import React, { useState } from 'react';
import './App.css';
import Axios from 'axios'
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';
function App() {
  let [fulname, setName] = useState("");
  let [mssv, setMssv] = useState("");
  let [email, setEmail] = useState("");
  let [truong, setTruong] = useState("");
  let [vien, setVien] = useState("");
  let [khoa, setKhoa] = useState("");
  let [ban, setBan] = useState("");
  let [mongmuon, setMongmuon] = useState("");
  let [bietdenquadau, setBietdenquadau] = useState("");
  let [english, setEnglish] = useState("");
  let [nhaccu, setNhaccu] = useState("");
  let [taile, setTaile] = useState("");
  let [question, setQuestion] = useState("");
  let [truong2, setTruong2] = useState('none') 
  let [truong3, setTruong3] = useState('none')
  let [truong4, setTruong4] = useState('none')
  let [truong5, setTruong5] = useState('none')
  let [truong6, setTruong6] = useState('none')
  let [truong7, setTruong7] = useState('none')
  let [truong8, setTruong8] = useState('none')
  let [truong9, setTruong9] = useState('none')
  let [truong10, setTruong10] = useState('none')
  let [truong11, setTruong11] = useState('none')
  let [truong12, setTruong12] = useState('none')
  let [truong13, setTruong13] = useState('none')
  let [submit, setSubmit] = useState('none')
  let [form, setForm] = useState('none')
  let [title, setTitle] = useState('none')
  let [ready, setReady] = useState('block')
  let [btndangki, setBtndangki] = useState('none')
  
  let handleFormSubmit = (e) => {
    e.preventDefault()
    if(fulname.length>0&&mssv.length>0&&email.length>0&&truong.length>>0&&vien.length>0&&khoa.length>0&&ban.length>>0&&mongmuon.length>>0&&bietdenquadau.length>0&&nhaccu.length>>0&&question.length>>0) {
      Axios.post("http://localhost:5000/api/insert", {
      fulname: fulname,
      mssv: mssv,
      email: email,
      truong: truong,
      vien: vien,
      khoa: khoa,
      ban: ban,
      mongmuon: mongmuon,
      bietdenquadau: bietdenquadau,
      english: english,
      nhaccu: nhaccu,
      taile: taile,
      question: question
      
    }).then(() => {
      alert("CHúc mừng")
    })
    } else alert("Vui lòng nhập đủ thông tin và không được bỏ trống ô nào")
    
  }
  
  return (

    <div className="App">
      <div className="container">
        <div className="box">
          <div className="text" >
            <button className='ready' style={{display:ready}} onClick= {() => {
              setReady('none')
              setTimeout(() => {
                setTitle('block')
              },1000)
              setTimeout(() => {
                setBtndangki('block')
              },7000)
            }}>
              Click to me
            </button>
            <div className="title" style={{display:title}}>
              <div className="tit">Welcome to SINNO...</div>
              <div className="tit1">Xin chào, chúng mình là SINNO - Câu lạc bộ Sáng tạo sinh viên trực thuộc Viện Công nghệ Thông tin và Truyền thông, Trường Đại học Bách Khoa Hà Nội. Với các giá trị cốt lõi nằm ở con người mang theo những đam mê và khát khao sáng tạo không giới hạn, tầm nhìn của chúng mình là trở thành một môi trường học tập năng động thoải mái, cung cấp hạ tầng dữ liệu mạnh mẽ và nhanh chóng cùng nền tảng IoT rộng lớn, để các sinh viên dễ dàng tìm đến nhau, kết nối ý tưởng và thỏa sức sáng tạo, để tự khai phá tài năng và lựa chọn con đường phát triển bản thân đúng đắn. SINNO mang trên mình sứ mệnh quan trọng là mang lại niềm đam mê về công nghệ và các giải pháp tin học cho lớp sinh viên trí thức, hứa hẹn vượt ngoài những giới hạn, định kiến hay những khô khan của một câu lạc bộ học thuật.</div>
            </div>
            <button className='dangki' style={{display:btndangki}} onClick= {() => {
              setReady('none')
              setTimeout(() => {
                setTitle('none');
                setBtndangki('none');
                setForm('block')
              },1000)
            }}> Đăng kí nào </button>
          <form>
              <div className="form" style={{display:form}}>   
                <div>   
                    <div className="blink blink0" >1. Họ và tên bạn : 
                        <input type="text" onChange={(e) => {
                          setName(e.target.value);
                          setTimeout(() => {
                            setTruong2('block')
                          }, 5000)
                        }} autoFocus /> 
                    </div>
                      
                </div>      
                <div>
                    <div className="blink blink0" style={{display:truong2}}>2. MSSV : 
                        <input type="text" onChange={(e) => {
                          setMssv(e.target.value);
                          setTimeout(() => {
                            setTruong3('block')
                          }, 5000)
                        }} /> 
                    </div>     
                </div>  
                <div>  
                    <div className="blink blink0"style={{display:truong3}}>3. Email : 
                        <input type="text" onChange={(e) => {
                          setEmail(e.target.value);
                          setTimeout(() => {
                            setTruong4('block')
                          }, 5000)
                        }} />
                    </div>       
                </div>
                <div>
                    <div className="blink blink0" style={{display:truong4}}>4. Trường : 
                        <input type="text"  onChange={(e) => {
                          setTruong(e.target.value);
                          setTimeout(() => {
                            setTruong5('block')
                          }, 5000)
                        }} />
                    </div>    
                </div>
                <div>
                    <div className="blink blink0" style={{display:truong5}}>5. Viện : 
                        <input type="text"  onChange={(e) => {
                          setVien(e.target.value);
                          setTimeout(() => {
                            setTruong6('block')
                          }, 5000)
                        }} />
                    </div>    
                </div>
                <div>
                    <div className="blink blink0" style={{display:truong6}}>6. Ngành : 
                        <input type="text"  onChange={(e) => {
                          setKhoa(e.target.value);
                          setTimeout(() => {
                            setTruong7('block')
                          }, 5000)
                        }} />
                    </div>    
                </div>

                <div>
                    <div className="blink blink0" style={{display:truong7}}>7. Bạn muốn đăng ký ứng tuyển vào ban nào? : 
                        
                        <FormGroup className="formgroup" onChange={(e) => {
                          setBan(e.target.value);
                          setTimeout(() => {
                            setTruong8('block')
                          }, 5000)
                        }}>
                          <div>
                            <CustomInput type="radio" id="hieu" name="customRadio"  label="Ban Truyền Thông" value="Ban Truyền Thông"/>
                            <CustomInput type="radio" id="hieu" name="customRadio" label="Ban Hậu Cần" value="Ban Hậu Cần"/>
                            <CustomInput type="radio" id="hieu" name="customRadio" label="Ban Chuyên môn" value=" Ban Chuyên môn"/>
                            <CustomInput type="radio" id="hieu" name="customRadio" label="Ban Đối ngoại" value=" Ban Đối ngoại"/>
                            <CustomInput type="radio" id="hieu" name="customRadio" label="Ban Nhân sự" value="Ban Nhân sự" />                        
                          </div>
                        </FormGroup>
                    </div>  
                     
                </div>
                
                <div>
                    <div className="blink blink0" style={{display:truong8}}>8. Mong muốn của bạn khi tham gia CLB? :
                        <input type="text"  onChange={(e) => {
                          setMongmuon(e.target.value);
                          setTimeout(() => {
                            setTruong9('block')
                          }, 15000)
                        }} />
                    </div>    
                </div>
                <div>
                    <div className="blink blink0" style={{display:truong9}}>9. Bạn biết đến CLB qua đâu? :
                        {/* <input type="text"  onChange={(e) => {
                          setBietdenquadau(e.target.value)
                        }} /> */}
                        <FormGroup className="formgroup" onChange={(e) => {
                          setBietdenquadau(e.target.value);
                          setTimeout(() => {
                            setTruong10('block')
                            setTruong11('block')
                          }, 5000)
                        }}>
                          <div>
                            <CustomInput type="checkbox" id="hieu" name="customRadio"  label="Fb Page SOICT Innovation CLUB
" value="Fb Page SOICT Innovation CLUB
"/>
                            <CustomInput type="checkbox" id="hieu" name="customRadio" label="Fb Page Viện Công nghệ Thông tin và Truyền thông - ĐH Bách Khoa Hà Nội" value="Fb Page Viện Công nghệ Thông tin và Truyền thông - ĐH Bách Khoa Hà Nội"/>
                            <CustomInput type="checkbox" id="hieu" name="customRadio" label="Fb Page Liên Chi đoàn - Liên Chi hội SV Viện Công nghệ Thông tin và Truyền thông" value=" Fb Page Liên Chi đoàn - Liên Chi hội SV Viện Công nghệ Thông tin và Truyền thông"/>
                            <CustomInput type="checkbox" id="hieu" name="customRadio" label="Fb thầy Tạ Hải Tùng, thầy Nguyễn Đức Tiến" value=" Fb thầy Tạ Hải Tùng, thầy Nguyễn Đức Tiến"/>
                            <CustomInput type="checkbox" id="hieu" name="customRadio" label="Ngày K65 nộp hồ sơ" value="Ngày K65 nộp hồ sơ" /> 
                            <CustomInput type="checkbox" id="hieu" name="customRadio" label="Đặt bàn" value="Đặt bàn" /> 
                            <CustomInput type="checkbox" id="hieu" name="customRadio" label="Sự kiện SINNO Workshop Arc 1" value="Sự kiện SINNO Workshop Arc 1" /> 
                            <CustomInput type="checkbox" id="hieu" name="customRadio" label="Khác(điền vào bên cạnh) :" >
                              <input type="text"  onChange={(e) => {
                                setBietdenquadau(e.target.value);
                                
                              }} />
                            </CustomInput>                        
                          </div>
                        </FormGroup>
                    </div>    
                </div>
                <div>
                    <div className="blink blink0" style={{display:truong10}}>10. Trình độ tiếng anh?(Không bắt buộc) : 
                        <input type="text"  onChange={(e) => {
                          setEnglish(e.target.value);
                          
                        }} />
                    </div>    
                </div>
                <div>
                    <div className="blink blink0" style={{display:truong11}}>11. Bạn biết chơi loại nhạc cụ nào? :
                        <FormGroup className="formgroup" onChange={(e) => {
                              setNhaccu(e.target.value);
                              setTimeout(() => {
                                setTruong12('block')
                              }, 5000)
                            }}>
                            <div>
                              <CustomInput type="checkbox" id="hieu" name="customRadio"  label="Piano, Organ" value=" Piano, Organ"/>
                              <CustomInput type="checkbox" id="hieu" name="customRadio" label="Guitar, Ukulele" value="Guitar, Ukulele"/>
                              <CustomInput type="checkbox" id="hieu" name="customRadio" label="Violin" value="Violin"/>
                              <CustomInput type="checkbox" id="hieu" name="customRadio" label="Kèn" value="Kèn"/>
                              <CustomInput type="checkbox" id="hieu" name="customRadio" label="Trống" value="Trống" />            
                              <CustomInput type="checkbox" id="hieu" name="customRadio" label="Đàn bầu, chũm chọe, đàn nhị" value="Đàn bầu, chũm chọe, đàn nhị" /> 
                              <CustomInput type="checkbox" id="hieu" name="customRadio" label="Khác(điền vào bên cạnh) :" >
                                <input type="text" id="hieu" onChange={(e) => {
                                  setNhaccu(e.target.value);
                                  
                                }} />
                              </CustomInput>             
                            </div>
                        </FormGroup>
                    </div> 
                       
                </div>
                <div>
                    <div className="blink blink0" style={{display:truong12}}>12. Bạn có tài lẻ gì không? :
                        <FormGroup className="formgroup" onChange={(e) => {
                                setTaile(e.target.value);
                                setTimeout(() => {
                                  setTruong13('block')
                                }, 4000)
                          }}>
                              <div>
                                <CustomInput type="checkbox" id="hieu" name="customRadio"  label="Hát" value="Hát"/>
                                <CustomInput type="checkbox" id="hieu" name="customRadio" label="MC" value=" MC"/>
                                <CustomInput type="checkbox" id="hieu" name="customRadio" label="Tranh biện" value=" Tranh biện"/>
                                <CustomInput type="checkbox" id="hieu" name="customRadio" label="Ảo thuật" value="  Ảo thuật"/>
                                <CustomInput type="checkbox" id="hieu" name="customRadio" label="Khác(điền vào bên cạnh) :" >
                                  <input type="text" id="hieu" onChange={(e) => {
                                    setTaile(e.target.value);
                                    ;setTimeout(() => {
                                      setTruong2('block')
                                    }, 4000)
                                  }} />
                                </CustomInput>
                                <CustomInput type="checkbox" id="hieu" name="customRadio" label="Chưa phát hiện ra" value="Chưa có"/>                        
                              </div>
                        </FormGroup>
                    </div>    
                </div>
                <div>
                    <div className="blink blink0" style={{display:truong13}}>13. Bạn có gì muốn hỏi chúng mình không? :
                        <input type="text"  onChange={(e) => {
                          setQuestion(e.target.value);
                          setTimeout(() => {
                            setSubmit('block')
                          }, 5000)
                        }} />
                    </div>    
                </div>
              
              </div>
              
            </form>
            <button className="submit" onClick={handleFormSubmit} style={{display:submit}}>Submit</button>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
