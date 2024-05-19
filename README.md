# Portfolio App

## 사용 기술 스택
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

## 디렉토리 구조
>/src

  >>/layouts: 레이아웃 페이지 모음

      하위 디렉토리 명명: -Layout(ex. RootLayout)
      하위 디렉토리 구성: -Layout.tsx, -Layout.module.css

  >>/pages: 라우팅 페이지 모음

      하위 디렉토리 명명: -Page(ex. RootPage)
      하위 디렉토리 구성: -Page.tsx, -Page.module.css
  
  >>/components: 컴포넌트 모음

      하위 디렉토리 명명: 사용 위치에 해당하는 디렉토리 드릴링
      하위 디렉토리 구성: *.tsx, *.module.css

  >>/libs: 라이브러리 관련 모음

      하위 디렉토리 명명: 각 라이브러리 명칭을 따름

  >>/utils: 유틸리티 관련 모음

  >>/hooks: 커스텀 훅 모음