/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_tabs__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_songlist__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_newsong__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_hotsong__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_search__ = __webpack_require__(5);





// var  tabs = require("./app/tabs")

Object(__WEBPACK_IMPORTED_MODULE_0__app_tabs__["a" /* default */])($(".tabs-list>li"));
Object(__WEBPACK_IMPORTED_MODULE_1__app_songlist__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_2__app_newsong__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_3__app_hotsong__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_4__app_search__["a" /* default */])();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = tabs;
function tabs(node){
  node.on("click",function() {
    $(this)
      .addClass("active1")
      .siblings()
      .removeClass("active1");
    // console.log($(this).index())
    // console.log($(".contents-list > li").eq($(this).index()));
    $(".contents-list > li")
      .eq($(this).index())
      .removeClass("active")
      .siblings()
      .addClass("active");
  });
}

// module.exports = tbs 

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = songlist;
function songlist() {
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


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = newSong;
function newSong() {
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


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hotSong;
function hotSong() {
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
      if (listNum < 4) {
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


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = search;
function search() {
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


/***/ })
/******/ ]);