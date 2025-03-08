# FROM php:8.0-apache

# RUN apt-get update && apt-get install -y libpq-dev

# WORKDIR /var/www/html

# COPY . .

# RUN docker-php-ext-install pdo pdo_pgsql pgsql

# RUN a2enmod rewrite

# CMD ["apache2-foreground"]

FROM php:8.0-apache

RUN apt-get update && apt-get install -y libpq-dev curl && \
    docker-php-ext-install pdo pdo_pgsql pgsql

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www/html

COPY . .

RUN composer install --no-interaction --optimize-autoloader

RUN a2enmod rewrite

CMD ["apache2-foreground"]