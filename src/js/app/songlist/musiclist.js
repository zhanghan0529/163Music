export default function musiclist() {
  function getId() {
    var query = new AV.Query("SongList");
    var regx = /^\?+[a-z]+\=/;
    var listId = window.location.search.replace(regx, "");
    return query.get(listId);
  } // 获取页面id

  getId().then(render, function(error) {
    alert("获取歌曲列表失败~");
  }); //通过id获取歌曲列表

  function render(results) {
    var listMes = results.attributes;
    var songI = listMes.songId;
    appendList(listMes);
    var Num = 1;
    var songL = songI.split(",");
    for (var i = 0; i < songL.length; i++) {
    getSong(songL[i]).then(function(results) {
        var songMes = results.attributes;
        var songId = results.id;
        appendSong(songId, songMes, Num);
        Num++;
      }, function(error) {
        alert("获取歌曲失败~");
      });
    }
  }//渲染列表信息，获取歌曲信息，渲染

  function getSong(songL) {
      $(".list-songs .ball-beat").remove();
      var query1 = new AV.Query("Song");
      return query1.get(songL);
  }//获取列表歌曲的信息

  function appendList(mes) {
    var html5 = "<div class='bac'><img src=" + mes.imgUrl + " alt=''></div>";
    $(".list-header").append(html5);
    var html1 = "<p>" + mes.ListenNum + "万</p>";
    $(".listennum-in").append(html1);
    var html2 = "<img src=" + mes.imgUrl + " alt=''>";
    $(".music-img").append(html2);
    var html3 =
      "<span class='title'>" +
      mes.title +
      "</span><a class='listaut'>" +
      mes.name +
      "</a>";
    $(".headertitle").append(html3);
    var html4 = "<div class='listsummary'>简介：" + mes.title + "</div>";
    $(".list-tag").append(html4);
  }
  function appendSong(Id, mes1, num) {
    var html = "";
    html += '<li class="clearfix">';
    html += "<a href=./song.html?id=" + Id + ' class="clearfix">';
    html += '<div class="listnum active1">' + num + "</div>";
    html += '<div class="playbtn clearfix">';
    html +=
      '<img src="http://oz73ituo2.bkt.clouddn.com/play1.png" alt=""></div>';
    html += '<div class="tagmusic">';
    html += '<div class="music-na">' + mes1.name + "</div>";
    html += ' <div class="music-aut">';
    html += '<img src="http://oz73ituo2.bkt.clouddn.com/sq.png" alt="">';
    html += "<span> " + mes1.singer + " - " + mes1.album + "</span>";
    html += "</div></div></a></li>";
    $(".songsname").append(html);
  }
}
