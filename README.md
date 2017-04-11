PDF印章
=====

介绍
----

__在线加载PDF文档,并实现盖章效果,提交后可向服务器返回相应信息__

起步
----

1. 搭建静态服务器
 
2. 运行index.html

3. 浏览所需要的PDF文件,并进行操作

使用框架
----

* jQuery.js

* Bootstrap

* PDF.js

* jquery.stamper.js

项目目录
----

* lib - 核心功能类库

* pdf - 存储本地PDF文件

* config.json - 存储提交网络请求的url地址

* index.html - 项目入口

功能操作
----

* 点击文件列表右侧的查看按钮打开PDF浏览器

    __给按钮绑定`viewPDF(pdfUrl, stamperUrl)函数即可通过点击调用PDF阅读功能,第一个参数为PDF文件的url路径,第二个参数为章图片的url路径`__
     
    ![文件列表][1]


* 点击"我要盖章"按钮,图标将会变成印章图案,此时单击需要印章出进行盖章

    ![PDF浏览][2]

* 可以在页面上同时盖多个章,每个章的圆心部分会显示序号/页码/坐标等信息

    ![PDF盖章][3]

* 在已经印章的区域单击,则会取消点击区域的盖章

* 操作完毕后,点击"提交数据"按钮,则会将数据以字符串形式发送到指定服务器
    
    ![提交数据][4]


[1]:sealLib/web/images/readmeImg/list.png
[2]:sealLib/web/images/readmeImg/pdf.png
[3]:sealLib/web/images/readmeImg/stamper.png
[4]:sealLib/web/images/readmeImg/submit.png