// 数据配置文件 - 所有文本和配置项集中管理
const data = {
    // 页面信息
    page: {
        title: "退休倒计时 - Bing",
        searchQuery: "退休倒计时",
        resultsCount: "约 1,250,000 条结果"
    },

    // 退休倒计时工具配置
    tool: {
        title: "退休倒计时",
        titleEn: "Retirement Countdown",
        birthdayLabel: "出生日期",
        retirementAgeLabel: "退休年龄",
        defaultRetirementAge: 60,
        minRetirementAge: 50,
        maxRetirementAge: 75,
        startButton: "开始计算",
        resetButton: "重置",
        countdownLabel: "距离退休还有",
        retiredMessage: "恭喜！您已经退休了！",
        invalidDateMessage: "请选择有效的出生日期",
        units: {
            years: "年",
            months: "月",
            days: "日",
            hours: "时",
            minutes: "分",
            seconds: "秒"
        }
    },

    // Other tools 配置
    otherTools: {
        title: "Other tools",
        items: [
            {
                name: "Stopwatch",
                icon: "stopwatch",
                link: "stopwatch.html"
            },
            {
                name: "Internet spee...",
                icon: "speed",
                link: "#"
            },
            {
                name: "QR code gen...",
                icon: "qrcode",
                link: "#"
            },
            {
                name: "Timer",
                icon: "timer",
                link: "#"
            }
        ]
    },

    // 右侧边栏相关搜索
    sidebar: {
        title: "Deep dive into 退休倒计时",
        relatedSearches: [
            "退休年龄计算",
            "法定退休年龄",
            "延迟退休政策",
            "退休金计算器",
            "养老金查询",
            "社保退休年龄",
            "提前退休条件",
            "退休规划工具"
        ],
        searchToolsTitle: "Search Tools",
        searchToolsLink: "Turn off Hover Translation (关闭取词)"
    },

    // 搜索结果示例
    searchResult: {
        siteName: "退休计算器",
        url: "https://www.retirement-calculator.com",
        title: "退休倒计时 - 在线计算您的退休日期",
        description: "免费的退休倒计时工具，帮助您计算距离退休还有多少时间。支持自定义退休年龄，实时显示年月日时分秒倒计时..."
    },

    // 导航标签
    navigation: {
        tabs: ["ALL", "IMAGES", "VIDEOS"]
    },

    // Header 配置
    header: {
        points: "787"
    }
};
