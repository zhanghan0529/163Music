export default function play() {
  function getId() {
  var regx = /^\?[a-z]+\=/g;
  var songId = window.location.search.replace(regx, "");
  var query = new AV.Query("Song");
  return query.get(songId);
  }//获取页面歌曲id
  getId().then(render,
    function(error) {
      alert("获取歌曲失败~");
    }
  );
function render(results){
 
      //  console.log(results.attributes)
      var songAttr = results.attributes;
      $(".song-wrap>img").attr("src", songAttr.imgUrl);
      $(".song-gp .circle>img").attr("src", songAttr.imgUrl);
      appendSong(songAttr);
      var audio = document.createElement("audio");
       audio.src = songAttr.url;
      var lyrics = songAttr.lyrics.split("\n");
      $(".btn1").on("click", function() {
        // console.log($(this))
        $(this).addClass("active").siblings().removeClass("active");
        $(".song-gp .circle > img").removeClass("pausing").addClass("playing");
        $(".song-gp .circle > span").removeClass("pausing").addClass("playing");
        audio.play();
      });
      $(".btn2").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active");
        $(".song-gp .circle > span").removeClass("playing").addClass("pausing");
        $(".song-gp .circle > img").removeClass("playing").addClass("pausing");
        audio.pause();
      });

      for (var i = 0; i < lyrics.length; i++) {
        var lyric = lyrics[i].split("]");
        var lyTime = lyric[0].substring(1);
        var lyri = lyric[1];
        var lyMin = +lyTime.split(":")[0];
        var lySec = +lyTime.split(":")[1];
        var sumTime = lyMin * 60 + lySec;
        appendLyrics(lyri, sumTime);
      }
      //  console.log(arr);
      //    audio.currentTime = 215
      setInterval(function() {
        var current = audio.currentTime;
        // current = 200 ;
        var $line = $(".lyrices > ul > li");
        if (audio.duration === current) {
          $(".song-gp .circle > span").addClass("pausing");
          $(".song-gp .circle > img").addClass("pausing");
          $(".btn2")
            .addClass("active")
            .siblings()
            .removeClass("active");
        }
        for (var i = 0; i < $line.length; i++) {
          var $lineTime = $line.eq(i).attr("data-time");
          var $lineNextTime = $line.eq(i + 1).attr("data-time");
          // current = 200;
          if (i === $line.length - 1) {
            showLyrics($line.eq(i), i);
          } else if (current >= $lineTime && current < $lineNextTime) {
            showLyrics($line.eq(i), i);
            break;
          }
        }
      }, 500);//每500毫秒检查当前时间的歌词是否对应

    function showLyrics(e, i) {
        var lineD = e.offset().top;
        var wrapH = $(".lyrices > ul").offset().top;
        var lineH = $(".lyrices > ul > li").outerHeight(true);
        var drop = lineD - wrapH - lineH;
        // console.log(i);
        $(".lyrices > ul").css("top", lineH);
        // console.log(lineH)
        if (i === 0) {
          $(".lyrices > ul").css("top", 0);
          e.addClass("active1");
        } else {
          e.addClass("active1").siblings().removeClass("active1");
          $(".lyrices > ul").css("top", "-" + drop + "px");
        }
      } //显示当前的歌词
    }


  function appendLyrics(lyrics, time) {
    var html = "";
    html += "<li data-time =" + time + ">" + lyrics + "</li>";
    $(".lyrices>ul").append(html);
  }
  function appendSong(songMes) {
    var html = "";
    var html2 = "";
    html2 += "<span class='song-name'>" + songMes.name + " - </span>";
    html2 += "<span class='song-author'>" + songMes.singer + "</span>";
    $(".circle").append(html);
    $(".lyrices").before(html2);
  }

}
