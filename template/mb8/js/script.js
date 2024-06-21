	  $(function(){	
	$(".copy_text").each(function(){
		var text2 = $(this).text();
		var clipboard = new Clipboard(this, {
			text: function() {									
				return text2;
			}
		});
		clipboard.on('success', function(e) {
			alert("网址复制成功;请粘贴保存！");
		});
	});
	
	$(".copy_checked").each(function(){		
		var checked_url=[];						
		$(this).parent().parent().find(".copy_text").find("a").each(function(){
			checked_url.push($(this).text());
		});	
		var clipboard = new Clipboard(this, {
			text: function() {				
				return checked_url.join('\n');
			}
		});
		clipboard.on('success', function(e) {
			alert("网址复制成功;请粘贴保存！");
		});
	});
	
	  });
	
	function cookiesave(n, v, mins, dn, path) {
        if (n) {
            if (!mins)
                mins = 365 * 24 * 60;
            if (!path)
                path = "/";
            var date = new Date();
            date.setTime(date.getTime() + (mins * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
            if (dn)
                dn = "domain=" + dn + "; ";
            document.cookie = n + "=" + v + expires + "; " + dn + "path="
                    + path;
        }
    }
    function cookieget(n) {
        var name = n + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length);
        }
        return "";
    }
    function closeclick() {
        document.getElementById('popBox').style.display = 'none';
        cookiesave('closeclick', 'closeclick', '', '', '');
    }
    function clickclose() {
        if (cookieget('closeclick') == 'closeclick') {
            document.getElementById('popBox').style.display = 'none';
        } else {
            document.getElementById('popBox').style.display = 'block';
        }
    }
    window.onload = clickclose;
    
    
    $(function(){	
	$(window).scroll(function() {		
		if($(window).scrollTop() >= 100){
			$('#btnGotop').fadeIn(300); 
		}else{    
			$('#btnGotop').fadeOut(300);    
		}  
	});
	$('#btnGotop').click(function(){
	$('html,body').animate({scrollTop: '0px'}, 800);});	
});
function copyLink(){
            var e = document.getElementById("copy");
            e.select(); // 选择对象
            document.execCommand("Copy"); // 执行浏览器复制命令
            alert("●网址已复制成功●\n\n请粘贴到微信/QQ或者备忘录里;防止丢失！\n\n" +
        "如果您觉得本站还不错，请粘贴发送给好友。\n感谢～");
        }