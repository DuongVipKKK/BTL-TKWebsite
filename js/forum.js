// Đăng bài
let postArticle = function () {
  let article = document.getElementById("article").value;
  if (!article) return;
  const forumContainer = document.querySelector(".forum-container");
  const forumBox = document.createElement("div");
  forumBox.classList.add("forum-box");
  forumContainer.prepend(forumBox);
  const topicBox = document.createElement("div");
  topicBox.classList.add("topic-box");
  forumBox.prepend(topicBox);
  const infoUser = document.createElement("div");
  infoUser.classList.add("info-user");
  topicBox.append(infoUser);
  const avtUserPost = document.createElement("img");
  avtUserPost.src = "../img/anh1.jpg";
  infoUser.append(avtUserPost);
  const userNamePost = document.createElement("h3");
  userNamePost.append("Admin");
  infoUser.append(userNamePost);
  let topicContent = document.createElement("div");
  topicContent.classList.add("topic-content");
  topicBox.append(topicContent);
  const textPost = document.createElement("p");
  textPost.innerHTML = article;
  topicContent.prepend(textPost);
  let cmtBox = document.createElement("div");
  cmtBox.classList.add("comment-box");
  topicBox.append(cmtBox);

  //   Khung để admin bình luận bài của mình
  let postCmtBox = document.createElement("div");
  postCmtBox.classList.add("post-cmt-box");
  topicBox.append(postCmtBox);
  let postCmt = document.createElement("div");
  postCmt.classList.add("post-cmt");
  postCmtBox.append(postCmt);
  let imgAdmin = document.createElement("img");
  imgAdmin.src = "../img/anh1.jpg";
  postCmt.append(imgAdmin);
  let postCmtInput = document.createElement("div");
  postCmtInput.classList.add("post-cmt-input");
  postCmt.append(postCmtInput);
  let inPut = document.createElement("input");
  inPut.setAttribute("placeholder", "Viết bình luận...");
  inPut.setAttribute("id", "post-cmt-text");

  inPut.setAttribute("type", "text");
  postCmtInput.append(inPut);
  let btnCmt = document.createElement("button");
  btnCmt.classList.add("btn-post-cmt");
  postCmt.append(btnCmt);
  let iconSend = document.createElement("i");
  iconSend.classList.add("fa-solid");
  iconSend.classList.add("fa-paper-plane");
  btnCmt.setAttribute("onclick", "replyPost()");
  btnCmt.setAttribute("type", "button");
  btnCmt.append(iconSend);

  //   Sự kiện lắng nghe nút enter
  document
    .getElementById("article")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        postArticle();
      }
    });

  // Xóa hết ký tự trong input khi post bài viết
  document.getElementById("article").value = "";
};
let replyPost = function () {
  let cmtText = document.getElementById("post-cmt-text").value;
  
  if (!cmtText) return;
  let cmtBox = document.querySelector(".comment-box");
  let cmt = document.createElement("div");
  cmt.classList.add("cmt");
  cmtBox.prepend(cmt);
  let userCmt = document.createElement("div");
  userCmt.classList.add("user-cmt");
  cmt.prepend(userCmt);
  let imgDiv = document.createElement("div");
  userCmt.prepend(imgDiv);
  let imgAvt = document.createElement("img");
  imgAvt.src = "../img/anh1.jpg";
  imgDiv.append(imgAvt);
  let textOfCmt = document.createElement("div");
  textOfCmt.classList.add("cmt-text");
  userCmt.append(textOfCmt);
  let nameH4 = document.createElement("h4");
  nameH4.append("Admin");
  textOfCmt.prepend(nameH4);
  let pText = document.createElement("p");
  pText.innerHTML = cmtText;
  textOfCmt.append(pText);
  // Xóa chữ trong khung bình luận sau khi đăng cmt
  document.getElementById("post-cmt-text").value = "";

  document
    .getElementById("post-cmt-text")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        replyPost();
      }
    });
};
/*-----------------scrolll----------------*/
window.onscroll=function()
{  var gotop=document.getElementsByClassName("gotop");
   if(document.documentElement.scrollTop > 200||document.body.scrollTop>200)
   {

    gotop[0].style.display="block";
   }
   else
   {
    gotop[0].style.display="none";
   
   }
}
function goTop()
{
let go=setInterval(
    function()
     {
        document.documentElement.scrollTop-=50;
        if(document.documentElement.scrollTop<=0 )
            {
               clearInterval(go);
            }
     },0.2)
     
}

