PDF印章
=====

介绍
----

__在线加载PDF文档,并实现盖章效果,提交后可向服务器返回相应信息__

起步
----

1. 搭建静态服务器
 
2. 运行/web/index.html

3. 浏览所需要的PDF文件,并进行操作

使用框架
----

* jQuery.js

* Bootstrap

* PDF.js

* jquery.stamper.js

项目目录
----

* build - PDF.js相应类库

* lib - 扩展类库

* pdf - 存储本地PDF文件

* stamper - 存储需要盖的章的图片文件,文件名为stamper.png

* web - 项目主目录
    * index.html - 程序入口
    * viewer.html - PDF浏览器入口

功能操作
----

* 点击文件列表右侧的查看按钮打开PDF浏览器
     
    ![文件列表][1]


* 点击"我要盖章"按钮,图标将会变成印章图案,此时单击需要印章出进行盖章

    ![PDF浏览][2]

* 可以在页面上同时盖多个章,每个章的圆心部分会显示序号/页码/坐标等信息

    ![PDF盖章][3]

* 在已经印章的区域单击,则会取消点击区域的盖章

* 操作完毕后,点击"提交数据"按钮,则会将数据以字符串形式发送到指定服务器
    * __发送服务器的URL地址在`web/viewer.html 532`处定义__
    
    ![提交数据][4]


[1]:web/images/readmeImg/list.png
[2]:web/images/readmeImg/pdf.png
[3]:web/images/readmeImg/stamper.png
[4]:web/images/readmeImg/submit.png