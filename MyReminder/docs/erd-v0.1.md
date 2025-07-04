# ERD v0.1 - Project RemindeMe
> iOS의 미리알림(Reminder) 앱의 기본 기능을 웹으로 옮기는 토이 프로젝트
## 초기 ERD 설계
| 필드          | 타입           | 제약조건                        | 설명     
|-------------|--------------|-----------------------------|--------|
| id          | bigint       | pk, auto_increment          |        |
| title       | varchar(255) | not null                    | 할 일 제목 |
| note        | text         | null 허용                     | 상세 메모  |
| due_date    | date         | nou null                    | 마감일    |
| isCompleted | boolean      | default false               | 완료여부   |
| created_at  | datetime     | default current_timestamp   | 생성 시각  |
| updated_at  | datetime     | on update current_timestamp | 수정 시각  |
|             |              |                             |        |
> - 단일 테이블 기반 심플 구조
> - 기능 확장에 따라 User, Tag 등 분리 예정

---


### 확장 고려 중인 필드/테이블

| 이름          | 설명               |
|-------------|------------------|
| user_id, fk | 회원 로그인 기능 추가시 연동 |
| category    | 항목 분류 기능 추가시     |
| tag         | 항목 분류 기능 추가시     | 
| alarm_time  | 알림 기능 추가시 사용     |
