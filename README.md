# My Node API

Đây là một API đơn giản xây dựng bằng Node.js và Express.

## Cài đặt

1. Clone repo này:
   ```bash
   git clone https://github.com/username/my-node-api.git
npm install
npm start

3. Cuộn xuống và nhấn **Commit new file**.

### 3. Cài đặt và deploy lên Render

#### Bước 1: Đăng nhập vào Render

1. Truy cập [Render](https://render.com/) và đăng nhập hoặc đăng ký tài khoản.
2. Sau khi đăng nhập, nhấn **New Web Service** để bắt đầu tạo dịch vụ mới.

#### Bước 2: Chọn nguồn GitHub

1. Chọn **GitHub** để kết nối với repository của bạn trên GitHub.
2. Nếu bạn chưa kết nối GitHub với Render, bạn sẽ cần cấp quyền cho Render truy cập vào tài khoản GitHub của bạn.
3. Chọn repository bạn đã tạo từ danh sách các repository trên GitHub.

#### Bước 3: Cấu hình deploy

1. **Branch**: Chọn branch (thường là `main` hoặc `master`).
2. **Build Command**: Render sẽ tự động nhận diện ứng dụng Node.js và thiết lập sẵn lệnh build. Nếu không, bạn có thể nhập `npm install` trong trường **Build Command**.
3. **Start Command**: Render sẽ tự động nhận diện lệnh start. Nếu không, bạn có thể nhập `npm start` trong trường **Start Command**.
4. **Region**: Chọn region (thường chọn region gần bạn nhất).

#### Bước 4: Tạo Web Service

Sau khi đã cấu hình xong, nhấn **Create Web Service**. Render sẽ bắt đầu quá trình xây dựng và deploy ứng dụng của bạn.

#### Bước 5: Kiểm tra ứng dụng

Khi deploy hoàn tất, Render sẽ cung cấp cho bạn một URL (ví dụ: `https://my-node-api.onrender.com`). Bạn có thể truy cập URL này để kiểm tra ứng dụng của mình.

### 4. Kiểm tra API

Sau khi ứng dụng của bạn được deploy, bạn có thể truy cập API tại URL mà Render cung cấp, ví dụ:


Trả về kết quả:

```json
{
  "message": "Hello, World!"
}
