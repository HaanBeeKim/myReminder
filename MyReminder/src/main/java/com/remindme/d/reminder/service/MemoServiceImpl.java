package com.remindme.d.reminder.service;

import com.remindme.d.reminder.dto.MemoRequestDto;
import com.remindme.d.reminder.dto.MemoResponseDto;
import com.remindme.d.reminder.entity.Member;
import com.remindme.d.reminder.entity.Memo;
import com.remindme.d.reminder.entity.MemoList;
import com.remindme.d.reminder.repository.MemberRepository;
import com.remindme.d.reminder.repository.MemoListRepository;
import com.remindme.d.reminder.repository.MemoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MemoServiceImpl implements MemoService {

    private final MemoRepository memoRepository;
    private final MemoListRepository memoListRepository;
    private final MemberRepository memberRepository;

    @Override
    public List<MemoResponseDto> getMemosByListId(Long listId) {

        List<Memo> memos = memoRepository.findByMemoListId(listId);
        return memos.stream()
                .map(MemoResponseDto::fromEntity)
                .toList();
    }


    @Override
    public MemoResponseDto createMemo(MemoRequestDto dto) {
        MemoList memoList = memoListRepository.findById(dto.getMemoListId())
                .orElseThrow(() -> new IllegalArgumentException("해당 목록이 존재하지 않습니다."));

        Member member = memberRepository.findById(dto.getMemberId())
                .orElseThrow(() -> new IllegalArgumentException("해당 회원이 존재하지 않습니다."));

        Memo memo = Memo.builder()
                .title(dto.getTitle())
                .description(dto.getDescription())
                .dueDate(dto.getDueDate())
                .isDone(false)
                .createdAt(LocalDateTime.now())
                .memoList(memoList)
                .member(member)
                .tag(dto.getTag())
                .location(dto.getLocation())
                .repeatRule(dto.getRepeatRule())
                .repeatUntil(dto.getRepeatUntil())
                .imageUrl(dto.getImageUrl())
                .link(dto.getLink())
                .build();

        Memo saved = memoRepository.save(memo);
        return MemoResponseDto.fromEntity(saved);
    }

}
