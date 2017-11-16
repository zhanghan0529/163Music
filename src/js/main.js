import tabs from './app/tabs';
import songlist from './app/songlist';
import newsong from './app/newsong';
import hotsong from './app/hotsong';
import searchsong from './app/search';
// var  tabs = require("./app/tabs")

tabs($(".tabs-list>li"));
songlist();
newsong();
hotsong();
searchsong();