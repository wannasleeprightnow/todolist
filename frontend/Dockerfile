# Используем официальный Node.js образ как базовый
FROM node:18-slim

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файл package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы
COPY . .

EXPOSE 5173

# Запускаем Vite
CMD ["npm", "run", "dev", "--host", "0.0.0.0"]