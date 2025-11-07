---
title: 太极创客智能LED – 太极创客
date: 2024-11-13T21:21:43Z
lastmod: 2024-11-13T21:21:43Z
tags: [文档,学习]
---

# 太极创客智能LED – 太极创客

---

- 太极创客智能LED – 太极创客
- [http://www.taichi-maker.com/homepage/arduino-projects-index/taichi-maker-intelligent-led/](http://www.taichi-maker.com/homepage/arduino-projects-index/taichi-maker-intelligent-led/)
- 以下为本项目制作所需要具备的知识
- 2024-11-13 21:21:43

---

[跳至内容](http://www.taichi-maker.com/homepage/arduino-projects-index/taichi-maker-intelligent-led/#content)## 太极创客智能LED

|[制作需要知识](http://www.taichi-maker.com/homepage/arduino-projects-index/taichi-maker-intelligent-led/#knowledge)|
| --|
|[制作需要材料](http://www.taichi-maker.com/homepage/arduino-projects-index/taichi-maker-intelligent-led/#material)|
|[电路搭建](http://www.taichi-maker.com/homepage/arduino-projects-index/taichi-maker-intelligent-led/#hardware)|
|[控制程序及相关软件](http://www.taichi-maker.com/homepage/arduino-projects-index/taichi-maker-intelligent-led/#software)|
|[控制指令说明](http://www.taichi-maker.com/homepage/arduino-projects-index/taichi-maker-intelligent-led/#command)|

---

### 制作需要知识

以下为本项目制作所需要具备的知识

- [Arduino基本编程知识](http://www.taichi-maker.com/homepage/arduino-basic-tutorial-index/) – 会编写Arduino基本程序，会编译并上传程序给Arduino
- [WS2812 LED基本知识](http://www.taichi-maker.com/homepage/reference-index/arduino-library-index/fastled-library/) – 了解WS2812基本原理，会将WS2812 LED应用到电路中
- [HC-06蓝牙模块基本知识](http://www.taichi-maker.com/homepage/arduino-tutorial-index/mearm-index/mearm-17-bluetooth-arduino-1/)-? 会使用HC-06蓝牙模块配合Arduino工作
- [为Arduino IDE安装第三方库](http://www.taichi-maker.com/homepage/reference-index/arduino-library-index/install-arduino-library/)-? 会将FastLED库安装到Arduino IDE中
- 搭建简单电路 – 会使用[面包板](http://www.taichi-maker.com/homepage/arduino-basic-tutorial-index/arduino-basic-tutorial-12/)、[电源模块](http://www.taichi-maker.com/homepage/arduino-tutorial-index/mearm-index/mearm-5-serial-servo-1/)等基本电子元件搭建简单电路

假如您对以上知识还不熟悉，那么可以点击以上知识点的文字链接，您将打开我们太极创客团队为您制作的免费教程页面，以便您学习掌握这些信息。

---

### 制作需要材料

– Arduino Uno R3 开发板X 1  
– WS2812 LED灯带 X 1  
(您可以通过太极创客网店购买本光带：[https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-18932297540.10.7c515a8d7T1Q1h&amp;id=641502164941](https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-18932297540.10.7c515a8d7T1Q1h&id=641502164941))  
– 电阻（10K欧 X 1， 20K欧 X 1）  
– 公对公杜邦线 X 10  
– 面包板跳线 X 5  
– 面包板电源模块 X 1  
– HC-06蓝牙模块 X 1

---

### 电路搭建

可点击电路图将其放大显示。↓

![太极创客智能LED电路连接示意图](http://www.taichi-maker.com/wp-content/uploads/2018/03/WS2812-Arduino-BT_bb-1024x889.png)[http://www.taichi-maker.com/wp-content/uploads/2018/03/WS2812-Arduino-BT_bb.png](http://www.taichi-maker.com/wp-content/uploads/2018/03/WS2812-Arduino-BT_bb.png)  
太极创客智能LED电路连接示意图

此电路是在《[零基础入门学用Arduino教程 – 智能应用篇](http://www.taichi-maker.com/homepage/arduino-tutorial-index/intelligent-index/)》中[FastLED库](http://www.taichi-maker.com/homepage/reference-index/arduino-library-index/fastled-library/)课程的电路基础上增加了HC-06蓝牙模块作为手机无线遥控LED灯带的通讯渠道。

**在您搭建并使用此电路以前，我们强烈建议您先看一下我们所制作的这两部分免费教程。教程链接见下：**

[通过FastLED库控制WS2812光带教程](http://www.taichi-maker.com/homepage/reference-index/arduino-library-index/fastled-library/)  
[安卓手机配合HC-06蓝牙模块使用教程](http://www.taichi-maker.com/homepage/arduino-tutorial-index/mearm-index/mearm-17-bluetooth-arduino-1/)

注：此电路连接方案仅为刚刚接触创客制作的朋友所设计，目的是以最简单的方法来搭建电路。假如您对创客制作具备一定的基础，我们强烈建议您在看过我们的电路设计以后，自行设计电路实现此制作。相信您自己动手制作的电路会大大简化此电路中的电子元件使用，也会更加高效的实现此电路的功能。

---

### 制作步骤

1. 根据以上说明图搭建好电路。
2. 安装FastLED库到Arduino IDE  
    下载并[安装FastLED库到Arduino IDE](http://www.taichi-maker.com/homepage/reference-index/arduino-library-index/install-arduino-library/)。FastLED库可以通过本站的[下载](http://www.taichi-maker.com/homepage/download/)页面获得。
3. [下载太极创客智能LED控制程序](https://pan.baidu.com/s/1jzky47WRySHfAiiw63iC3Q)（提取码: ap6q） 并上传至Arduino 开发板。
4. 下载[无线蓝牙模块HC-06安卓应用(Arduino Bluetooth Controler)](https://pan.baidu.com/s/1pLjttSf)并安装到手机中
5. 使用手机应用控制光带  
    打开从上面链接下载的安装应用，将手机与HC-06蓝牙模块配对后打开此手机应用的Terminal（终端模式）。即可开始向光带发送控制指令。
6. **重要！！！配置LED灯珠数量**  
    在首次使用时，必须要为Arduino开发板配置LED光带灯珠数量。此操作只需进行一次即可。要想让Arduino完成LED光带控制工作，首先要知道您的光带上有多少个灯珠。具体操作如下：

假设您的灯带上有30个灯珠，那么请在手机应用终端上输入指令`l30`​（注意这里的第一个字符是英文l不是数字1）。此指令中30为灯珠数量。因此如果您的灯带上有60个灯珠，那么请输入指令`l60`。假如您看不清此指令数字前的英文字母，我们可以告诉您它是汉语拼音发音“了”的那个拼音字母所对应的英文字母。

接下来，请输入指令p1，然后稍等片刻。这个指令会让LED灯带进入自动循环播放动态效果的模式。如需详细了解如何使用，请参考序头部的说明部分详细讲解。

---

### 控制指令说明

指令说明在控制程序头部的说明部分详细讲解。
