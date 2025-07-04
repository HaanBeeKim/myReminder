package com.remindme.d.reminder.controller;

import com.remindme.d.reminder.dto.MemoRequestDto;
import com.remindme.d.reminder.dto.MemoResponseDto;
import com.remindme.d.reminder.service.MemoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/memos")
public class MemoController {

    private final MemoService memoService;

    // ✅ 새 메모 등록
    @PostMapping
    public ResponseEntity<MemoResponseDto> createMemo(@RequestBody MemoRequestDto dto) {
        MemoResponseDto created = memoService.createMemo(dto);
        return ResponseEntity.status(201).body(created);
    }
}
