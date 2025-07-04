package com.remindme.d.reminder.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "sub_memo")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SubMemo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;
    private boolean isDone;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "memo_id")
    private Memo memo;
}