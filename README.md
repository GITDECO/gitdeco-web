# 📘 프로젝트 개요

### 프로젝트 명 : GITDECO

### 프로젝트 기간 : 2024. 3. 4.  ~ 6. 28.

### 프로젝트 목적

😢 처음 GITHUB에 가입하고 README 파일을 꾸미려 할 때, 접해보지 못한 Markdown 언어로 인해 어려움을 겪었습니다.

🤨 기존의 README 파일을 꾸미는 컴포넌트(요소)가 모두 다른 사이트에서 
지원하기에 README 파일을 수정할 때마다 여러 사이트에 접속해 컴포넌트(요소)를 가져와야 하는 불편함을 겪었습니다.

<<<<<<< Updated upstream
- 신입 개발자, GITHUB에 처음 가입한 개발자가 쉽게 README.md 파일을 제작할 수 있도록 쉬운 Markdown 편집 Tool을 제공합니다.
- GITDECO로 GITHUB 프로필 페이지를 꾸며 포트폴리오와 견줄 수 있는 높은 퀄리티의
README.md 파일을 제공합니다.
- 자신만의 개성을 보여 줄 수 있는 GITHUB 프로필을 만들 수 있습니다.
=======
</aside>

- 신입 개발자, GITHUB에 처음 가입한 개발자가 쉽게 README.md 파일을 제작할 수 있도록
쉬운 Markdown 편집 Tool을 제공합니다.
- GITDECO로 GITHUB 프로필 페이지를 꾸며 포트폴리오와 견줄 수 있는 **높은 퀄리티의
README.md 파일을 제공**합니다.
- 자신만의 개성을 보여 줄 수 있는 **GITHUB 프로필**을 만들 수 있습니다.
>>>>>>> Stashed changes
- https://shields.io/ https://simpleicons.org/ 등 흩어져 있던 여러가지 마크다운 위젯을
돌아다니지 않고 한 곳에서 적용할 수 있습니다.

### 프로젝트 기대효과

- 자신의 GITHUB 프로필 페이지를 꾸미기 어려워하는 사람들이
자신만의 개성을 표현하는 프로필 페이지를 간편하게 꾸밀 수 있습니다.
- GITDECO 서비스로 GITHUB 프로필 페이지를 꾸민 사람들은, 
GITHUB 프로필에 방문한 사람들에게 인상 깊은 경험을 남길 수 있습니다.
- GITDECO 서비스를 통해서 GITHUB 프로필 페이지 자체를 포트폴리오로 사용할 수 있습니다.
- 흩어져 있던 마크다운 위젯을 GITDECO 한 곳에서 적용할 수 있고
README 파일을 꾸밀 때 드는 시간을 줄일 수 있습니다.

---

## 📘 주요 기능

| 기능명 | 기능 세부설명 |
| --- | --- |
| GITHUB 연동 | GITHUB를 연동하면 맟춤형 서비스를 제공 받을 수 있다. |
| 배너 꾸미기 | README 파일의 최상단 부분을 꾸밀 수 있는 배너를 제공합니다. |
| GITHUB 방문자 꾸미기 | 본인의 GITHUB 프로필 접속자 수를 보여주는 컴포넌트를 제공합니다. |
| 기술 스택 뱃지 꾸미기 | 본인이 사용 가능한 기술 스택을 정리할 수 있는 뱃지를 제공합니다. |

---

## 📘 시스템 구조

| 구성요소 | 설명 | 개발 환경 및 구현 방법 |
| --- | --- | --- |
| WEB | 사용자에게 SVG Component를 제공하고, 원하는 SVG Component를 조합하여 사용할 수 있도록 화면에 표시 | Next.js , Javascript , Styled-components를 사용하고 SEO 최적화를 통해 사용자 유입을 증가할 예정
전역 상태관리를 통해 컴포넌트 데이터를 서버에 전송 |
| SERVER | Client로 부터 데이터와 함께 요청이 들어오면 필요한 SVG Componunt를 요청받은 데이터로 매핑하여 사용자 중심의 SVG Componunt를 제작하여 응답 | Fiber(with. Golang) Framework를 이용하여 REST API를 구축, Gorm을 이용해 MySQL과 연동 및 DB Data 관리 |
| DB | SVG Componunt 관리 | MySQL로 데이터베이스 구축 예정 |
