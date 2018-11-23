没什么好说的，就是一堆Bug，样式又极其丑 [传送门](http://qm36mmz.xyz/Simple-Canvas)

### 目前功能
1. **双图层**：对上层图层橡皮擦等操作时不会影响下层图像，而且画笔功能能展示在下层图像上
2. **画笔**：
	* 画笔有四种尺寸可供选择，分别是`40px`,`30px`,`20px`,`10px`；
	* 笔触为矩形；除此有五种颜色可供选择，分别是`red`,`yellow`,`blue`,`green`,`black`；
	* 笔刷目前的状态透明度更高，便于区分，所有的功能点如下图所示：

![](https://ws1.sinaimg.cn/large/006XqmrNly1fxh3kgjuhbj30rq088gm3.jpg)

* 画笔功能示意图：

![](https://ws1.sinaimg.cn/large/006XqmrNly1fxifxh8yyoj31iy166e81.jpg)

3. **橡皮擦**：
	* 橡皮擦可擦掉画笔画的内容，而不能擦掉下层图像；
	* 橡皮擦有四种尺寸，同画笔尺寸

> 注：橡皮擦和画笔的状态有透明度的标识区分，便于区分目前状态

4. **上传图片**： 用户可上传本地图片，对其操作，功能如图所示：

![](https://ws1.sinaimg.cn/large/006XqmrNly1fxig0yy8ppj31ve1cs7wi.jpg)


### 后期计划

1. 代码重构，最起码让人容易看，不能像现在这样一坨shi一样
2. 图片下载功能
3. 图片增加滤镜
4. ~~画布适应上传图片比例~~
5. `css`问题
6. 界面移动带来的画笔位置偏移问题

### 项目进度
* 11.22：

先提交个雏形

* 11.23: 

修改颜色和画笔大小的Bug

修改画布的适应问题

### 收获
1. 事件流：事件冒泡和事件捕获，参考红宝书`13.1`节
2. 打开本地图片方法：将图片转码成`base64`
3. 多图层实现：`position: absolute`，然后不同层设置不同的`z-index`
4. 画布的宽高和`CSS`的宽高不一样，这里的比例变化还会引起画笔的位置比例和粗细比例