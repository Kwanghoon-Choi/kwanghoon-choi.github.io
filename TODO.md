# Homepage TODO

페이지에서 노란색으로 표시된 부분이 채울 곳이에요.
`index.html` 안의 `<!-- TODO -->` 주석도 같이 확인하세요.

## 1. 콘텐츠 (필수)

- [ ] 프로필 사진 → `assets/img/profile.jpg`로 넣고 `index.html`의 `<img src>` 변경 (정사각형, 400px 이상)
- [ ] CV PDF → `assets/cv.pdf`
- [ ] Google Scholar 링크 (프로필 없으면 만들기)
- [ ] LinkedIn 링크 (없으면 항목 삭제)
- [ ] About bio 다듬기 (초안 상태, 학부/석사 이력 한 문장 추가)
- [ ] Research Interests 3~4개로 확정 (초안 4개)
- [ ] Education 박사 입학 시기, 석사(있으면), 학부 정보
- [ ] ShieldCXL paper summary 2~3문장 확인 및 보완
- [ ] Patents 특허 제목(영문), 공동 발명자, 출원번호, 출원일
- [ ] Experience 채우기 (인턴, TA, RA 등)
- [ ] Awards / Teaching 채우기 (없는 그룹은 삭제)

## 2. 구조 결정 (선택)

- [ ] Projects 섹션 유지 여부 (안 쓰면 섹션과 nav 링크 둘 다 삭제)
- [ ] News 섹션 추가 여부 (논문 accept, 발표 소식 등)
- [ ] favicon
- [ ] 다크모드 유지 여부 (`style.css`의 `prefers-color-scheme: dark` 블록)

## 3. 논문 나오면

- [ ] 새 논문은 Publications 맨 위에 추가 (최신순)
- [ ] 리뷰 중인 논문은 accept 전까지 올리지 않기

## 4. 배포

- [ ] 파일을 `kwanghoon-choi.github.io` 레포 루트에 올리기
- [ ] Settings → Pages → Source를 **Deploy from a branch**, `main` / `(root)`로 설정
- [ ] https://kwanghoon-choi.github.io 접속 확인
- [ ] 공개 전 `grep -n "TODO" index.html` 결과 0건 확인

## 로컬 미리보기

```bash
cd kwanghoon-choi.github.io
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000
```
