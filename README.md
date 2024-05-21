# basic-nodejs-mitso

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package
  manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

## Development

If you're using VSCode, you can get a better developer experience from integration with
[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and
[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging

## Запуск приложения

1. **Сборка и запуск контейнеров Docker:**

   ```bash
   docker-compose up --build

2. Запуск миграций для базы данных (если используются): 
После того как контейнеры будут запущены, выполните миграции для базы данных, чтобы создать необходимые таблицы:
docker-compose exec app npm run typeorm migration:run

3. Доступ к приложению: Приложение будет доступно по адресу http://localhost:3000.
pgAdmin будет доступен по адресу [http://localhost:5050](http://localhost:5050).

4. **Логи и данные базы данных:**

   Логи и данные базы данных хранятся в volumes, что позволяет сохранять их при перезапуске контейнеров.

   - Логи приложения можно просмотреть с помощью команды:

     ```bash
     docker-compose logs -f app
     ```

   - Данные базы данных хранятся в volume `db-data`.

5. **Остановка контейнеров:**

   Чтобы остановить контейнеры, используйте команду:

   ```bash
   docker-compose down