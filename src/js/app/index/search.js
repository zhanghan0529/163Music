export default function search() {
  var clock = null;
  $(".searchcont .search-conts").on("input", function(e) {
    var text = $(e.currentTarget)
      .val()
      .trim();
    lazyLoad(function() {
      searchsong(text);
    }, 400);
  }); //当捕获输入文本

  function lazyLoad(callback, time) {
    if (clock) {
      window.clearTimeout(clock);
    }
    clock = setTimeout(function() {
      clock = null;
      callback();
    }, time);
  } //限流函数

  function searchsong(text) {
    if (text === "") {
      $("span.seachc").css("display", "none");
      $(".searchresults").css("display", "none");
      return;
    } else {
      $("span.seachc").css("display", "inline");
    }
    $(".inputNow>span").text(text);
    $("span.seachc").css("display", "inline");
    $(".searchresults").css("display", "block");
    $(".seachc").on("click", function() {
      // console.log(1)
      // console.log($input)
      $(".search-conts").val("");
      $("span.seachc").css("display", "none");
      $(".searchresults").css("display", "none");
    });
    getResults(text).then(render, function(error) {
      alert("获取新歌失败了！");
    });
  }
  function getResults(text) {
    var query1 = new AV.Query("Song");
    var query2 = new AV.Query("Song");
    var query3 = new AV.Query("Song");
    var Singer = query1.contains("singer", text);
    var Name = query2.contains("name", text);
    var Album = query3.contains("album", text);
    var query4 = AV.Query.or(Singer, Name, Album);
    // console.log(1)
    return query4.find();
  }

  function render(results) {
    $(".searchresults li").empty();
    if (results.length === 0) {
      var noresult = noResult();
      $(".resultList").append(noresult);
    } else if (results.length > 0) {
    var text = $(".search-conts").val();
     var renderHis = appendHis(text);
     $(".hissh").append(renderHis);
      for (var i = 0; i < results.length; i++) {
        console.log(3);
        var results1 = results[i];
        var songAttr = results1.attributes;
        var renderPage = appendSearch(results1, songAttr);
        $(".resultList").append(renderPage);
        // appendHis(results1, text)
        // console.log($(".seachc"))
      }
    }
  }
  $(".hissh").on("click", ".hisclose", function() {
    $(this)
      .parent()
      .remove();
  });
  function noResult() {
    var html = "";
    html += "<li class='clearfix'>";
    html += "<svg class='icon icon3' aria-hidden='true'>";
    html += "<use xlink: href='#icon-sousuo'></use></svg>";
    html += "<div class='resCont'>没有找到~</div>";
    html += " </a></li>";
    return $(html);
  }

  function appendSearch(num, reco) {
    var html = "";
    html += "<li class='clearfix'>";
    html += "<a href=./song.html?id=" + num.id + ">";
    html += "<svg class='icon icon3' aria-hidden='true'>";
    html += "<use xlink: href='#icon-sousuo'></use></svg>";
    html += "<div class='resCont'>" + reco.name + "  " + reco.singer + "</div>";
    html += " </a></li>";
    return $(html);
  }

  function appendHis(mes) {
    var html = "";
    html += "<li class='clearfix'>";
    // html += "<a href=./song.html?id=" + num1.id + ">";
    html += "<svg class='icon5 icon6' aria-hidden='true'>";
    html += "<use xlink: href='#icon-zhong'></use></svg>";
    html += "<div class='hiscont clearfix'>";
    html += "<span>" + mes + "</span>";
    html += "</div>";
    html += "<span class='hisclose'>";
    html += "<svg class='icon5 icon7' aria-hidden='true'>";
    html += "<use xlink: href='#icon-cha'></use>";
    html += "</svg></span>";
    html += "</li>";
    return $(html);
  }
}
