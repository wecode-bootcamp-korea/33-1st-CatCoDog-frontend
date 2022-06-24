# 33기 1차 프로젝트 5팀 캣코독
![](https://velog.velcdn.com/images/cadyky95/post/c81173e4-05fe-444b-98e4-c987bb414754/image.png)

[🐶시연영상 보러가기](https://www.youtube.com/watch?v=mw0Opg8jc5Y&t=50s)

## 프로젝트 소개
• 반려동물과 반려인의 조화로운 삶을 위해 바르고 안전한 제품을 제안합니다. 반려 생활에 건강한 즐거움을 더하는 브랜드입니다.   
• 한정된 기간동안 기획과 디자인보다는 개발에 집중하기 위해서 일부를 (반려소반)을 참조하여 학습목적으로 제작하였습니다.   
• 코드 및 이미지를 남용 및 악용할 경우 법적으로 문제될 수 있습니다.   
• 이 프로젝트에서 사용되고 있는 로고 및 배너는 해당 프로젝트 팀 소유이므로 외부인이 허가없이 사용할 수 없습니다.

## 팀원 및 사용기술 스택

### 1. 팀원소개
• Front-end: 김철회, 윤경연, 남하임, 정재성, 안성주   
• Back-end: 강세영, 박준형   
• 개발기간 : 2022/05/24~2022/06/04

### 2. 사용기술 스택
• Front-end: HTML, SCSS, Javascript, React, React-Router   
• Back-end: Phython, Django, MySQL

## FrontedEnd 필수구현 기능
### 1. 회원가입 페이지
```
• Back-end DB에 기입한 정보 저장하기
```
### 2. 로그인 페이지
```
• 유효성 검사
• ID에 조건 걸기
• PW에 조건 걸기
```
### 3. 마이 페이지
```
• 회원 정보 보여주기
```
### 4. 메인 페이지(Nav,Footer)
```
• 메인배너 슬라이드 라이브러리 없이 infinite loop로 구현
• 서브 슬라이드 라이브러리 없이 infinite loop로 구현
• 슬라이드 배너 클릭시 해당 제품 상세페이지로 넘어가기
• Nav 카테고리 클릭시 이동
```
### 5. 제품 리스트 페이지
```
• fetch, jQuery등 사용해서 페이지 이동
• pagination을 통한 더보기 버튼 구현.
```
### 6. 제품 상세 페이지
```
• 제품 상세페이지에서 장바구니 누르면 해당 제품 장바구니로 이동
• 리뷰 및 별점 기능
• 수량 선택
• 제품 미니 이미지 클릭 시 메인 이미지 변경 기능
```
### 7. 장바구니
```
• 제품 수량 수정
• 체크 박스
• 전체 삭제 및 개별 삭제
• 제품 구매 가격 하단에 합산해서 보여주기(얼마이상 담기면 택배비 제외 포함)
```
## BackEnd 필수구현 기능

### 1. 회원가입 기능 
```
• 정규표현식을 활용하여 규격에 맞는 이메일, 전화번호, 비밀번호 데이터 받기 기능 구현
• bcrypt를 활용하여 비밀번호 암호화하여 데이터베이스 저장 기능 구현
```

### 2. 로그인 기능
```
• 데이터베이스 상의 user 정보와 일치하면 로그인 성공 기능 구현
• 로그인 성공시 jwt 토큰 발급 기능 구현(만료 기한: 1일)
```

### 3. 제품 상세 기능
```
• 사용자가 원하는 제품 상세 데이터 전달 기능 구현
• 옵션별 선택사항 선택 가능 기능 구현
```

### 4. 제품 리스트 기능 
```
• 가격순, 판매량순, 이름순 정렬 기능 구현
• 카테고리별 제품 조회 기능 구현
```

### 5. 제품 리뷰 기능
```
• 사용자가 직접 콘텐츠, 별점 등록, 삭제 기능 구현
• login-decorator를 활용한 로그인 여부 확인 기능 구현
```

### 6. 장바구니 기능
```
• user_id 별 개별적인 장바구니 데이터베이스 구축
• 장바구니 등록, 수정, 삭제 기능 구현
• 옵션별 장바구니 최종 가격 실시간 반영 기능 구현
• login_decorator를 활용한 로그인 여부 확인 기능 구현
• 장바구니 등록/비등록 별 다른 UI 구별
```
## 프로젝트 협업 도구
### 1. Trello
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FTgNmb%2FbtrDZvBpHZN%2Fsir2JKzcBW7mksljLbUmv0%2Fimg.png)
```
매일 스프린트 미팅에서 현재 진행 사항과 예상 작업 및 소요시간 공유
```
### 2. Slack 
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FVIVki%2FbtrDWUCbBt6%2FonOMXKZt4UDxRrQIXejD4K%2Fimg.png)
```
팀원들의 개인적인 소통 및 참고 자료 공유
```
### 3. Notion
![](https://velog.velcdn.com/images/drbrain98/post/9293e60a-2b03-4c15-bba2-d05edad57556/image.png)
```
필수 구현 기능 및 추가 기능 사항(역활 및 분담 포함)에 대하여 상세한 정리
```
### 4. ERD
![](https://velog.velcdn.com/images/stresszero/post/54321f3f-a31d-415d-a046-3ac7b461bd19/image.PNG)
```
웹 사이트 DB 구성 방식을 즉각적으로 공유 -> 해당 자료를 참고해서 프론트에서 KEY값의 이름을 맞춰서 즉각적인 소통을 가능하게 
```
 
