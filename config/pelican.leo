<?xml version="1.0" encoding="utf-8"?>
<!-- Created by Leo: http://leoeditor.com/leo_toc.html -->
<leo_file xmlns:leo="http://leoeditor.com/namespaces/leo-python-editor/1.1" >
<leo_header file_format="2"/>
<globals/>
<preferences/>
<find_panel_settings/>
<vnodes>
<v t="yen.20170108171605.1"><vh>@settings</vh>
<v t="yen.20170108171605.2"><vh>@data qt-gui-plugin-style-sheet</vh></v>
<v t="yen.20170108171605.3"><vh>@string initial_split_orientation = horizontal</vh></v>
</v>
<v t="yen.20170108171733.1"><vh>@path ../</vh>
<v t="leo.20180115150519.1"><vh>@edit index.html</vh></v>
<v t="yen.20170108171733.4"><vh>@edit .gitignore</vh></v>
<v t="leo.20170908162839.1"><vh>沒有 disqus 論壇</vh>
<v t="yen.20170108171733.2"><vh>@button local-blog</vh></v>
</v>
<v t="leo.20170908162904.1"><vh>有 disqus 論壇</vh>
<v t="leo.20170709224430.1"><vh>@button github-blog</vh></v>
</v>
<v t="yen.20170108171733.5"><vh>Pelican 設定</vh>
<v t="leo.20170709020600.1"><vh>共用</vh></v>
<v t="yen.20170108171733.7"><vh>@edit pelicanconf.py</vh></v>
<v t="leo.20170709015947.1"><vh>遠端</vh></v>
<v t="leo.20170709015955.1"><vh>@edit publishconf.py</vh></v>
<v t="leo.20170709015940.1"><vh>近端</vh></v>
<v t="yen.20170108171733.6"><vh>@edit local_publishconf.py</vh></v>
</v>
<v t="yen.20170224232341.1"><vh>編輯 template</vh>
<v t="leo.20180115093448.1"><vh>@path theme/attila/templates</vh>
<v t="leo.20180715212936.1"><vh>@edit article.html</vh></v>
<v t="leo.20180115093536.1"><vh>@edit base.html</vh></v>
<v t="leo.20180115093657.1"><vh>@edit search.html</vh></v>
<v t="leo.20180115093715.1"><vh>@edit archives.html</vh></v>
<v t="leo.20180715212745.1"><vh>@edit categories.html</vh></v>
<v t="leo.20180715212902.1"><vh>@edit index.html</vh></v>
<v t="leo.20180115093726.1"><vh>@path partials</vh>
<v t="leo.20180115093749.1"><vh>@edit navigation.html</vh></v>
</v>
</v>
</v>
<v t="leo.20170710015511.1"><vh>編輯 plugin</vh>
<v t="leo.20170710015523.1"><vh>@path plugin</vh>
<v t="leo.20170710015523.2"><vh>@path tipue_search</vh>
<v t="leo.20170710015523.3"><vh>@edit tipue_search.py</vh></v>
</v>
</v>
</v>
<v t="yen.20170108171733.71"><vh>@path markdown</vh>
<v t="yen.20170108171733.81"><vh>@path pages</vh>
<v t="yen.20170108171733.82"><vh>@edit pages_1.md</vh></v>
</v>
</v>
<v t="leo.20170710022054.1"><vh>可以另建節點存放 markdown 目錄下的 md 檔案</vh></v>
<v t="leo.20170710022041.1"><vh>@path markdown</vh>
<v t="leo.20180115115910.1"><vh>2022</vh>
<v t="leo.20180423103639.1"><vh>2022 Fall CP 課程</vh>
<v t="leo.20180423103656.1"><vh>@edit 20220701.md</vh></v>
<v t="leo.20220705121453.1"><vh>@clean 20220705.md</vh>
<v t="leo.20220705121709.1"><vh>2022 Fall 重整 cmsimde</vh></v>
</v>
<v t="leo.20220705203649.1"><vh>@clean 20220705-1.md</vh>
<v t="leo.20220705204121.1"><vh>TCExam</vh></v>
</v>
</v>
</v>
</v>
<v t="yen.20170108171733.83"><vh>產生 .key 與 .crt 指令</vh></v>
</v>
<v t="yen.20170108171930.1"><vh>@button https server</vh></v>
<v t="yen.20170108171939.1"><vh>@button ipv6 https server</vh></v>
</vnodes>
<tnodes>
<t tx="leo.20170709015940.1"></t>
<t tx="leo.20170709015947.1"></t>
<t tx="leo.20170709020600.1"></t>
<t tx="leo.20170709224430.1">@language python
import os

