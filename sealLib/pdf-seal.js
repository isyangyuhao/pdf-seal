document.write("<script type='text/javascript' src='sealLib/lib/jquery-1.10.2.min.js'></script>");
document.write("<script type='text/javascript' src='sealLib/lib/jquery.stamper.js'></script>");
document.write("<link href='//cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css' rel='stylesheet'>");
document.write("<script type='text/javascript' src='//cdn.bootcss.com/bootstrap/3.3.0/js/bootstrap.min.js'></script>");

document.write("<div class='modal fade bs-example-modal-lg' tabindex='-1' role='dialog' id='myModal'> <div class='modal-dialog modal-lg' role='document'> <div class='modal-content'> <div class='modal-header'> <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button> <h4 class='modal-title'>PDF详情</h4> </div> <div class='modal-body'> <iframe id='viewIframe' src='' frameborder='0' width='100%' height='580'></iframe> </div> </div> </div></div>");
/*
 <!--模态框-->
 <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" id="myModal">
     <div class="modal-dialog modal-lg" role="document">
         <div class="modal-content">
             <div class="modal-header">
                 <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                 <h4 class="modal-title">PDF详情</h4>
             </div>
             <div class="modal-body">
                 <iframe id="viewIframe" src="" frameborder="0" width="100%" height="580"></iframe>
             </div>
         </div>
     </div>
 </div>
*/

document.write("<script>function viewPDF(href, stamperUrl) {setCookie('stamperUrl', stamperUrl, 30);var pdfUrl = 'sealLib/web/viewer.html?file=' + href;$('#viewIframe').attr('src', pdfUrl);$('#myModal').modal();}$(document).ready(function() {$('#pdfAddressSubmit').on('click', function() {var addr = $('#pdfAddress').val();addr = $.trim(addr);if(addr == '') {return false;}addr = 'lib/web/viewer.html?file=' + addr;viewPDF(addr);});});function setCookie(name, value, day) {var d = new Date();d.setTime(d.getTime() + day*24*60*60*1000);var expires = 'expires=' + d.toUTCString();document.cookie = name + '=' + value + ';' + expires;}</script>");

/*
 function viewPDF(href, stamperUrl) {
     setCookie("stamperUrl", stamperUrl, 30);
     var pdfUrl = "lib/web/viewer.html?file=" + href;
     $("#viewIframe").attr("src", pdfUrl);
     $('#myModal').modal();
 }

 $(document).ready(function() {
     $("#pdfAddressSubmit").on("click", function() {
         var addr = $("#pdfAddress").val();
         addr = $.trim(addr);
         if(addr == "") {
         return false;
     }
     addr = "lib/web/viewer.html?file=" + addr;
     viewPDF(addr);
     });
 });
 function setCookie(name, value, day) {
     var d = new Date();
     d.setTime(d.getTime() + day*24*60*60*1000);
     var expires = "expires=" + d.toUTCString();
     document.cookie = name + "=" + value + ";" + expires;
 }
* */

/*
 <li class="list-group-item">
 <div class="row">
 <div class="col-lg-12"><strong>通过网络获取PDF:</strong></div>
 <div class="col-lg-12">
 <div class="input-group">
 <input type="text" class="form-control" placeholder="请输入网络地址" id="pdfAddress">
 <span class="input-group-btn">
 <button class="btn btn-default" type="button" id="pdfAddressSubmit">submit</button>
 </span>
 </div>
 </div>
 </div>
 </li>
* */