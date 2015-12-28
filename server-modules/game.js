/**
 * Created by WebStorm.
 * User: aaron
 * Date: 15/11/30
 * Time: 20:37
 */

// 一些工具方法

'use strict';
const AV = require('leanengine');
const tool = require('./tool');

let pub = {};

pub.show = (req, res) => {
    // 控制台输出
    tool.l('game');

    // 创建该类的一个实例
    var Game = AV.Object.extend('game');
    var query = new AV.Query(Game);

    // 获取单个游戏
    //query.get('567ff3d200b042c0920f4d14', {
    //  success: function(game) {
    //    // 成功获得实例
    //    var gameName = game.get('name');
    //    var gameUrl = game.get('url');
    //    res.send({
    //      gameName: gameName,
    //      gameUrl: gameUrl
    //    });
    //  },
    //  error: function(error) {
    //    res.send({
    //      error:"get games failed"
    //    });
    //  }
    //});

    // 获取整个游戏集
    //query.find({
    //    success: function (results) {
    //        tool.l('Successfully retrieved ' + results.length + ' posts.');
    //        // 处理返回的结果数据
    //        for (var i = 0; i < results.length; i++) {
    //            var object = results[i];
    //            tool.l(object.id + ' - ' + object.get('name') + ' - ' + object.get('url'));
    //        }
    //    },
    //    error: function (error) {
    //        res.send({
    //            error: "find games failed"
    //        });
    //    }
    //});

    // 输出游戏接口
    query.find({
        success: function (results) {
            var num = parseInt(Math.random() * results.length);
            tool.l(num);
            res.send({
                name: results[num].get('name'),
                url: results[num].get('url')
            });
        },
        error: function (error) {
            res.send({
                error: "find games failed"
            });
        }
    });
};

module.exports = pub;