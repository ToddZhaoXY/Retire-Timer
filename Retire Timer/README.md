# 退休倒计时 Demo

一个模仿 Bing 搜索结果页面的"退休倒计时"工具 Demo。

## 功能特点

- 输入出生日期，默认60岁退休（可自定义）
- 实时显示倒计时：年/月/日/时/分/秒
- 响应式设计，支持桌面和移动端
- 与 Stopwatch 工具互相链接

## 文件说明

```
retirement-countdown/
├── index.html      # 退休倒计时主页面
├── stopwatch.html  # 秒表页面
├── styles.css      # 共享样式文件
├── data.js         # 数据配置文件
└── README.md       # 本文件
```

## 本地预览

直接在浏览器中打开 `index.html` 即可预览。

## 部署到 GitHub Pages

### 步骤 1：创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角 "+" 按钮，选择 "New repository"
3. 输入仓库名称（如：`retirement-countdown`）
4. 选择 "Public"
5. 点击 "Create repository"

### 步骤 2：上传文件

**方法 A：通过网页上传**
1. 在仓库页面点击 "uploading an existing file"
2. 将 `retirement-countdown` 文件夹中的所有文件拖入上传区域
3. 点击 "Commit changes"

**方法 B：通过 Git 命令行**
```bash
cd retirement-countdown
git init
git add .
git commit -m "Initial commit: retirement countdown demo"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/retirement-countdown.git
git push -u origin main
```

### 步骤 3：启用 GitHub Pages

1. 进入仓库页面，点击 "Settings"
2. 在左侧菜单找到 "Pages"
3. 在 "Source" 下拉菜单中选择 "Deploy from a branch"
4. 在 "Branch" 下拉菜单中选择 "main"，目录选择 "/ (root)"
5. 点击 "Save"

### 步骤 4：获取访问链接

等待几分钟后，页面会显示您的网站链接：
```
https://YOUR_USERNAME.github.io/retirement-countdown/
```

## 自定义配置

所有文本和配置项都在 `data.js` 文件中，可以根据需要修改：

- `data.tool.defaultRetirementAge` - 默认退休年龄
- `data.tool.title` - 工具标题
- `data.otherTools.items` - Other tools 列表
- 等等...

## 技术栈

- 纯 HTML/CSS/JavaScript
- 无需构建工具
- 无外部依赖

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
