

import '../css/index.css';

import tabs from './app/index/tabs';
import songlist from "./app/index/songlist";
import newsong from "./app/index/newsong";
import hotsong from "./app/index/hotsong";
import searchsong from "./app/index/search";
// var  tabs = require("./app/tabs")
// require ('../css/index.css')
tabs($(".tabs-list>li"));
songlist();
newsong();
hotsong();
searchsong();