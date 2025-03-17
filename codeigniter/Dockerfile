# FROM php:8.0-apache

# RUN apt-get update && apt-get install -y libpq-dev

# WORKDIR /var/www/html

# COPY . .

# RUN docker-php-ext-install pdo pdo_pgsql pgsql

# RUN a2enmod rewrite

# CMD ["apache2-foreground"]

# FROM php:8.0-apache

# # RUN apt-get update && apt-get install -y libpq-dev curl && \
# #     docker-php-ext-install pdo pdo_pgsql pgsql

# RUN apt-get update && apt-get install -y libpq-dev curl libssl-dev && \
#     docker-php-ext-install pdo pdo_pgsql pgsql 

# # RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# WORKDIR /var/www/html

# COPY . .

# # RUN composer install --no-interaction --optimize-autoloader

# RUN a2enmod rewrite

# CMD ["apache2-foreground"]

# Sử dụng image PHP với Apache
FROM php:8.0-apache

# Cài đặt các gói phụ thuộc cần thiết và Composer
RUN apt-get update && apt-get install -y \
    libpq-dev \
    curl \
    libssl-dev \
    git && \
    docker-php-ext-install pdo pdo_pgsql pgsql && \
    # Cài đặt Composer
    curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Đặt thư mục làm việc
WORKDIR /var/www/html

# Copy mã nguồn từ máy chủ vào container
COPY . .

# Chạy composer install để cài đặt các phụ thuộc
RUN composer install --no-dev --optimize-autoloader

# Kích hoạt mod_rewrite của Apache
RUN a2enmod rewrite

# Chạy Apache trong chế độ foreground
CMD ["apache2-foreground"]