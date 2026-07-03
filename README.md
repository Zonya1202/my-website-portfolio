# zonya-site — личный сайт-визитка

Персональный сайт-портфолио front-end / UI-UX разработчика. Одностраничник (hero-секция) с переключением светлой и тёмной темы, аккуратными анимациями и адаптивной вёрсткой.

🔗 **Демо:** _добавь ссылку после деплоя_

## Возможности

- 🌗 Переключение светлой / тёмной темы (запоминается в `localStorage`, при первом заходе учитывает системную)
- ⌨️ Анимация набора текста в описании (несколько фраз по очереди)
- 🪐 Орбита иконок-скилов вокруг аватара
- 📱 Адаптивная вёрстка (десктоп / планшет / мобилка), без горизонтального скролла
- ✨ Плавные появления блоков (Framer Motion)

## Стек

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — сборка и dev-сервер
- [Tailwind CSS v4](https://tailwindcss.com/) — стили
- [Framer Motion](https://www.framer.com/motion/) — анимации
- [react-icons](https://react-icons.github.io/react-icons/) — иконки
- Шрифт [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

## Запуск

Нужен [Node.js](https://nodejs.org/) 20+ и [pnpm](https://pnpm.io/).

```bash
pnpm install      # установить зависимости
pnpm dev          # dev-сервер → http://localhost:5173
```

## Скрипты

| Команда | Что делает |
|---|---|
| `pnpm dev` | Dev-сервер с горячей перезагрузкой |
| `pnpm build` | Production-сборка в `dist/` |
| `pnpm preview` | Локальный просмотр собранного билда |
| `pnpm type-check` | Проверка типов TypeScript |
| `pnpm lint` | Линтер (oxlint) |

## Структура

```
public/              # аватар (avatar.png), резюме (cv.pdf), favicon
src/
  components/        # Navbar, Hero, Avatar, SocialLinks, ThemeToggle, Typewriter
  context/           # theme.ts (контекст + хук useTheme) + ThemeProvider.tsx
  data/profile.ts    # ← все личные данные: имя, роль, ссылки, скилы, фразы
  index.css          # палитра тем (CSS-переменные) + подключение Tailwind
  App.tsx            # сборка страницы
```

## Как настроить под себя

Почти всё правится в одном месте — **`src/data/profile.ts`**:

- имя, роль, приветствие, статус доступности;
- фразы для анимации набора текста (`descriptionPhrases`);
- ссылки на соцсети и контакт;
- список скилов (иконки берутся из `react-icons`).

Аватар — положи в `public/avatar.png`, резюме — в `public/cv.pdf`.

**Цвета тем** — в `src/index.css`: блок `:root` — светлая тема, блок `.dark` — тёмная. Меняешь переменные там, обновляется по всему сайту.

## Сборка и деплой

```bash
pnpm build           # соберёт статику в dist/
```

Содержимое `dist/` — обычная статика, разворачивается на любом статическом хостинге: GitHub Pages, Vercel, Netlify или свой VPS через nginx.
