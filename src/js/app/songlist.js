export default function songlist() {
  function getList() {
    var query = new AV.Query("SongList");
    return query.find();
  }
  function render(results){
    $(".reco-music .ball-beat").remove();
    for (var i = 0; i < results.length; i++) {
      var result = results[i];
      var listAttr = result.attributes;
      var renderPage = appendList(result, listAttr);
      $(".musicList").append(renderPage);
    }
  }


  getList().then(render,function(error) {
      alert("获取歌曲列表失败！");
    });

  function appendList(listId, list) {
    var html = "";
    html += "<li><a href='./songlist.html?id=" + listId.id + "'>";
    html += "<div class='listennum'>";
    html += "<div class='listennum-in clearfix'>";
    html +=
      "<svg class='icon' aria-hidden='true'><use xlink: href='#icon-erji'></use></svg>";
    html += "<p>" + list.ListenNum + "万</p>";
    html += "</div></div>";
    html += "<div class='music-img'>";
    html += "<img src=" + list.imgUrl + " alt=''>";
    html += "<span>" + list.title + "</span></a></li>";
    return $(html);
  }
}

// <li>
//     <a href="./songlist.html">
//         <div class="listennum">
//             <div class="listennum-in clearfix">
//                 <svg class="icon" aria-hidden="true">
//                     <use xlink: href="#icon-erji"></use>
//                                     </svg>
//             <p>101.1万</p>
//         </div>
//                            </div>
//     <div class="music-img">
//         <img src="http://oz73ituo2.bkt.clouddn.com/%E5%8F%AF%E4%BB%A5%E4%BA%86" alt="">
//                             </div>
//         <span>动听的Eason歌大合集</span>
//                         </a>
// </li>
