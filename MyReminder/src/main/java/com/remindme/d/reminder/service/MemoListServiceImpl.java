package com.remindme.d.reminder.service;

import com.remindme.d.reminder.dto.MemoListResponseDto;
import com.remindme.d.reminder.entity.MemoList;
import com.remindme.d.reminder.repository.MemoListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemoListServiceImpl implements MemoListService {

    private final MemoListRepository memoListRepository;

    @Override
    public List<MemoListResponseDto> getMemoListsByMemberId(Long memberId) {
        List<MemoList> lists = memoListRepository.findByMemberId(memberId);
        return lists.stream()
                .map(MemoListResponseDto::fromEntity)
                .toList();
    }
}
