package com.remindme.d.reminder.service;

import com.remindme.d.reminder.dto.MemoRequestDto;
import com.remindme.d.reminder.dto.MemoResponseDto;

import java.util.List;

public interface MemoService {

    List<MemoResponseDto> getMemosByListId(Long listId);
    MemoResponseDto createMemo(MemoRequestDto dto);

}
