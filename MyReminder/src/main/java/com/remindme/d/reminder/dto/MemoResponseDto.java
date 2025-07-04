package com.remindme.d.reminder.dto;


import com.remindme.d.reminder.entity.Memo;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemoResponseDto {

    private Long id;
    private String title;
    private String description;
    private LocalDateTime dueDate;
    private boolean isDone;

    public static MemoResponseDto fromEntity(Memo memo) {
        return MemoResponseDto.builder()
                .id(memo.getId())
                .title(memo.getTitle())
                .description(memo.getDescription())
                .isDone(memo.isDone())
                .dueDate(memo.getDueDate())
                .build();
    }

}
