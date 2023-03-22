import { React, useRef } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import axios from "axios";

const Join = () => {
  // 스타일 지정
  const loginStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth:"500px"
  };
  const logo = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  const button_style ={
    border : "1px solid black",
    backgroundColor : "white",
    marginTop : "5%",
    minWidth:"135px"
  }
  const text_color = {
    color : "black"
  }

  // 변수
  const idRef = useRef();
  const pwRef = useRef();
  const nickRef = useRef();
  const genderRef = useRef();
  const birthdayRef = useRef();
  const phoneNumberRef = useRef();
  const history = useHistory();

  let do_not_id;
  let do_not_phoneNumber;
  // 날짜 변수
  let days = new Date();
  let day = days.getDate() < 10 ? "0" + days.getDate() : days.getDate();
  let today = days.getFullYear() + "-" + (days.getMonth() + 1) + "-" + day;

  // 함수
  // 회원가입 버튼 누룰 시 실행할 함수
  const input_data = async () => {
    console.log("input_data 시작");
    await axios
      .post("http://localhost:3001/joindata", {
        id: idRef.current.value,
        pw: pwRef.current.value,
        nick: nickRef.current.value,
        gender: genderRef.current.value,
        birthday: birthdayRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
      })
      .then((res) => {
        console.log("데이터 보내기 성공");
        alert("회원가입 성공! 로그인해주세요!");
        window.location.replace("/");
      })
      .catch((err) => {
        console.log("데이터 보내기 실패");
      });
    console.log("input_data 끝");
  };

  // 아이디 중복 체크 버튼 누를 시 실행
  const check_id = async () => {
    console.log("check_id 시작");
    await axios
      .post("http://localhost:3001/check_id", {
        id: idRef.current.value,
      })
      .then((result) => {
        console.log("axios 성공");
        console.log("join.js check_id result : 출력값", result.data.result);
        if (result.data.result == "아이디 중복x") {
          do_not_id = true;
          if (do_not_id) {
            check_phone_number();
          }
        } else if (result.data.result == "아이디 중복o") {
          do_not_id = false;
          alert("아이디 중복");
        }
      })
      .catch(() => {
        console.log("axios 실패");
      });
    console.log("check_id 끝");
  };

  // 휴대폰 번호 중복 체크 버튼 누를 시 실행
  const check_phone_number = async () => {
    console.log("check_phone_number 시작");
    await axios
      .post("http://localhost:3001/check_phone_number", {
        phoneNumber: phoneNumberRef.current.value,
      })
      .then((result) => {
        console.log("axios 성공");
        console.log(
          "join.js check_phoneNumber result : 출력값",
          result.data.result
        );
        if (result.data.result == "휴대폰 번호 중복x") {
          do_not_phoneNumber = true;
          if (do_not_phoneNumber && do_not_id) {
            input_data();
          }
        } else if (result.data.result == "휴대폰 번호 중복o") {
          do_not_phoneNumber = false;
          alert("휴대폰 번호 중복");
          console.log("제한 : ", today);
          console.log("입력 값 : ", birthdayRef.current.value);
        }
      })
      .catch(() => {
        console.log("axios 실패");
      });
    console.log("check_phone_number 끝");
  };

  return (
    <Row style={{height:"100vh", backgroundColor:"rgb(65, 131, 201)"}}>
      <Col style={logo}>
      <img style={{width:"80%", height:"auto", maxWidth:"700px",minWidth:"400px"}} src={require("assets/img/yourday-logo.png")} alt="..." />
    </Col>

      <Col style={loginStyle}>
      <div style={{minWidth:"500px"}}>
      <Form>
        {/* ID */}
        <Form.Group className="mb-3">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter ID"
            ref={idRef}
            required
            maxLength={"10"}
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
            maxLength={"10"}
          />
        </Form.Group>

        {/* 이름 */}
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            ref={nickRef}
            required
            maxLength={"10"}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        {/* 성별 */}
        <Form.Group className="mb-3">
          <Form.Label>Gender</Form.Label>
          <Form.Select
            aria-label="Default select example"
            ref={genderRef}
            style={{ marginLeft: "15PX" }}
            required
          >
            <option>M</option>
            <option>W</option>
          </Form.Select>
        </Form.Group>

        {/* 생년월일 */}
        <Form.Group className="mb-3">
          <Form.Label>Birthday</Form.Label>
          <Form.Control type="date" ref={birthdayRef} required max={today} />
        </Form.Group>

        {/* ID */}
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Do Not(-) Enter Phone Number"
            ref={phoneNumberRef}
            required
            maxLength={"11"}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 d-flex justify-content-around">
          <Button variant="success" size="lgsm" type="button" onClick={check_id} style={button_style}>
            <span style={text_color}>Join Us!</span>
          </Button>
          </Form.Group>
      </Form>
      </div>
    </Col>
    </Row>
  );
};

export default Join;
