# Portfolio App

## 프로젝트 정보
### 소개
메인 페이지: 김동현 이라는 사람을 약식 소개하는 페이지
  - 소개글
    - 관련링크
      - 이메일
      - 깃허브
      - 백준(알고리즘 문제풀이 사이트)
  - 기술스택
    - Strong: 사용빈도가 높거나 이해도가 높은 기술
    - Knowledgeable: 사용 경험 또는 학습경험이 있는 기술
    - Etc: 그 외 기타 항목
  - 프로젝트
    - 진행했던 프로젝트 소개
  - 수상내역
    - 수상내역에 대한 정보

메모 페이지: 간단한 메모를 할 수 있는 페이지
  - 메모 생성, 읽기, 수정, 삭제(개별/전체), 정렬 기능 제공

컬러 팔레트 페이지: 색상을 고르고 색상 정보를 볼 수 있는 페이지
  - 등록 색상에 대해 별칭부여, 삭제(개별/전체), HEX코드 복사 기능 제공

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
    - 태그 사이 중괄호는 여러 줄이어도 같은라인부터 작성

    Redux
    - initialState는 slice밖에서 작성
    - actions는 분해할당하지 않고 내보내기

#### 반응형 분기점
    데스크탑: 1440px ~ 1920px

    랩탑 | 태블릿: 1024px ~ 1439px

    모바일 | 태블릿: 360px ~ 1023px

## ToDo
### 공통
라우터
  - HashRouter(BrowserRouter gh-pages 미지원, 404파일 지양 등의 이유)

반응형
  - 큰 단위 분기외 어색한 부분에 대한 세부 분기 적용

다크모드
  - 로컬스토리지를 활용하여 설정값 기억

텍스트
  - 색상, 크기로 강약 조절
  - 줄바꿈시 단어 단위로 흐름 조절

툴팁
  - 버튼, 인풋요소에 해당 기능 설명 타이틀값 적용

### 메인 페이지
소개글 출석일, 해결문제 수
  - D-day 계산 함수작성

스킬 뱃지
  - 해당 스킬의 아이덴티티컬러와 로고로 뱃지 생성
  - 배경이 밝은경우 어두운 텍스트를 적용하여 색상 대비 증가

프로젝트 비디오 썸네일
  - 원하는 썸네일 이미지 poster 속성으로 설정

프로젝트 스킬뱃지 간소화
  - 기술명 중요도를 우선시 하여 아이콘 제거버전 뱃지 사용

프로젝트 구분선
  - 세로 컬럼 정렬시 하단에 구분선 표시

수상내역 트로피 뱃지
  - 나열된 텍스트에 포인트 요소 추가

### 메모 페이지
메모 생성
  - 엔터키와 버튼을 통해 메모등록 가능

메모 정렬
  - 작성일 최신/오래된 순, 글자수 많은/적은 순

메모 수정
  - 해당 메모가 이전메모와 비교시 변경사항 발생시 수정됨
  - 수정시 작성일자에 (수정됨)표시 및 수정시점으로 작성일자 변경

메모 삭제
  - 개별 메모 삭제시 동의 여부로 삭제진행(1 depth)
  - 전체 메모 삭제시 동의 여부와 확인문구 입력작성(2 depth)

### 컬러 팔레트 페이지
색상 선택
  - 인풋 컬러로 색상을 선택(HEX 코드 저장)

색상 등록
  - 등록할 색상이 이미 존재하는경우 메세지 출력

색상 별칭 수정
  - 기본값은 색상코드, 16글자까지 작성가능, 넘치는부분 말줄임표처리

색상 삭제
  - 개별 색상 삭제시 동의 여부로 삭제진행(1 depth)
  - 전체 색상 삭제시 동의 여부와 확인문구 입력작성(2 depth)

색상 코드 복사
  - 등록된 색상부분 클릭시 HEX코드 복사, navigator clipboard
