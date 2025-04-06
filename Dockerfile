# Используем Node.js как базовый образ
FROM node:lts-alpine AS builder

WORKDIR /app

# Копируем файлы проекта
COPY . .

# Устанавливаем зависимости и собираем проект
RUN npm install && npm run build

# Используем минимальный образ для запуска
FROM node:lts-alpine AS runner

WORKDIR /app

# Копируем только нужные файлы из builder
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

# Указываем команду для запуска SSR-сервера Nuxt
CMD ["node", ".output/server/index.mjs"]
