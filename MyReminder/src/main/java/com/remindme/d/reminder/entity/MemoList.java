package com.remindme.d.reminder.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "memo_list")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemoList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name; //ex: Reminder, 살거, 수집, 회사
    private String color; // 목록의 색상
    private String icon; // 아이콘 문자열

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "memoList", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Memo> memos = new ArrayList<>();
}
