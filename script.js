        // 1.获取元素：找到那个按钮，存在变量里
        // const 意思是定义一个“常量” （不会变的东西）
        const toggleBtn = document.getElementById("theme-toggle");

        // 找到 body 元素，改背景
        const body = document.body;

        const card = document.querySelector(".card");

        // 2.定义功能：点击之后要发生什么？
        function switchTheme () {
            // toggle 意思：有就删掉，没有就加上
            // 给 body 加一个'dark-mode' 的class
            body.classList.toggle('dark-mode');
            card.classList.toggle('dark-card');

            //逻辑判断：如果已经是黑夜模式，按钮图标变成太阳
            if (body.classList.contains('dark-mode')) {
                toggleBtn.innerText = "☀️ 切换模式";
            } else {
                toggleBtn.innerText = "🌙 切换模式";
            }
        }

        // 3.绑定事件：当按钮被“click” 时， 执行 switchTheme 函数
        toggleBtn.addEventListener("click",switchTheme);

        // 1.定义一个函数，专门用来更新时间
        function updateTime () {
            const now = new Date();
            const timeString = now.toLocaleTimeString("zh-CN", { hour12:false});
            const clockElment = document.getElementById("clock");
            
            clockElment.innerText = "当前时间：" + timeString;
        }
    
            // 2.立即执行一次
            updateTime();

            // 3.启动定时器
            // 1000毫秒 = 1秒
            //每过1000毫秒就去自动跑一遍 updateTime 函数
            setInterval(updateTime,1000);