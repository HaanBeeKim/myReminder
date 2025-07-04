package com.remindme.d.reminder.repository;


import com.remindme.d.reminder.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findByEmail(String email); // 로그인 연동 시 사용 가능
}




