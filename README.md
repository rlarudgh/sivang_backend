# 💰 Sivang - 자동 가계부 서버

<div align="center">

![Sivang ERD](https://private-user-images.githubusercontent.com/81161675/247464042-82c7572c-a8e3-42c1-90e6-4bdc2f8e6bc9.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjYzNzAyNjksIm5iZiI6MTc2NjM2OTk2OSwicGF0aCI6Ii84MTE2MTY3NS8yNDc0NjQwNDItODJjNzU3MmMtYThlMy00MmMxLTkwZTYtNGJkYzJmOGU2YmM5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEyMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMjIyVDAyMTkyOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTgyNTBkODk5MzRkZDU4NWVhZDcwY2RiMTgzYThmMDk4NDBlZTFhNjYzMmFmM2M1NGM0NjBiYTYzMDZmMjYzMmImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.CjG-w5I7ZBCWrz7NdeprTts_N_FUi5a0UhB24nFv1g0)

[![Stars](https://img.shields.io/github/stars/rlarudgh/sivang_backend?style=social)](https://github.com/rlarudgh/sivang_backend/stargazers)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)](https://www.prisma.io/)

**손쉽게 관리하는 스마트 가계부 백엔드 서버**

[📚 API 문서](https://documenter.getpostman.com/view/22735066/2s93z3g5i3)

</div>

---

## 📖 프로젝트 소개

> "매일 기록하는 수입과 지출, 더 이상 번거롭지 않게!"

**Sivang**은 대덕소프트웨어마이스터고등학교(Daedeok Software Meister HighSchool)의 '프로젝트 실무II' 수업에서 제작된 자동 가계부 백엔드 서버입니다. 사용자의 수입과 지출을 자동으로 기록하고 관리할 수 있는 RESTful API를 제공합니다.

가계부를 작성하는 것은 중요하지만, 매번 수동으로 입력하는 것은 번거롭고 시간이 많이 걸립니다. Sivang은 이러한 불편함을 해소하고자, 자동화된 가계부 관리 시스템을 제공합니다.

### ✨ 주요 기능

- 📊 **수입/지출 자동 기록**: 거래 내역을 자동으로 분류하고 저장
- 👤 **사용자 인증 시스템**: JWT 기반의 안전한 로그인/회원가입
- 📈 **통계 및 분석**: 월별/카테고리별 지출 내역 분석
- 🔍 **거래 내역 조회**: 기간별, 카테고리별 상세 조회
- 💳 **다중 계좌 관리**: 여러 은행 계좌 통합 관리
- 🏷️ **카테고리 관리**: 커스텀 지출 카테고리 생성 및 관리

---

## 🛠 기술 스택

### Core Technologies
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **ORM**: Prisma

### Database & Storage
- **Database**: MySQL
- **Migration**: Prisma Migrate

### Authentication & Security
- **Authentication**: JWT (JSON Web Token)
- **Password Hashing**: bcrypt (추정)
- **Validation**: express-validator (추정)

### Development Tools
- **Package Manager**: Yarn
- **Code Formatter**: Prettier
- **Editor Config**: EditorConfig

---

## 🚀 시작하기

### 사전 요구사항

시작하기 전에 다음 프로그램들이 설치되어 있어야 합니다:

- Node.js 14.x 이상
- Yarn 또는 npm
- MySQL 5.7 이상

### 설치 방법

#### 1. 저장소 클론

```bash
# 저장소 클론
git clone https://github.com/rlarudgh/sivang_backend.git [dir]
cd sivang_backend
```

#### 2. 의존성 설치

```bash
# Yarn 사용
yarn

# 또는 npm 사용
npm install
```

#### 3. 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 다음 변수들을 설정하세요:

```env
# 데이터베이스 연결 정보
DATABASE_URL="mysql://username:password@localhost:3306/sivang_db"

# JWT 시크릿 키 (반드시 강력한 랜덤 문자열로 변경하세요!)
JWT_SECRET="your_super_secret_jwt_key_here"
JWT_REFRESH_SECRET="your_super_secret_refresh_key_here"

# 서버 포트 (선택사항, 기본값: 3000)
PORT=3000

# Node 환경
NODE_ENV=development
```

> **🔐 보안 주의사항**:
> - `JWT_SECRET`은 최소 32자 이상의 강력한 랜덤 문자열을 사용하세요
> - 프로덕션 환경에서는 절대 `.env` 파일을 Git에 커밋하지 마세요
> - 데이터베이스 비밀번호는 반드시 강력한 것으로 설정하세요

#### 4. 데이터베이스 설정

```bash
# Prisma 마이그레이션 실행
npx prisma migrate dev

# (선택사항) Prisma Studio로 데이터베이스 확인
npx prisma studio
```

#### 5. 개발 서버 실행

```bash
# 개발 모드로 실행
yarn dev

# 또는
npm run dev
```

서버가 성공적으로 시작되면 `http://localhost:3000`에서 API에 접근할 수 있습니다.

---

## 📂 프로젝트 구조

```
sivang_backend/
├── .github/              # GitHub Actions 워크플로우
├── prisma/               # Prisma 스키마 및 마이그레이션
│   ├── schema.prisma    # 데이터베이스 스키마 정의
│   └── migrations/      # 데이터베이스 마이그레이션 파일
├── src/                  # 소스 코드
│   ├── controllers/     # 요청 처리 로직
│   ├── routes/          # API 라우트 정의
│   ├── middlewares/     # 인증, 검증 등 미들웨어
│   ├── services/        # 비즈니스 로직
│   ├── utils/           # 유틸리티 함수
│   ├── types/           # TypeScript 타입 정의
│   └── app.ts           # Express 앱 설정
├── .editorconfig         # 에디터 설정
├── .gitignore           # Git 무시 파일
├── .prettierrc          # Prettier 코드 포매터 설정
├── package.json         # 프로젝트 의존성
├── tsconfig.json        # TypeScript 설정
└── README.md            # 프로젝트 문서
```

---

## 📊 데이터베이스 ERD

위의 ERD 다이어그램은 Sivang의 데이터베이스 구조를 보여줍니다. 주요 테이블은 다음과 같습니다:

- **Users**: 사용자 정보 (이메일, 비밀번호, 프로필)
- **Accounts**: 사용자의 은행 계좌 정보
- **Transactions**: 수입/지출 거래 내역
- **Categories**: 지출 카테고리
- **Budgets**: 월별 예산 설정 (추정)

테이블 간의 관계는 Prisma 스키마 파일(`prisma/schema.prisma`)에서 확인할 수 있습니다.

---

## 🔐 인증 시스템 상세 설명

Sivang은 JWT(JSON Web Token) 기반의 인증 시스템을 사용합니다. 백엔드 이해도가 낮은 분들을 위해 자세히 설명드립니다.

### JWT란?

JWT는 사용자가 로그인했다는 것을 증명하는 "디지털 신분증"과 같습니다. 실제 신분증처럼, 이것도 위조가 어렵고 필요할 때마다 제시할 수 있습니다.

### 인증 흐름

#### 1️⃣ 회원가입 과정

```
사용자 → [이메일, 비밀번호 전송] → 서버
                                    ↓
                        비밀번호 암호화 (bcrypt)
                                    ↓
                        데이터베이스에 저장
                                    ↓
                        성공 응답 반환
```

**중요**: 비밀번호는 절대 그대로 저장하지 않습니다! bcrypt라는 암호화 알고리즘을 사용하여 비밀번호를 "해시"(일방향 암호화)합니다. 이렇게 하면 데이터베이스가 해킹당해도 원본 비밀번호를 알아낼 수 없습니다.

#### 2️⃣ 로그인 과정

```
사용자 → [이메일, 비밀번호] → 서버
                              ↓
                  데이터베이스에서 사용자 찾기
                              ↓
                  비밀번호 검증 (해시 비교)
                              ↓
              ✅ 일치하면: JWT 토큰 생성 및 반환
              ❌ 불일치하면: 에러 반환
```

**JWT 토큰 구조**:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjMiLCJpYXQiOjE2ODk...
        Header(헤더)               Payload(내용)          Signature(서명)
```

- **Header**: 토큰 타입과 암호화 알고리즘 정보
- **Payload**: 사용자 ID 등 실제 데이터
- **Signature**: 위조 방지를 위한 서명 (JWT_SECRET으로 생성)

#### 3️⃣ 인증이 필요한 API 호출

```
사용자 → [요청 + JWT 토큰] → 서버
                              ↓
                  토큰 검증 미들웨어
                              ↓
              JWT_SECRET으로 서명 확인
                              ↓
        ✅ 유효하면: 요청 처리 및 응답
        ❌ 무효하면: 401 Unauthorized 에러
```

### 보안 포인트

1. **HTTPS 사용**: 프로덕션에서는 반드시 HTTPS를 사용하여 토큰이 네트워크 상에서 암호화되도록 합니다
2. **토큰 만료 시간**: JWT는 일정 시간 후 만료됩니다 (예: 1시간). 이렇게 하면 토큰이 탈취되어도 오래 사용할 수 없습니다
3. **Refresh Token**: 만료된 토큰을 갱신하기 위한 별도의 refresh token을 사용할 수 있습니다
4. **환경 변수 보호**: JWT_SECRET은 절대 코드에 하드코딩하지 않고, 환경 변수로 관리합니다

---

## 📡 API 엔드포인트

상세한 API 문서는 [Postman 문서](https://documenter.getpostman.com/view/22735066/2s93z3g5i3)를 참고하세요.

### 주요 엔드포인트 개요

#### 🔐 인증 관련

```
POST   /api/auth/register        # 회원가입
POST   /api/auth/login           # 로그인
POST   /api/auth/logout          # 로그아웃
POST   /api/auth/refresh         # 토큰 갱신
GET    /api/auth/me              # 내 정보 조회
```

#### 💰 거래 내역 관리

```
GET    /api/transactions         # 거래 내역 목록 조회
GET    /api/transactions/:id     # 특정 거래 내역 조회
POST   /api/transactions         # 거래 내역 생성
PUT    /api/transactions/:id     # 거래 내역 수정
DELETE /api/transactions/:id     # 거래 내역 삭제
```

#### 💳 계좌 관리

```
GET    /api/accounts             # 계좌 목록 조회
GET    /api/accounts/:id         # 특정 계좌 조회
POST   /api/accounts             # 계좌 추가
PUT    /api/accounts/:id         # 계좌 정보 수정
DELETE /api/accounts/:id         # 계좌 삭제
```

#### 🏷️ 카테고리 관리

```
GET    /api/categories           # 카테고리 목록 조회
POST   /api/categories           # 카테고리 생성
PUT    /api/categories/:id       # 카테고리 수정
DELETE /api/categories/:id       # 카테고리 삭제
```

#### 📊 통계 및 분석

```
GET    /api/statistics/monthly   # 월별 통계
GET    /api/statistics/category  # 카테고리별 통계
GET    /api/statistics/summary   # 전체 요약
```

### API 사용 예시

#### 회원가입

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "securepassword123",
    "name": "홍길동"
  }'
```

#### 로그인 후 거래 내역 조회

```bash
# 1. 로그인
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "securepassword123"
  }'

# 응답: { "token": "eyJhbGc..." }

# 2. 토큰을 사용하여 거래 내역 조회
curl -X GET http://localhost:3000/api/transactions \
  -H "Authorization: Bearer eyJhbGc..."
```

---

## 🔧 Prisma ORM 이해하기

Prisma는 데이터베이스와 통신하는 것을 쉽게 만들어주는 도구입니다. 복잡한 SQL 쿼리를 직접 작성하지 않고, TypeScript 코드로 데이터베이스를 다룰 수 있습니다.

### Prisma의 장점

1. **타입 안정성**: TypeScript와 완벽하게 통합되어 오타나 실수를 미리 방지
2. **자동 완성**: IDE에서 자동 완성으로 빠른 개발 가능
3. **마이그레이션**: 데이터베이스 스키마 변경을 쉽게 관리
4. **가독성**: SQL보다 읽기 쉬운 코드

### Prisma vs SQL 비교

#### SQL로 작성한 코드:
```sql
SELECT * FROM users 
WHERE email = 'user@example.com' 
AND deleted_at IS NULL
LIMIT 1;
```

#### Prisma로 작성한 코드:
```typescript
const user = await prisma.user.findFirst({
  where: {
    email: 'user@example.com',
    deletedAt: null
  }
});
```

훨씬 더 읽기 쉽고 TypeScript의 타입 체크를 받을 수 있습니다!

### Prisma Schema 예시

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // 관계 설정
  accounts      Account[]
  transactions  Transaction[]
  
  @@map("users")
}

model Transaction {
  id          Int      @id @default(autoincrement())
  amount      Decimal
  description String?
  type        String   // "income" or "expense"
  date        DateTime
  userId      Int
  categoryId  Int
  
  user     User     @relation(fields: [userId], references: [id])
  category Category @relation(fields: [categoryId], references: [id])
  
  @@map("transactions")
}
```

---

## 🎓 학습 포인트

이 프로젝트는 고등학교 프로젝트 실무 수업에서 제작되었으며, 다음과 같은 백엔드 개발 핵심 기술들을 학습하고 적용했습니다:

### Backend 개발
- **RESTful API 설계**: HTTP 메서드와 리소스 기반 API 구조 설계
- **Express.js 프레임워크**: 미들웨어, 라우팅, 에러 핸들링
- **TypeScript**: 타입 안정성을 통한 견고한 코드 작성
- **Prisma ORM**: 데이터베이스 스키마 설계 및 쿼리 최적화

### 인증 및 보안
- **JWT 인증 시스템**: 토큰 기반 인증 구현
- **비밀번호 암호화**: bcrypt를 이용한 안전한 비밀번호 저장
- **미들웨어 패턴**: 인증 검증 미들웨어 구현
- **환경 변수 관리**: 민감한 정보 보호

### 데이터베이스
- **MySQL 데이터베이스**: 관계형 데이터베이스 설계 및 활용
- **마이그레이션**: Prisma Migrate를 통한 스키마 버전 관리
- **데이터 모델링**: ERD 작성 및 테이블 관계 설정

### 개발 도구 및 베스트 프랙티스
- **Git 버전 관리**: 효과적인 협업을 위한 Git 활용
- **코드 포매팅**: Prettier를 통한 일관된 코드 스타일 유지
- **프로젝트 구조화**: MVC 패턴 기반 코드 구조

---

## 🔍 트러블슈팅

### 자주 발생하는 문제들

#### 1. Prisma Client 생성 오류

```bash
Error: Cannot find module '@prisma/client'
```

**해결 방법**:
```bash
npx prisma generate
```

#### 2. 데이터베이스 연결 실패

```bash
Error: P1001: Can't reach database server
```

**해결 방법**:
- MySQL 서버가 실행 중인지 확인
- `.env` 파일의 `DATABASE_URL`이 올바른지 확인
- 방화벽 설정 확인

#### 3. JWT 토큰 검증 실패

```bash
Error: jwt malformed
```

**해결 방법**:
- 토큰이 "Bearer " 접두사와 함께 전송되는지 확인
- JWT_SECRET이 올바르게 설정되었는지 확인

---