os.system("pelican markdown -o blog -s publishconf.py")
g.es("admin pelican Github 執行完畢")


</t>
<t tx="leo.20170710015511.1"></t>
<t tx="leo.20170710015523.1"></t>
<t tx="leo.20170710015523.2"></t>
<t tx="leo.20170710022041.1"></t>
<t tx="leo.20170710022054.1"></t>
<t tx="leo.20170908162839.1"></t>
<t tx="leo.20170908162904.1"></t>
<t tx="leo.20180115093448.1"></t>
<t tx="leo.20180115093726.1"></t>
<t tx="leo.20180115115910.1"></t>
<t tx="leo.20180423103639.1"></t>
<t tx="leo.20220705121453.1">@language md
---
Title: 2022 Fall 重整 cmsimde
Date: 2022-07-05 11:00
Category: cmsimde
Tags: 2022FallCP
Slug: 2022-Fall-Reorganize-cmsimde
Author: mdecycu
---

cmsimde 的頁面一直是利用 Python, 以 Flask 架構直接寫出網頁內容.

&lt;!-- PELICAN_END_SUMMARY --&gt;

@others</t>
<t tx="leo.20220705121709.1">直接用程式寫出 html 通常是在開發階段, 需要驗證全球資訊網站前後端流程結合正確無誤時採用. 也就是所編寫的全球資訊網動態後端的程式, 能夠產生全端所需要的網站內容, 但壞處顯而易見: 網頁的 layout 修改都必須直接進入 server 端修改 python 程式才能處理.

更好的方式, 是採用 Template, 而且是在 Bootstrap 架構下的 Template.

在處理 cmsimde 採用 Flask Template + Bootstrap 議題時, 除了 Python 語法, Flask 架構, 還需要了解如何處理 Bootstrap 中的 html 與 css 程式. 因此這是一個中階的全球資訊網站計算機程式專案.

Bootstrap
----

