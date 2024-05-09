# 前端积累

## 技能

- 文档能力 uml/业务
  https://w0be5cxszhi.feishu.cn/docx/AATFd0pcooccUgxF1mdcBGQGnnd
- 工程化 webpack/rollup/vite/swc/esbuild
- 前端基础 vue/react/ts/js/css/html
- 前端框架 next/astro/taro/
- 拓展能力 worker/wasm
- 可视化
  - 2d antv
  - 3d threejs
- 多端
  - flutter
  - rn
  - ionic
  - arkTS 鸿蒙
- 富文本编辑器
  - quill
  - vue2.7 手动实现
- 服务端 node/python
  -
- 服务端框架 prisma/express/nest
  - https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-nextjs
- 数据库 mysql/mongodb
  - [] 设计范式
  - []
- 云服务 vercel/阿里云
- 基础能力 设计模式/操作系统/数据结构+算法/网络/http
- 团队管理
- ai
  - openai
  - stable difusion

## 作品列表

- []

## 管理

- tl https://www.yuque.com/5000tl/tl

## 技术向兴趣

- Trending
- juejin
- v2ex

## 复习节奏

### 基础 fe

- [] 工程化

  - [] node
    - [x] 基础模块
    - [] 流逝编程
  - 构建打包
    - [] webpack
      - [] 源码
        - qa/工程化-webpack.md
      - 模块联邦
    - rollup
    - vite
      - 优化方案
    - rspack
    - [] postcss
  - 私有 npm 源
    - [] 优化
  - [] cli 脚手架制作
    - [] umi
    - [] vue-cli
  - [] 微前端
    - https://swearer23.github.io/micro-frontends/
    - [] qiankun 15.4k
      - [x] 微前端的核心价值 https://zhuanlan.zhihu.com/p/95085796
    - [] wujie 3.8k
    - [] single-spa 13k
  - codesandbox
  - [] 监控

    - [] sentry

  - [] 性能指标
    - [] 火焰图
    - [] FP first paint
    - [] 引发性能的问题
      - [] 重绘重排
      - [] gc 垃圾回收
        - 可达性（Reachability）
          - 如果一个值可以通过引用链从根访问任何其他值，则认为该值是可达的
        - 内部算法
          垃圾回收的基本算法被称为 “mark-and-sweep”。
          - 增量标记算法 把完整垃圾回收任务分成很多小任务 穿插执行
          - 因为 gc 是在 js 主线程中运行的
        - 优化建议
          - 分代收集（Generational collection）
          - 增量收集（Incremental collection）
          - 闲时收集（Idle-time collection）
      - [] 大计算
  - [] 前端安全性问题
    - [] xss
    - [] sql 注入
    - [] csrf
    - [] 中间人攻击
  - [] axios 配置 + 源码
  - [] babel
    - [] 内部流程
      步骤一：解析
      使用  @babel/parser  解析器进行语法解析，获得 AST
      步骤二：转换
      使用  @babel/traverse  对 AST 进行深度遍历，处理各种 AST 节点
      遍历过程中，能对每一种节点进行处理，这里可以使用到   @babel/types  对节点进行增删查改，或者也可以使用  @babel/template  来生成大量 AST 进行修改
      步骤三：生成
      使用  @babel/generator  将处理后的 AST 转换回正常代码
    - [] 插件开发
      - [] 插件就是一个函数
        - function (){return {visitor:{xxxx} }}
        - visitor = {
          CallExpression() {}, // 当节点是一个函数调用表达式时
          MemberExpression() {}, // 当节点是一个成员表达式时，如 foo.bar
          FunctionDeclaration() {}, // 当节点是一个函数声明时
          }
    - [x] https://juejin.cn/post/6844904162237366279
    - [] 源码解析
  - [] react

    - [] 严格模式 非严格模式区别
    - [] class component function component 区别
    - [] 版本之间的区别

  - [] vue
  - [] vue 源码
  - [] vue-router 源码
  - [] vue-class-component 源码
  - [] vuex
  - [] vue-i18n

- 前端业务
- [] 前端鉴权
- [] js
  - [] 语言特性
    - [] 动态语言 弱类型
      - 弱类型，意味着你不需要告诉 JavaScript 引擎这个或那个变量是什么数据类型，JavaScript 引擎在运行代码的时候自己会计算出来。
        动态，意味着你可以使用同一个变量保存不同类型的数据。
  - [] 执执行上下文中包含了 变量环境、词法环境、外部环境，但其实还有一个 this
  - [] 变量环境： 变量提升 函数提升
  - [] 词法环境 : let const 暂时性死区 块级作用域
  - [] 外部环境 作用域链 闭包
  - [] this: 普通函数 箭头函数 call apply bind
    - 当函数作为对象的方法调用时，函数中的 this 就是该对象。
      当函数被正常调用时，在严格模式下，this 值是 undefined，非严格模式下 this 指向的是全局对象 window。
      嵌套函数中的 this 不会继承外层函数的 this 值。
  - [] 内存 代码空间 堆 栈 池
    - 堆 引用类型
    - 栈 原始类型
    - 池
  - [] 手写实现
    - [] promise
    - [] async await 的实现
    - [] 防抖节流
    - [] 准确的 settimeout
- [] 正则表达

- [] 框架
  - SSR
    - [] next
    - [] nuxt
    - [] Astro
      - https://docs.astro.build/zh-cn/getting-started/

### 框架+库

- [] vue
- [] vue router
- [] vuex
- [] vue cli
- [] element plus source

### 基础 cs

- [] 浏览器原理
  - [] 单进程浏览器时代 07 年之前
    - []
  - [] 多进程浏览器时代 08 年之后
    - [] 主进程
    - [] 网络进程
    - [] 渲染进程
    - [] 插件进程
    - [] GPU进程
  - [] 安全策略 同源策略
  - [] 渲染流程
    - 
- [] tcp ip
  - [] http
    - [] v1 v2 v3 的区别
    - [] 浏览器缓存
  - [] https
  - [] socket

### 管理

- ppt
-

### 业务

- [] 架构能力
- [] 文档能力

### 最后多看面经

- 面试能力 不等于工作能力

### 开源

- 华为云的低代码 vue3 https://github.com/opentiny
