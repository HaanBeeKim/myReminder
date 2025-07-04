package com.remindme.d.reminder.service;

import com.remindme.d.reminder.dto.MemoListResponseDto;

import java.util.List;

public interface MemoListService {

    List<MemoListResponseDto> getMemoListsByMemberId(Long memberId);

}
