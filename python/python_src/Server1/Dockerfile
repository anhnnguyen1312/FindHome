# Chọn image Python chính thức
FROM python:3.11.4

# Thiết lập thư mục làm việc trong container
WORKDIR /recommend

# Sao chép yêu cầu vào container và cài đặt thư viện
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Sao chép mã nguồn vào container
COPY . .

# Chạy ứng dụng Python
CMD ["python", "recommend.py"]
