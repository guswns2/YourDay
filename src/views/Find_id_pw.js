import { React, useRef } from "react";
import { useHistory } from "react-router";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Find_id_pw = () => {
  const joinStyle = {
    marginTop : "15%",
    width: "30%",
    padding : "0%",
    marginRight: "10%",
    marginLeft : "10%",
    display : "inline-block",
    marginBottom : "40%"
  };
  const tema = {
    marginTop : "10%",
    width : "30%",
    padding : "0%",
    display : "inline-block",
    marginLeft : "10%"
  }
  const button_border_color ={
    border : "1px solid black",
    backgroundColor : "white",
    marginTop : "15px"
  }
  const text_color = {
    color : "black"
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
      <div style={{padding : "0%", backgroundColor:"rgb(65, 131, 201)"}}>
        <div style={tema}><img width="700px" src={require("assets/img/yourday-logo.png")} alt="..." style={{marginLeft : "20%" ,marginBottom : "30%"}}/></div>
        <div style={joinStyle}>
        <h1>Search id & pw</h1>
        <br></br>
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

          <div className="d-grid gap-2" style={{ display: "inline-block" }}>
            <Button variant="success" size="lgsm" type="submit" style={button_border_color}>
              <sapn style={text_color}>Input!</sapn>
            </Button>
          </div>
          <div
            className="d-grid gap-2"
            style={{ marginLeft: "25px", display: "inline-block" }}
          >
            <Button
              variant="success"
              size="lgsm"
              type="button"
              onClick={move_login}
              style={button_border_color}
            >
              <span style={text_color}>Login</span>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Find_id_pw;
