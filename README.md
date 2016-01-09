# ZExpress
express框架是nodejs下最流行的web框架，ZExpress是在express进一步封装的一套web框架。

ZExpress其实类似express-generator，会生成一套空的项目。

我们加了什么
---
首先，我们将服务器返回统一处理了，支持4种通用返回，分别是空返回、页面跳转、ajax的json返回和普通的jade返回。

然后，我们对session做了进一步的封装。

再然后，我们对jade做了缓存优化。

再然后，我们对渲染参数做了统一封装。

再然后，我们进一步规范了模块化开发规范。

快速安装
---
直接npm全局安装即可。

```
npm install zrestify -g
```

如何使用
---
类似express generator，我们只需要使用zrestify创建一个项目即可。

```
zrestify testproj
cd testproj
npm install
```

就会在当前目录下生成一个名为 **testproj** 的项目，并自动下载依赖库。

默认会添加一个**login**的**API**，要求传入**name**和**password**，在 *ctrl/login.js* 文件里修改登录验证过程即可。

默认的端口是**3700**

如果我们要启动服务，可以使用下面的指令：

```
node bin/testproj.js
```

属性说明
---
* **projname** -- 项目名，英文数字，大小写敏感
* **projname_lc** -- 根据项目名生成的全小写项目名，考虑到某些操作系统大小写敏感，文件名等强制全小写
* **title** -- 标题，可以是中文


使用到的第三方库
---

* 使用 **[yargs](https://github.com/bcoe/yargs)** 模块简化命令行工具的开发。
* 使用 **[zHandlebars](https://github.com/zhs007/zhandlebars)** 模板做项目生成模板。