var posts=["2025/07/16/KMP算法/","2025/07/14/hello-world/","2025/07/15/Tire树/","2025/07/16/python-函数/","2025/07/17/python-数据可视化/","2025/07/15/python-数据容器/","2025/07/17/python编程/","2025/07/16/二分专题/","2025/07/17/分块基础/","2025/07/14/字符串哈希/","2025/07/17/矩阵快速幂/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };