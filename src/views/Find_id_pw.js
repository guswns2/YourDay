import { React, useRef } from "react";
import { useHistory } from "react-router";
import { Form, Button, Row, Col} from "react-bootstrap";
import axios from "axios";

const Find_id_pw = () => {
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
    backgroundColor : "#0d6efd",
    marginTop : "5%",
    minWidth:"135px"
  }
  const text_color = {
    color : "white"
  }

  const history = useHistory();
  const phoneNumberRef = useRef();


  const handleJoin = (e) => {
    // form태그가 다른 페이지로 이동시키지 않도록 방지
    e.preventDefault();
    console.log("join : handleJoin");
    // axios.post(보낼위치, 보낼데이터)
    axios
      .post("http://localhost:3001/find_id_pw", {
        phoneNumber: phoneNumberRef.current.value,
      })
      .then((user) => {
        console.log("데이터 보내기 성공", user);
        alert(
          "아이디 : " +
            user.data.user_data.id +
            "\n비밀번호 : " +
            user.data.user_data.pw
        );
      })
      .catch(() => {
        console.log("axios 실패");
      });
  };

  function move_login() {
    window.location.replace("/");
  }

  return (
    <Row style={{height:"100vh", backgroundColor:"rgb(65, 131, 201)"}}>
    <Col style={logo}>
        <img style={{width:"80%", height:"auto", maxWidth:"700px",minWidth:"400px"}} src={require("assets/img/yourday-logo.png")} alt="..." />
        </Col>
        <Col style={loginStyle}>
        <div style={{minWidth:"500px"}}>
        <Form onSubmit={handleJoin}>
          {/* ID */}
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter Phone Number"
              ref={phoneNumberRef}
              maxLength={"11"}
              required
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 d-flex justify-content-around">
            <Button variant="primary" size="lgsm" type="submit" style={button_style}>
              <span style={text_color}>Find</span>
            </Button>
            <Button variant="primary" size="lgsm" type="button" onClick={move_login} style={button_style}>
              <span style={text_color}>Login</span>
            </Button>
            </Form.Group>
        </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Find_id_pw;
