### 移动端招聘系统（还在建设中...）

#### front-end(前端)

- 执行`npm start`启动项目
- 采用`antd-mobile`UI框架
- 使用`react-redux`状态管理
- 使用`lib-flexible + postcss-px2rem + sass`移动端适配
- 路由采用`react-router`

#### server(后端)

- 采用koa2后端框架，数据库采用mongodb
- 使用session和cookie保持登录，使用token验证请求权限（其实用其一即可，项目仅用于尝试）
- 打开系统命令行(管理者模式)，执行

    mongod --dbpath "D:\mongodb\data\db" --logpath "D:\mongodb\logs\log.txt"  --install -serviceName "MongoDB"  

- 并在命令行中执行`net start`启动mongodb
- 执行`npm run start`运行程序

#### 后续

- 聊天soket
- 个人中心
- 岗位求职