# Home-H5

## 描述
用于对节点的应用区进行配置的简单页面


## 安装
---
> 安装流程将以ubuntu18.04作为基础，其他平台请自行修改
1.  安装nodejs环境
``` sh
sudo apt-get install nodejs
sudo apt-get install npm
```
2.  下载代码
``` shell
git clone https://github.com/netcloth/Home-H5.git
```
3.  编译代码
```shell
cd Home-H5
npm install
npm run build
```
此时在当前目录下将会产生一个dist的目录，其中包含的就是编译好的Html代码，将其部署到相应的web服务器中即可
备注：如若大陆install速度过慢，可以尝试设置淘宝代理，使用方式如下
```shell
#替换
#npm install
#为
npm install --registry https://registry.npm.taobao.org 
```

## 如何修改页面配置
网页是基于vue编写的，如果可在此框架下自行修改。

如若只需要对小应用进行增删改。可以直接修改src/lang中的en.js和zh-cn.js分别表示英文和简体中文环境下的配置。

其文件结构如下所示
```javascript
export const m = {
  name:[
        [
            ["NetCloth博客","url(/static/netcloth.png)","https://blog.netcloth.org"],
            ["链闻社","url(/static/chainnews.png)","https://www.chainnews.com"],
            ["非小号","url(/static/feixiaohao.png)","https://feixiaohao.com"],
            ["金财快讯","url(/static/jinse_kuaixun.png)","https://m.jinse.com/lives"],
        ],
    ],
}
```
其中
```javascript
["NetCloth博客","url(/static/netcloth.png)","https://blog.netcloth.org"],
```
3个值分别表示小应用的名称，图标的地址(如果新增图标需要将新的图标放到static目录下),指向的小应用h5地址。
而整体结构如下所示

```javascript
export const m = {
  name:[
        [//这是第一行的配置，最多4个
            [1行1列的相关配置],
            [1行2列的相关配置],
            [1行3列的相关配置],
            [1行4列的相关配置],
        ],
        [//这是第二行的配置
            ....
        ]
        ....
    ],
}
```

配置完成后对重新编译代码并部署即可