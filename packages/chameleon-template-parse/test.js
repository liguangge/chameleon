
var parser = require('./src/index.js');
//var source = `<page title="cml"><view class="page-home"><view class="list"><view class="list-cell" c-for="{{pageList}}" c-for-item="pageInfo" c-bind:tap="onItemSelected(pageInfo.url)"><view class="content-item row"><image class="content-item-left-icon" src="{{pageInfo.icon}}"></image><view class="text-group"><text class="text-title">{{pageInfo.title}}</text><text class="text-desc">{{pageInfo.desc}}</text></view><image class="content-item-right-icon" src="{{arrowRight}}"></image></view></view></view></view></page>`
var source = `<view><button type="blue" text="确定"  disabled="{{true}}"  c-bind:onclick='testclick'></button></view>`
var options = {lang: 'cml'};
var result = parser(source, 'wx', options);
console.log(result.source);




