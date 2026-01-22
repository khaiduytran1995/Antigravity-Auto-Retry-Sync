# IDA Pro Patching Guide - Story NextGen 2.0

## Bước 1: Load File vào IDA Pro

1. Mở **IDA Pro**
2. File → Open → chọn `Story NextGen 2.0_Hamy.exe`
3. Chọn **PE executable for AMD64 (PE+)** 
4. Đợi IDA analyze xong (có thể mất vài phút)

---

## Bước 2: Tìm String "FIRST_LAYER_STRICT_MODE"

1. Nhấn **Shift+F12** (Open Strings Window)
2. Tìm string: `FIRST_LAYER_STRICT_MODE`
3. Double-click vào string đó

---

## Bước 3: Tìm Cross-Reference (XREF)

1. Đứng tại string `FIRST_LAYER_STRICT_MODE`
2. Nhấn **X** (hoặc right-click → Jump to xref to operand)
3. Sẽ thấy danh sách các chỗ code tham chiếu đến string này
4. Double-click vào XREF đầu tiên

---

## Bước 4: Phân Tích Code

Bạn sẽ thấy code assembly kiểu như:

```asm
lea     rdx, aFIRST_LAYER_STRICT_MODE  ; "FIRST_LAYER_STRICT_MODE"
mov     rcx, rax
call    some_function                   ; Get value of STRICT_MODE
test    al, al                          ; Test if True/False
jz      short loc_XXXXXX                ; Jump if False (DISABLED)
; Code path for ENABLED (strict mode ON)
lea     rdx, aENABLED                   ; "ENABLED (Must verify..."
...
jmp     short loc_YYYYYY
; Code path for DISABLED
loc_XXXXXX:
lea     rdx, aDISABLED                  ; "DISABLED (Cache fallback..."
```

---

## Bước 5: Tìm Activation Check

Scroll xuống tìm đoạn code:

```asm
call    check_activation                ; hoặc is_activated
test    al, al                          ; Check return value
jz      show_activation_dialog          ; If False, show dialog
; If True, continue to main window
```

**QUAN TRỌNG:** Tìm pattern `call` + `test al, al` + `jz` hoặc `jnz`

---

## Bước 6: Patch Code

### Option A: NOP the JZ (Recommended)

1. Click vào dòng `jz show_activation_dialog`
2. Nhấn **Spacebar** để vào Edit mode
3. Thay `jz` bằng `nop` (2 bytes: `90 90`)
4. Nhấn **Enter**

### Option B: Reverse Logic

1. Click vào `jz` 
2. Đổi thành `jnz` (hoặc ngược lại)

### Option C: Always Jump to Main Window

1. Tìm dòng jump đến MainWindow
2. Thay `jnz` thành `jmp` (unconditional jump)

---

## Bước 7: Apply Patch

1. **Edit → Patch program → Apply patches to input file**
2. Chọn **Create backup** (tạo file .bak)
3. Click **OK**

---

## Bước 8: Test

1. Chạy file đã patch
2. Xem có skip activation dialog không

---

## Các Byte Codes Quan Trọng

| Instruction | Opcode | Hex Bytes |
|-------------|--------|-----------|
| `jz short`  | 74 XX  | 74 XX     |
| `jnz short` | 75 XX  | 75 XX     |
| `jmp short` | EB XX  | EB XX     |
| `nop`       | 90     | 90        |
| `test al,al`| 84 C0  | 84 C0     |

---

## Nếu Không Tìm Thấy

Thử tìm các string khác:

- `check_activation`
- `is_activated`
- `Activation required`
- `ActivationDialog`

Rồi làm tương tự: tìm XREF → phân tích code → patch.

---

## Lưu Ý

- **Backup file gốc** trước khi patch
- Nếu patch sai, app sẽ crash → restore từ backup
- Có thể cần patch nhiều chỗ nếu có nhiều checks
