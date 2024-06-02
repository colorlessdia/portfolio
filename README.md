# Portfolio App

## 프로젝트 정보
### 소개
메인 페이지: 김동현 이라는 사람을 약식 소개하는 페이지 입니다
  - 소개글
  - 관련링크
  - 기술스택
  - 프로젝트
  - 수상내역

메모 페이지: 간단한 메모를 할 수 있는 페이지 입니다

### 기간
2024-05-18 ~ 

### 참여 인원
김동현 (1명)

### 담당
Front-End

### 사용 기술 스택
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

### 디렉토리 구조
>**/src**

  >>**/layouts**: 레이아웃 페이지 모음

  >>**/pages**: 라우팅 페이지 모음
  
  >>**/components**: 컴포넌트 모음

  >>**/libs**: 라이브러리 관련 모음

  >>**/utils**: 유틸리티 관련 모음

  >>**/hooks**: 커스텀 훅 모음

### Coding Convention

#### 네이밍 규칙
    CSS
    - snake_case
    - 단일요소 요소이름 우선사용
    - 중복요소 존재시 해당태그의 역할로 명명
    - 자식요소 inner: 요소이름_inner

    JS
    - camelCase
    - 줄임표현 지양(너무 길어질 경우 통용되는 표현은 사용 고려)
    - 유틸리티 함수: 행동분류 + 행동
    - 이벤트 핸들러: handle + 이벤트 동작 + 하는일

    Directory & Page
    - 라우터 디렉토리 & 페이지: -Page
    - 레이아웃 디렉토리 & 페이지: -Layout
    - 컴포넌트 디렉토리 & 컴포넌트: 컴포넌트 이름
    - CSS: 컴포넌트이름.module.css

    Type
    - 컴포넌트 props: 컴포넌트이름 + Props
    - 작성한 타입: -Type

#### 작성 규칙
    CSS
    - 아래 순서로 작성
    - overflow, display, position
    - width, height, margin, padding
    - font, text, border, background, boxshadow
    - transfrom, opacity, z-index
    - translate | animation
    - 그 외

    - 한줄에 하나의 속성: 속성값 쌍

    JS
    - 태그 속성이 2개 이상일 경우: 한줄당 하나의 속성 작성
    - Single Quote 사용
    - 객체를 한 줄로 작성 할 경우 앞뒤 공백 추가
    - 객체를 여러 줄로 작성 할 경우 브라켓과 내용간 줄바꿈 추가
    - 화살표 함수 사용
    - 함수 호출 내부에 다른 호출이 존재할 경우 앞뒤 공백 추가
    - 반환값이 단일콘텐츠인 경우 () => () 암시적 return 사용
    - 태그 사이 중괄호는 여러 줄이여도 같은라인부터 작성

    Redux
    - initialState는 slice밖에서 작성
    - actions는 분해할당하지 않고 내보내기

#### 반응형 분기점
    데스크탑: 1440px ~ 1920px

    랩탑 | 태블릿: 1024px ~ 1439px

    모바일 | 태블릿: 360px ~ 1023px

###