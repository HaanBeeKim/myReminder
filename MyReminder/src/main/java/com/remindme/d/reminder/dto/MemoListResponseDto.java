package com.remindme.d.reminder.dto;

import com.remindme.d.reminder.entity.MemoList;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemoListResponseDto {

    private Long id;
    private String name;
    private String color;
    private String icon;

    public static MemoListResponseDto fromEntity(MemoList memoList) {
        return MemoListResponseDto.builder()
                .id(memoList.getId())
                .name(memoList.getName())
                .color(memoList.getColor())
                .icon(memoList.getIcon())
                .build();
    }
}
