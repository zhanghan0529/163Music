export default function newSong() {
  function getSong() {
    var query = new AV.Query("Song");
    return query.find();
  }

  
  function render(results) {
      $(".newmusic .ball-beat").remove();
      for (var i = 0; i < results.length; i++) {
        var result = results[i];
        var songAttr = result.attributes;
        var renderPage = appendReco(result, songAttr);
        $(".newmusic-in").append(renderPage);
        // console.log(results1.id)
        // console.log(songAttr.singer)
        // appendHot(songAttr);
        // $(".hotmusicList").append(appendHtml);
      }
    };
  

  getSong().then(render, function(error) {
      alert("获取新歌失败了！");
    }
  );
  function appendReco(Id, songMessage) {
    var html = "";
    html += "<li>";
    html += "<a href=./song.html?id=" + Id.id + ">";
    html += "<div class='playbtn clearfix'>";
    html += " <img src='http://oz73ituo2.bkt.clouddn.com/play1.png' alt=''>";
    html += "</div>";
    html += "<div class='music-na'>" + songMessage.name + "</div>";
    html += "<div class='music-aut'>";
    html += "<img src='http://oz73ituo2.bkt.clouddn.com/sq.png' alt=''>";
    html +=
      "<span>" + " " + songMessage.singer + "-" + songMessage.album + "</span>";
    html += "</div></div></li>";
    return $(html);
  }
}
