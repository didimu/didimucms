import React from 'react' 

const Signup = () => {
  // 초기값 세팅 - 아이디, 닉네임, 비밀번호, 비밀번호확인, 이메일, 전화번호, 생년월일
  const [id, setId] = React.useState("");


  // 오류메세지 상태 저장
  const [idMessage, setIdMessage] = React.useState("");


  // 유효성 검사
 const [isId, setIsId] = React.useState(false); 

 const onChangeId = (e) => {
   const currentId = e.target.value;
   setId(currentId);
   const idRegExp = /^[a-zA-z0-9]{4,12}$/;

   if (!idRegExp.test(currentId)) {
     setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!");
     setIsId(false);
   } else {
     setIdMessage("사용가능한 아이디 입니다.");
     setIsId(true);
   }
 };




  return (
    <div className="member_wrap">
      <div className="member_inner">
      <form className="loginForm">
        <div className='member_title_wrap'>
          <h1 className='member_title'>회원가입</h1>
        </div>
        <div>
          <div className="input">
              <input type="text" className="userId" id="userId" placeholder="아이디" autoFocus></input>
              <input type="password" className="password" id="password" placeholder="비밀번호"></input>
              <button id="loginBut">Login</button>
          </div>
          <div className="form-el">
            <label htmlFor="id">Id</label> <br />
            <input id="id" name="id" value={id} onChange={onChangeId} />
            <p className="message"> {idMessage} </p>
          </div>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Signup