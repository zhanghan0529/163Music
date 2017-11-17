export default function hotSong() {
  function getSong() {
    var query = new AV.Query("Song");
    query.equalTo("hot", true);
    return query.find();
  }

  getSong().then(render, function(error) {
    alert("出错了！");
  });

  function render(results) {
    $(".hot-music .ball-beat").remove();
    var listNum = 1;
    for (var i = 0; i < results.length; i++) {
      var result = results[i];
      var songAttr = result.attributes;
      var renderPage = appendHot(result, songAttr, "0" + listNum);
      if (listNum <=4) {
        $(".listnum").addClass("active1");
        $(".hotmusic-list").append(renderPage);
      } else if (4 <= listNum && listNum < 10) {
        $(".hotmusic-list").append(renderPage);
      } else {
        renderPage = appendHot(result, songAttr, listNum);
        $(".hotmusic-list").append(renderPage);
      }
      listNum++;
    }
  }

  function appendHot(Id, songMessage, num) {
    var html = "";
    // if (num < 4) {
    html += "<li class='clearfix'>";
    html += "<a class='clearfix' href=./song.html?id=" + Id.id + ">";
    html += "<div class='listnum'>" + num + "</div>";
    html += "<div class='playbtn clearfix'>";
    html +=
      "<img src='http://oz73ituo2.bkt.clouddn.com/play1.png' alt=''></div>";
    html += "<div class='hotmusic'>";
    html += "<div class='music-na'>" + songMessage.name + "</div>";
    html += "<div class='music-aut'>";
    html += "<img src='http://oz73ituo2.bkt.clouddn.com/sq.png' alt=''>";
    html +=
      "<span>" + " " + songMessage.singer + "-" + songMessage.album + "</span>";
    html += "</div></div></a></li>";
    return $(html);
  }
}
