var posts=["2025/07/14/字符串哈希/","2025/07/15/Tire树/","2025/07/14/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };