# Home-H5

## Description
Simple page for configuring the application area of ​​a node


## Installation
---
> The installation process will be based on ubuntu18.04, please modify it for other platforms
1. Install the nodejs environment
```sh
sudo apt-get install nodejs
sudo apt-get install npm
```
2. Download the code
```shell
git clone https://github.com/netcloth/Home-H5.git
```
3. Compile the code
```shell
cd Home-H5
npm install
npm run build
```
At this time, a dist directory will be generated under the current directory, which contains the compiled Html code, which can be deployed to the corresponding web server.
Note: If the installation speed in mainland China is too slow, you can try to set Taobao agent.
```shell
#replace
#npm install
#for
npm install --registry https://registry.npm.taobao.org
```

## How to modify the page configuration
The web page is written based on vue, if you can modify it yourself in this framework.

If you only need to add, delete, and modify small applications. You can directly modify en.js and zh-cn.js in src / lang to represent the configuration in English and Simplified Chinese environments, respectively.

Its file structure is shown below
```javascript
export const m = {
  name: [
        [
            ["NetCloth Blog", "url (/static/netcloth.png)", "https://blog.netcloth.org"],
            ["链 闻 社", "url (/static/chainnews.png)", "https://www.chainnews.com"],
            ["Non-small", "url (/static/feixiaohao.png)", "https://feixiaohao.com"],
            ["金 财 快讯", "url (/static/jinse_kuaixun.png)", "https://m.jinse.com/lives"],
        ],
    ],
}
```
among them
```javascript
["NetCloth Blog", "url (/static/netcloth.png)", "https://blog.netcloth.org"],
```
The three values ​​represent the name of the applet, the address of the icon (if a new icon is added, the new icon needs to be placed in the static directory), and the h5 address of the applet pointed to.
The overall structure is shown below

```javascript
export const m = {
  name: [
        [// This is the configuration of the first line, up to 4
            [Related configuration of 1 row and 1 column],
            [Related configuration of 1 row and 2 columns],
            [Related configuration of 1 row and 3 columns],
            [Related configuration of 1 row and 4 columns],
        ],
        [// This is the configuration of the second line
            ....
        ]
        ....
    ],
}
```

After the configuration is complete, recompile the code and deploy it.