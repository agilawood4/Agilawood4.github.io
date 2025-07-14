var posts=["2025/07/14/hello-world/","2025/07/14/字符串哈希/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };