



function buttonClicked(event) {
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
    var currentDiv = document.getElementById("caption"); 
    currentDiv.innerText = post.title;
    var img = document.getElementById('postImage');
    if(post.link) {
      img.src = post.link;
    } else {
      img.src = '';
    }
    console.log(post); 
  }

  var subreddit = document.getElementById("subreddit").value;
  var currentDiv = document.getElementById("title"); 
  currentDiv.innerText = subreddit;
}





document.addEventListener('DOMContentLoaded', function() {  
  // document.getElementById('loading').style.display = 'none';
  var button = document.getElementById("button");
  button.addEventListener("click", buttonClicked);
  document.addEventListener('keypress', e => {
    var key = e.which || e.keyCode;
    if(key === 13) {
      buttonClicked(e);
    }
  });
});

