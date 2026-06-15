# useReducer Exercises

Folder này chứa tất cả các bài tập về `useReducer` hook trong React.

## Cấu trúc Bài Tập

### Exercise 1: Counter Component
**File**: `Exercise1_Counter.jsx`

Mô tả: Tạo một component Counter đơn giản sử dụng `useReducer` để quản lý trạng thái.

**Chức năng**:
- Increment: Tăng giá trị counter lên 1
- Decrement: Giảm giá trị counter xuống 1
- Reset: Đặt lại counter về 0

**Khái niệm chính**:
- Reducer function
- Action objects
- useReducer hook
- Switch statement để xử lý actions

---

### Exercise 2: Question Bank (Quiz Application)
**File**: `Exercise2_QuestionBank.jsx`

Mô tả: Xây dựng một ứng dụng quiz hoàn chỉnh sử dụng `useReducer` để quản lý trạng thái phức tạp.

**Chức năng**:
- Hiển thị câu hỏi tuần tự
- Cho phép người dùng chọn một trong các lựa chọn
- Xác thực lựa chọn trước khi chuyển sang câu hỏi tiếp theo
- Tính toán điểm số
- Hiển thị kết quả cuối cùng
- Cho phép khởi động lại quiz

**Khái niệm chính**:
- Complex state management
- Multiple state variables
- Conditional rendering
- Progress tracking
- Score calculation

**State Structure**:
```javascript
{
  questions: [],        // Mảng câu hỏi
  currentQuestion: 0,   // Index câu hỏi hiện tại
  selectedOption: '',   // Lựa chọn của người dùng
  score: 0,            // Điểm số hiện tại
  showScore: false     // Hiển thị màn hình kết quả
}
```

**Actions**:
- `SELECT_OPTION`: Chọn một lựa chọn
- `NEXT_QUESTION`: Chuyển sang câu hỏi tiếp theo
- `RESTART_QUIZ`: Khởi động lại quiz

---

## Cấu trúc File

```
exercises/
├── reducers/
│   ├── counterReducer.js      # Reducer cho bài 1
│   └── quizReducer.js          # Reducer cho bài 2
├── data/
│   └── quizData.js             # Dữ liệu initial state
├── Exercise1_Counter.jsx       # Component Counter
├── Exercise2_QuestionBank.jsx  # Component Quiz
├── index.js                    # Export central
└── README.md                   # File này
```

---

## Cách Thêm Bài Tập Mới

1. Tạo reducer trong `reducers/` nếu cần
2. Tạo dữ liệu/state trong `data/` nếu cần
3. Tạo component file: `Exercise[N]_[Name].jsx`
4. Thêm import/export trong file `index.js`
5. Thêm case trong switch statement của `App.jsx`

---

## Để Chạy Các Bài Tập

```bash
npm run dev
```

Sau đó mở trình duyệt và xem các component trong ứng dụng.

Sử dụng các tab để chuyển đổi giữa các bài tập.

---

## Tài Nguyên Học Tập

- [React useReducer Documentation](https://react.dev/reference/react/useReducer)
- [Choosing Between State and Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer)
- [Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context)

