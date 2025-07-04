package com.remindme.d.reminder.entity;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "memo")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Memo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;

    @Column(name = "due_date")
    private LocalDateTime dueDate;

    @Column(name = "is_done")
    private boolean isDone;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    private String tag;
    private String location;

    private String repeatRule; // 예: DAILY, WEEKLY, CUSTOM 등
    private LocalDateTime repeatUntil;

    private String imageUrl;
    private String link;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "memo_list_id")
    private MemoList memoList;

    @OneToMany(mappedBy = "memo", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<SubMemo> subMemos = new ArrayList<>();
}
