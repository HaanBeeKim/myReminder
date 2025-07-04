package com.remindme.d.reminder.repository;

import com.remindme.d.reminder.entity.Memo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemoRepository extends JpaRepository<Memo, Long> {

    List<Memo> findByMemoListId(Long memoListId);



}
