package com.remindme.d.reminder.controller;

import com.remindme.d.reminder.dto.MemoListResponseDto;
import com.remindme.d.reminder.dto.MemoResponseDto;
import com.remindme.d.reminder.service.MemoListService;
import com.remindme.d.reminder.service.MemoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/lists")
public class MemoListController {

    private final MemoListService memoListService;
    private final MemoService memoService;

    // ✅ 특정 회원의 전체 목록 조회
    @GetMapping
    public ResponseEntity<List<MemoListResponseDto>> getMemoLists() {
        Long mockMemberId = 1L; // TODO: 실제 로그인 유저 연동 필요
        List<MemoListResponseDto> result = memoListService.getMemoListsByMemberId(mockMemberId);
        return ResponseEntity.ok(result);
    }

    // ✅ 특정 목록에 속한 메모 목록 조회
    @GetMapping("/{listId}/memos")
    public ResponseEntity<List<MemoResponseDto>> getMemosByListId(@PathVariable Long listId) {
        List<MemoResponseDto> memos = memoService.getMemosByListId(listId);
        return ResponseEntity.ok(memos);
    }
}
