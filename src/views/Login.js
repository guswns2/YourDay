import { React, useRef } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../assets/fonts/font.css";
import { maxWidth } from "@mui/system";

const Login = () => {
  const joinStyle = {
    // marginTop : "15%",
    // width: "30%",
    // padding : "0%",
    // marginRight: "10%",
    // marginLeft : "10%",
    // display : "inline-block",
    // // marginBottom : "40%"
    // //margin : "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth:"500px"
  };
  const tema = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  const button_border_color ={
    border : "1px solid black",
    backgroundColor : "white",
    marginTop : "15px",
    maxWidth:"100px"
  }
  const text_color = {
    color : "black"
  }
  // 변수
  const idRef = useRef();
  const pwRef = useRef();
  const history = useHistory();
  // 함수
  // 회원가입 이동 버튼
  function move_join() {
    console.log("Test");
    history.push("/join");
    console.log("Test1");
  }
  // 아이디 비밀번호 찾기 이동 버튼
  function move_find_id_pw() {
    history.push("/find_id_pw");
  }
  const handleJoin = (e) => {
    // form태그가 다른 페이지로 이동시키지 않도록 방지
    e.preventDefault();
    console.log("login : handleJoin");
    // axios.post(보낼위치, 보낼데이터)
    axios
      .post("http://localhost:3001/LoginData", {
        id: idRef.current.value,
        pw: pwRef.current.value,
      })
      .then((users) => {
        console.log("로그인성공");
        if (users.data != "") {
          try{
            localStorage.setItem("user",JSON.stringify({
              id:users.data.id,
              pw:users.data.pw,
              nick:users.data.nick,
              gender:users.data.gender,
              joindate:users.data.joinday,
              birth:users.data.birthday,
              phoneNumber:users.data.phoneNumber,
            }))
          }catch(error){
            console.log("storage 에러입네다")
          }
          history.push("/admin/dashboard");
        } else {
          alert("아이디 및 비밀번호를 잘못 입력하셨습니다.");
          history.push("/");
        }
      })
      .catch(() => {
        console.log("login.js 실패");
      });
  };

  return (
    <Row style={{height:"100vh", backgroundColor:"rgb(65, 131, 201)"}}>
      <Col style={tema}>
        <img style={{width:"80%", height:"auto", maxWidth:"700px",minWidth:"400px"}} src={require("assets/img/yourday-logo.png")} alt="..." />
      </Col>
      
      <Col style={joinStyle}>
        <div style={{minWidth:"500px"}}>
      <Form onSubmit={handleJoin} className="font">
        {/* ID */}
        <Form.Group className="mb-3">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter ID"
            ref={idRef}
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {/* PW */}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={pwRef}
            required
          />
        </Form.Group>
        {/* 버튼 */}
        {/* <div className="text-center" style={{ display: "inline-block" }}> */}
        <Form.Group className="mb-3 d-flex justify-content-around">
          {/* <Row className="align-items-center"> */}
          <Button variant="success" size="lgsm" type="submit" style={button_border_color}>
            <span style={text_color}>Login</span>
          </Button>
        {/* </div>
        <div
          className="d-grid gap-2"
          style={{ display: "inline-block", marginLeft: "5%" }}
        > */}
          <Button variant="success" size="lgsm" onClick={move_join} type="button" style={button_border_color}>
            <span style={text_color}>Join</span>
          </Button>
        {/* </div>
        <div
          className="d-grid gap-2"
          style={{ display: "inline-block", marginLeft: "5%" }}
        > */}
          <Button
            variant="success"
            size="lgsm"
            type="button"
            onClick={move_find_id_pw} style={button_border_color}
          >
            <span style={text_color}>Find ID & PW</span>
          </Button>
          {/* </Row> */}
        {/* </div> */}
        </Form.Group>
      </Form>
      </div>
    </Col>
    </Row>
  );
};
export default Login;