以下是採用 Bootstrap 建立網頁時的一個範例, 其中最外圍的 div 採用 container-fluid, 根據 [Layout](https://getbootstrap.com/docs/4.4/layout/overview/) 的定義, 可知 container-fluid 在所有裝置中, 都會讓內容充滿頁面, 若將原先的 container-fluid 改為 container, 則只有在 extra-small 的情況下才會 100% 充滿螢幕.

&lt;pre class="brush:html"&gt;
&lt;div class="container-fluid"&gt;
	&lt;div class="row"&gt;
		&lt;div class="col-md-12"&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	&lt;div class="row"&gt;
		&lt;div class="col-md-6"&gt;
		&lt;/div&gt;
		&lt;div class="col-md-6"&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	&lt;div class="row"&gt;
		&lt;div class="col-md-8"&gt;
		&lt;/div&gt;
		&lt;div class="col-md-4"&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	&lt;div class="row"&gt;
		&lt;div class="col-md-4"&gt;
		&lt;/div&gt;
		&lt;div class="col-md-4"&gt;
		&lt;/div&gt;
		&lt;div class="col-md-4"&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;
&lt;/pre&gt;

從[這裡](https://github.com/mdecycu/cmsimde/commit/256f9d7ae6245ff85c155a4af08cfe1710abfd99)可以看出, cmsimde 已經改用 container. 靜態頁面內容不再完全充滿螢幕. 若要測試 Bootstrap 中的頁面配置, 可以透過 [Layoutit](https://www.layoutit.com/build) 進行測試.

Template
----

因為之前曾經用過 [Mako](https://github.com/zzzeek/mako) ([Doc](https://docs.makotemplates.org/en/latest/)), 接下來 cmsimde 的 template 修改, 或許可以採用.


</t>
<t tx="leo.20220705203649.1">@language md
---
Title: TCExam
Date: 2022-07-05 17:00
Category: Exam
Tags: TCExam
Slug: Will-TCExam-still-be-usable-after-nine-years
Author: mdecycu
---

上一次採用 TCExam, 是在 2013 年 11 月 1 日, 多年之後, 這套線上考試系統, 仍然可以使用嗎?

&lt;!-- PELICAN_END_SUMMARY --&gt;

@others</t>
<t tx="leo.20220705204121.1">Ubuntu 22.04
----

為了要將 TCExam 安裝在 Ubuntu 22.04, 首先必須要先處理 /etc/netplan/net.yaml 中的設定:

&lt;pre class="brush: jscript"&gt;
network:
  ethernets:
    enp0s3:
      dhcp6: false 
      dhcp4: false
      addresses:
        - 140.130.xx.xxx/24
        - 2001:288:6004:xx::xxx/64
      nameservers:
        addresses:
          - 168.95.1.1
          - 2001:b000:168::1
      routes:
        - to: default 
          via: 140.130.xx.254
        - to: ::/0      
          via: 2001:288:6004:xx::254
  version: 2
&lt;/pre&gt;

網路設定完成後, 隨即進行更新與升級:

&lt;pre class="brush: jscript"&gt;
sudo apt update
sudo apt upgrade
sudo apt autoremove
&lt;/pre&gt;

接下來希望以最小安裝放入桌面, 可以執行

sudo apt install --no-install-recommends ubuntu-desktop

但是因為[這個 bug](https://bugs.launchpad.net/ubuntu/+source/mutter/+bug/1980667) 尚未處理, 因此暫時先建立 /etc/apt/apt.conf.d/phased 應急. 之後應該要將這個檔案刪除, 採用官方除錯後的版本.

接下來要安裝 nginx, 並且讓 php 解譯環境可以與 nginx 合用. 最後則是安裝 Postgresql, 以及 TCExam.

Windows
----

假如要將 TCExam 安裝在 Windows 10, 則可以安裝 Nginx 1.20.1 and PHP 8.1.7.

讓 Nginx 可以與 PHP 合用則採下列設定, 表示要由 Nginx 接受外部 request PHP 程式執行, 實際上則使用 fastcgi 在近端 port 9123 執行遠端用戶所要求的 php 程式, 並將結果由 Nginx 代理傳回.

&lt;pre class="brush:jscript"&gt;
server { 
    listen    [::]:443 default ssl ipv6only=on;
    
    root C:/tcexam/tcexam;

    server_name    your.domain.name;
    ssl_certificate    C:/tcexam/fullchain.pem;
    ssl_certificate_key    C:/tcexam/privkey.pem;
    ssl_protocols    TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers    HIGH:!aNULL:!MD5;
    
    location /{ 
        index index.html index.php;
    }
    
    location ~ \.php$ {
        fastcgi_pass   127.0.0.1:9123;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
}
&lt;/pre&gt;

因此上述流程必須同時啟動 Nginx 與 php-cgi.exe 等兩則伺服器. Nginx 根據上述設定, 在 port 443 啟動, 而 php-cgi.exe 則由下列 nssm service 啟動.

nssm install php8.1.7

&lt;pre class="brush:jscript"&gt;
Application path: C:\PHP8.1.7\php-cgi.exe
Startup directory: C:\PHP8.1.7
Arguments: -b 127.0.0.1:9123
&lt;/pre&gt;

啟動 php-cgi:

C:\PHP8.1.7\php-cgi.exe -b 127.0.0.1:9123

PostgreSQL
----

可攜的 PostgreSQL 採用[這裡介紹](https://github.com/pgsql-tw/portable-pgsql) 的設定.

建立 postgres 用戶時, 以系統管理員執行 cmd:

net user username password /add

TCExam
----

由於 TCExam 的主核心程式在 2013 年之後只針對少數問題改版, 核心程式必須局部修改才能在最新的 PHP 架構中執行.

在 10ff::1 電腦中 TCExam 位於 C:\tmp\tcexam

&lt;https://www.php.net/manual/en/function.pg-query.php&gt;

shared/code/tce_functions_form.php

line 294 加入 ?? ''

    $str .= ' name="'.$field_name.'" id="'.$field_name.'" value="'.htmlspecialchars($value ?? '', ENT_COMPAT, $l['a_meta_charset']).'" size="20" maxlength="'.$maxlen.'" title="'.$description.'" /&gt;';

admin/code/tce_edit_user.php

line 373 也是加入 ?? ''

    $user_birthdate = substr($m['user_birthdate'] ?? '', 0, 10);

qrcode.php line 891 and 895 add intval()

    $ret = $this-&gt;rsblocks[$row]['data'][intval($col)];
    } elseif ($this-&gt;count &lt; $this-&gt;dataLength + $this-&gt;eccLength) {
    $row = ($this-&gt;count - $this-&gt;dataLength) % $this-&gt;blocks;
    $col = ($this-&gt;count - $this-&gt;dataLength) / $this-&gt;blocks;
    $ret = $this-&gt;rsblocks[$row]['ecc'][intval($col)];

以下的 error:

Fatal error: Uncaught TypeError: Session callback must have a return value of type bool, PgSql\Result returned in C:\tmp\tcexam\admin\code\tce_logout.php:38 Stack trace: #0 C:\tmp\tcexam\admin\code\tce_logout.php(38): session_destroy() #1 {main} thrown in C:\tmp\tcexam\admin\code\tce_logout.php on line 38

必須修改 function F_session_destroy($key), 令其傳回 bool.

至於 user 必須設 level 1, level 0 is anonymous.

SMTP send mail:

You need to edit the following configuration file with the right parameters:

shared/config/tce_email_config.php

You can also disable the email verification by editing:

shared/config/tce_user_registration.php

\tcexam\shared\code\tce_functions_session.php

fix the following error:

&lt;pre class="brush: jscript"&gt;
Fatal error: Uncaught TypeError: 
Session callback must have a return value of type bool, 
PgSql\Result returned in C:\tmp\tcexam\admin\code\tce_logout.php:38 Stack trace:
#0 C:\tmp\tcexam\admin\code\tce_logout.php(38): session_destroy() 
#1 {main} thrown in C:\tmp\tcexam\admin\code\tce_logout.php on line 38
&lt;/pre&gt;

starting \tcexam\shared\code\tce_functions_session.php line 141.

&lt;pre class="brush: jscript"&gt;
function F_session_destroy($key)
{
    global $db;
    $key = F_escape_sql($db, $key);
    $sql = 'DELETE FROM '.K_TABLE_SESSIONS.' WHERE cpsession_id=\''.$key.'\'';
    //return F_db_query($sql, $db);
    F_db_query($sql, $db);
    // for PHP 8.1 Yen
    return true;
}
&lt;/pre&gt;

configuration

\tcexam\shared\config

Letsencrypt

stop nginx

certbot certonly --standalone

TCExam

管理者帳號: admin, 原生安裝 default 密碼為: 1234

Modules 模組

Topics 主題

Questions 題目

Answers

因為 nginx 與 php 已經設為 services, 因此啟動 TCExam 時, 只需要透過 pgsql 中的 start.bat 啟動資料庫伺服器即可執行運作.

system32/gpedit.msc network -&gt; QOS packet

nginx 將  http 轉到 https

return 302 https://your.domain.name;

nginx只允許特定網址連線

allow 2001:288:6004:xx::0/32;

deny all;

Virtualbox
----

"C:\Program Files\Oracle\VirtualBox\VBoxManage.exe" internalcommands sethduuid tcexam_win10.vmdk</t>
<t tx="yen.20170108171605.1"></t>
<t tx="yen.20170108171605.2">QTreeWidget {
    /* These apply to the selected item, but not to editing items.*/
    background-color: #ffffec; /* Leo's traditional tree color */
    selection-color: black; /* was white */
    selection-background-color: lightgrey;
    /* font-family: SansSerif; */
    /*font-family: DejaVu Sans Mono;*/
    font-family:YaHei Mono;
    /* 標題字型大小設定 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
 }

/* Headline edit widgets */
QTreeWidget QLineEdit {
    background-color: cornsilk;
    selection-color: white;
    selection-background-color: blue;
    /*font-family: DejaVu Sans Mono;*/    
    font-family:YaHei Mono;
    /* 沒有特別對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The log panes */
QTextEdit {
    background-color: #f2fdff;
    selection-color: red;
    selection-background-color: blue;
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* log font 大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The body pane */
QTextEdit#richTextEdit {
    background-color: #fdf5f5; /* A kind of pink. */
    selection-color: white;
    selection-background-color: red;
    /*font-family: DejaVu Sans Mono;*/
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* 內文字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

QLabel {
    font-family:YaHei Mono;'CherryPy', 'pytz', 'mako', 'beautifulsoup4', 'pymysql', 'peewee'
    /* 下方的 Minibuffer 標題字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

/* Editor labels */
QLineEdit#editorLabel {
    background-color: #ffffec;
    font-family:YaHei Mono;
    /* 沒有直接對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
    border: 2px;
    margin: 2px;
}</t>
<t tx="yen.20170108171605.3">horizontal: body pane to the left
vertical: body pane on the botton</t>
<t tx="yen.20170108171733.1"></t>
<t tx="yen.20170108171733.2">@language python
import os

os.system("pelican markdown -o blog -s local_publishconf.py")
g.es("admin pelican 近端執行完畢")


</t>
<t tx="yen.20170108171733.5"></t>
<t tx="yen.20170108171733.71"></t>
<t tx="yen.20170108171733.81"></t>
<t tx="yen.20170108171733.83">sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.crt

</t>
<t tx="yen.20170108171930.1">@language python
import os
import subprocess
import threading
import http.server, ssl

def domake():
    # build directory
    os.chdir("./../")
    server_address = ('localhost', 5443)
    httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)
    httpd.socket = ssl.wrap_socket(httpd.socket,
                                   server_side=True,
                                   certfile='localhost.crt',
                                   keyfile='localhost.key',
                                   ssl_version=ssl.PROTOCOL_TLSv1)
    print(os.getcwd())
    print("5443 https server started")
    httpd.serve_forever()

# 利用執行緒執行 https 伺服器
make = threading.Thread(target=domake)
make.start()</t>
<t tx="yen.20170108171939.1">@language python
import os
import subprocess
import threading
import socket
import http.server, ssl

class HTTPServerV6(http.server.HTTPServer):
    address_family = socket.AF_INET6
  
def domake():
    # build directory
    os.chdir("./../")
    ipv6_address = '::1'
    server_address = (ipv6_address, 6443)
    #httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)
    httpd = HTTPServerV6(server_address, http.server.SimpleHTTPRequestHandler)
    httpd.socket = ssl.wrap_socket(httpd.socket,
                                   server_side=True,
                                   certfile='localhost.crt',
                                   keyfile='localhost.key',
                                   ssl_version=ssl.PROTOCOL_TLSv1)
    print("6443 https server started")
    httpd.serve_forever()

# 利用執行緒執行 https 伺服器
make = threading.Thread(target=domake)
make.start()</t>
<t tx="yen.20170224232341.1"></t>
</tnodes>
</leo_file>
