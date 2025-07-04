package com.remindme.d.reminder.repository;

import com.remindme.d.reminder.entity.MemoList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemoListRepository extends JpaRepository<MemoList, Long> {

    List<MemoList> findByMemberId(Long memberId);




}
