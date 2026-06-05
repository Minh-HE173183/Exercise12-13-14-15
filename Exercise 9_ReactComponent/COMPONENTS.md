# Exercise 9: React Components - Tài Liệu Chi Tiết

## Các Component Đã Tạo

### 1. **HelloWorld Component**
- **File:** `src/components/HelloWorld.js`
- **Mục đích:** Component đơn giản hiển thị "Hello, World!"
- **Props:** Không có
- **Sử dụng:** Bài tập 2

### 2. **Introduction Component**
- **File:** `src/components/Introduction.js`
- **Mục đích:** Hiển thị tên và thông tin ngắn về bản thân
- **Props:** Không có
- **Sử dụng:** Bài tập 1
- **Nội dung:** Tên và thông điệp cá nhân (có thể tuỳ chỉnh)

### 3. **Counter Component**
- **File:** `src/components/Counter.js`
- **CSS:** `src/components/Counter.css`
- **Mục đích:** Ứng dụng đếm với nút tăng, giảm và reset
- **Props:** Không có
- **Sử dụng:** Bài tập 3
- **Tính năng:**
  - Hiển thị giá trị số hiện tại
  - Nút "+" để tăng
  - Nút "-" để giảm
  - Nút "Reset" để đặt lại về 0
  - Sử dụng React Hook `useState`

### 4. **Simple Card Components** (Bài tập 4)
Các component này hoạt động cùng nhau để tạo một card đơn giản, tương tự như Facebook/Twitter:

#### 4.1 **Title Component**
- **File:** `src/components/Title.js`
- **Props:** `text` (string) - nội dung tiêu đề

#### 4.2 **Description Component**
- **File:** `src/components/Description.js`
- **Props:** `text` (string) - nội dung mô tả

#### 4.3 **Image Component**
- **File:** `src/components/Image.js`
- **Props:** 
  - `url` (string) - URL của hình ảnh
  - `alt` (string, optional) - mô tả hình ảnh

#### 4.4 **SimpleCard Component**
- **File:** `src/components/SimpleCard.js`
- **CSS:** `src/components/SimpleCard.css`
- **Props:** `item` (object) - chứa các thuộc tính:
  ```javascript
  {
    title: string,           // Tiêu đề của card
    description: string,     // Mô tả của card
    imageUrl: string        // URL của hình ảnh
  }
  ```
- **Cấu trúc:** Gộp Title, Description, và Image thành một card hoàn chỉnh

## Cấu trúc Thư Mục
```
src/
├── components/
│   ├── Counter.js
│   ├── Counter.css
│   ├── HelloWorld.js
│   ├── Introduction.js
│   ├── Title.js
│   ├── Description.js
│   ├── Image.js
│   ├── SimpleCard.js
│   └── SimpleCard.css
├── App.js
├── App.css
├── index.js
└── index.css
```

## Cách Chạy Dự Án
```bash
npm start
```

Ứng dụng sẽ mở tại `http://localhost:3000`

## Tính Năng Chính
- ✅ Hiển thị tất cả các component trong một trang
- ✅ Giao diện đẹp với gradient background
- ✅ Responsive design cho các thiết bị di động
- ✅ Sử dụng Placeholder Images từ https://via.placeholder.com/
- ✅ CSS modular cho từng component

## Hướng Tiếp Theo (Tùy Chọn)
1. Thêm nhiều loại card khác nhau
2. Làm cho Introduction component nhận props
3. Thêm animation cho Counter
4. Tạo form component
5. Thêm state management toàn cục
