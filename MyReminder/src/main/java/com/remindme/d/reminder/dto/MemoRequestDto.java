package com.remindme.d.reminder.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemoRequestDto {

    private String title;
    private String description;
    private LocalDateTime dueDate;
    private Long memoListId; // 어느 목록에 메모를 추가할지
    private Long memberId;  //현재 로그인된 유저

    // 선택 사항
    private String tag;
    private String location;
    private String repeatRule;
    private LocalDateTime repeatUntil;
    private String imageUrl;
    private String link;

}
