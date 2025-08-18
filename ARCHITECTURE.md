# Medicavox 프로젝트 아키텍처 가이드

## 📋 개요

Medicavox는 의료진과 외국인 환자 간의 언어 장벽을 해소하기 위한 AI 통역 서비스입니다. 이 문서는 프로젝트의 폴더 구조와 아키텍처 원칙을 설명합니다.

## 🏗️ 아키텍처 원칙: 관심사의 분리 (Separation of Concerns)

- **app/**: 라우팅과 페이지 조합만 담당
- **components/**: 순수 UI 컴포넌트 (비즈니스 로직 없음)
- **domains/**: 비즈니스 로직과 상태 관리
- **stores/**: 전역 상태 관리

## 📁 폴더 구조

```text
src/
├── app/                    # Next.js 라우팅 + 페이지 조합
│   ├── doctor/
│   │   ├── page.tsx        # 의사용 로그인/대시보드 조합
│   │   ├── consultation/
│   │   │   └── page.tsx    # 의사용 채팅 + 컨트롤 조합
│   │   └── layout.tsx      # 의사용 헤더 조합
│   ├── patient/
│   │   ├── page.tsx        # 환자용 대기/입장 조합
│   │   ├── consultation/
│   │   │   └── page.tsx    # 환자용 채팅 조합
│   │   └── layout.tsx      # 환자용 헤더 조합
│   ├── language/
│   │   └── page.tsx        # 언어선택 UI 조합
│   └── layout.tsx
├── domains/                # 비즈니스 로직 (UI 무관)
│   ├── chat/
│   │   ├── hooks/          # useChat, useSTT, useTranslation
│   │   ├── services/       # STT API, 번역 API, 메시지 처리
│   │   └── types/          # Message, ChatSession
│   ├── auth/
│   │   ├── hooks/          # useAuth, useLogin
│   │   ├── services/       # 로그인 API, 토큰 관리
│   │   └── types/          # User, AuthState
│   ├── session/
│   │   ├── hooks/          # useSession, useConsultation
│   │   ├── services/       # 세션 시작/종료, 상태 관리
│   │   └── types/          # SessionState, ConsultationStatus
│   ├── language/
│   │   ├── hooks/          # useLanguage
│   │   ├── services/       # 언어 설정 저장/로드
│   │   └── types/          # Language, LanguageOption
│   └── history/
│       ├── hooks/          # useChatHistory
│       ├── services/       # 채팅 기록 조회/저장
│       └── types/          # ChatRecord, HistoryFilter
├── components/             # 순수 UI 컴포넌트
│   ├── chat/
│   │   ├── ChatWindow.tsx
│   │   ├── MessageBubble.tsx
│   │   ├── STTButton.tsx
│   │   └── TranslationStatus.tsx
│   ├── language/
│   │   ├── LanguageGrid.tsx
│   │   └── LanguageCard.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── PatientInfo.tsx
│   │   └── UserActions.tsx
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   └── LoginButton.tsx
│   └── common/
│       ├── Button.tsx
│       ├── Modal.tsx
│       └── LoadingSpinner.tsx
└── shared/                 # 공통 유틸리티
    ├── lib/
    ├── constants/
    └── types/
```

## 🔧 개발 가이드라인

### 컴포넌트 작성 시

1. **단일 책임 원칙**: 하나의 컴포넌트는 하나의 역할만
2. **Props 인터페이스**: 명확한 타입 정의
3. **재사용성**: 다양한 상황에서 사용 가능하도록 설계

### 도메인 로직 작성 시

1. **훅 중심**: 비즈니스 로직은 커스텀 훅으로 구현
2. **서비스 분리**: API 호출은 별도 서비스 함수로
3. **타입 안전성**: 모든 데이터 구조에 타입 정의

### 페이지 작성 시

1. **조합 우선**: 기존 컴포넌트와 훅을 조합하여 구성
2. **최소한의 로직**: 페이지 컴포넌트에는 조합 로직만
3. **사용자별 차별화**: Props나 조건부 렌더링으로 처리
