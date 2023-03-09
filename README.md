# 스마트인재개발원 빅데이터 융합서비스 개발자과정 - 핵심프로젝트


## 🖥 프로젝트 소개
- 주제 : 스마트워치를 이용한 고등학생 자기관리 Web
- 팀명 : 너의하루는 (YourDay)
- 인원 : 4명
- 개발 기간 : 2022.10 ~ 2022.11 (약 3주)


## ⚙ 개발 환경
- Web : Javascript, React
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

- Main Page
  - 실시간 시계
  - 금일 누적 전력사용량&탄소배출량 값
  - 실시간 날씨
  - 일일/주간 시간당 전력사용량&탄소배출량&예측전력사용량 라인그래프
  - 연 누적 탄소배출량 도넛그래프

- History Page
  - 과거 주간/월간/연간 전력사용량&탄소배출량 라인그래프
  - 최대/최소값 요약


## 🔁 프로젝트 설치 및 실행
- pm2 설치
  - npm install pm2 -g

- node_module 설치
  - npm install -f (v8.15.0)

- Python Interpreter 선택
  - Ctrl+Shift+p > Python: Select Interpreter > Python 3.9.12('base') ~\anaconda3\python.exe

- model.py 라이브러리 설치
  - pip install flask
  - pip install pymysql
  - pip install sqlalchemy
  - pip install bs4
  - pip install tqdm
  - pip install flask_cors 
