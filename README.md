# 스마트인재개발원 빅데이터 융합서비스 개발자과정 - 핵심프로젝트


## 🖥 프로젝트 소개
- 주제 : 스마트워치를 이용한 고등학생 자기관리 Web
- 팀명 : 너의하루는 (YourDay)
- 인원 : 4명
- 개발 기간 : 2022.10 ~ 2022.11 (약 3주)


## ⚙ 개발 환경
- Web : Javascript, React, CSS
- Server : Node.js (v16.17.1), Flask
- DataBase : MySQL
- MachineLearning : Python (v3.9.12)
- Code Editor : VisualStudio Code, Jupyter, MySQL WorkBench


## 🔍 주요 기능
- Login
  - ID, PW 값 DB 검증
  - ID LocalStorage에 저장

- Sign Up
  - ID 중복체크 후 DB 저장

- Main
  - 주간 평균 심박수, 심박변이, 안정시 심박수, 운동시간 확인 및 관련 컨텐츠 제공
  - 주간 심박수, 심박변이, 안정시 심박수, 운동시간 추이 라인그래프
  - 어제와 오늘 행복도 비교 막대그래프
  - 주간 행복도 항목 비율 파이그래프
  - 자가체크리스트

- Calendar
  - 날짜 선택 시 데이터 입력 팝업 출력
  - 행복도 선택 및 애플워치 건강데이터 엑셀파일 첨부
  - 데이터 저장 완료 시 출석도장 출력

- History
  - 날짜 선택
  - 선택 날짜의 행복도 막대그래프
  - 선택 날짜의 건강데이터 항목별 라인그래프
  - 선택 날짜 작성한 일기
  
- My Page
  - 이름, 성별, 비밀번호 변경
  - 회원탈퇴
  
- Help
  - 자주 물어보는 질문 답변
  - 서비스 이용 방법 


## 🔁 프로젝트 설치 및 실행
- pm2 설치
  - npm install pm2 -g

- node_module 설치
  - npm install -f (v8.15.0)

- Python Interpreter 선택
  - Ctrl+Shift+p > Python: Select Interpreter > Python 3.9.12('base') ~\anaconda3\python.exe

- Fileupload.py 라이브러리 설치
  - pip install flask
  - pip install pymysql
  - pip install sqlalchemy

- Flask 서버 실행 오류
  - Original error was: DLL load failed while importing _multiarray_umath: 지정된 모듈을 찾을 수 없습니다.
  - Ctrl+Shift+p > Terminal: Select Default profile > Command Prompt


