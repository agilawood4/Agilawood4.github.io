var posts=["2025/07/16/KMP算法/","2025/07/15/Tire树/","2025/07/14/字符串哈希/","2025/07/14/hello-world/","2025/07/15/python-数据容器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };