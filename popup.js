
function displayContent(event) {
  // document.getElementById(text).style.display = 'none';
  var subreddit = document.getElementById('subreddit').value || 'aww';
  fetch('https://www.reddit.com/r/' + subreddit + '/top.json?limit=1')
  .then(res=>res.json())
  .then(res=>res.data.children)
  .then(res=>res.map(post=>({
    author: post.data.author,
    link: post.data.url,
    img: post.data.thumbnail,
    title: post.data.title,
  })))
  .then(res=>res.map(render))

  const render = post => {
    console.log(post);
    var currentDiv = document.getElementById("caption"); 
    currentDiv.innerText = post.title;
    var img = document.getElementById('postImage');
    if (post.link.indexOf('imgur') !== -1 && post.link.indexOf('gif') === -1) {
      console.log("1");
      img.src = post.link + '.jpg';
    } else if (post.link.indexOf('gif') !== -1) {
      console.log("2");
      img.src = post.img;
    } else {
      console.log("3");
      img.src = post.link;
    }
  }

  var subreddit = document.getElementById("subreddit").value || 'aww';
  var currentDiv = document.getElementById("title"); 
  currentDiv.innerText = subreddit;
}





document.addEventListener('DOMContentLoaded', function() {  
  // document.getElementById('loading').style.display = 'none';
  displayContent();
  var button = document.getElementById("button");
  button.addEventListener("click", displayContent);
  document.addEventListener('keypress', e => {
    var key = e.which || e.keyCode;
    if(key === 13) {
      displayContent(e);
    }
  });
});

