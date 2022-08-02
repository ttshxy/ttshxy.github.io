(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{415:function(t,a,s){"use strict";s.r(a);var _=s(45),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"get与post区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get与post区别"}},[t._v("#")]),t._v(" GET与POST区别")]),t._v(" "),s("ul",[s("li",[t._v("get参数通过url传递，post参数通过request body传递")]),t._v(" "),s("li",[t._v("get请求在url中传递的参数有长度限制（一般不超过2kb），而post没有")]),t._v(" "),s("li",[t._v("get没有post安全")]),t._v(" "),s("li",[s("strong",[t._v("GET产生一个TCP数据包；POST产生两个数据包")])]),t._v(" "),s("li",[t._v("get只能进行url编码（application/x-www-form-urlencoded），post为"),s("code",[t._v("application/x-www-form-urlencoded")]),t._v(" 或 "),s("code",[t._v("multipart/form-data")]),t._v("。为二进制数据使用多重编码。")]),t._v(" "),s("li",[t._v("GET在浏览器回退时是无害的，而POST会再次提交请求。")])]),t._v(" "),s("p",[t._v("对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200")]),t._v(" "),s("p",[t._v("而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok")]),t._v(" "),s("p",[t._v("在网络环境好的情况下，发一次包的时间和发两次包的时间差别基本可以忽略，在网络环境差的情况下，两次包的TCP在验证数据包完整性上更有优势；反观get将参数直接暴露在URL上，非常不安全，因此不能用它来传递敏感信息。")]),t._v(" "),s("h2",{attrs:{id:"http是tcp还是udp-是哪一层协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http是tcp还是udp-是哪一层协议"}},[t._v("#")]),t._v(" http是tcp还是udp?是哪一层协议")]),t._v(" "),s("p",[t._v("HTTP是TCP协议，TCP/UDP是传输层，HTTP是应用层")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/v2-bccb3abb09ecd626c771c9474f8cd763_720w.jpg",alt:"img"}})]),t._v(" "),s("p",[t._v("TCP三次握手和四次挥手？被问烂了的问题了，这里不详细讲了，\n三次握手：\n客户端–发送带有SYN标志的数据包–一次握手–\n服务端服务端–发送带有SYN/ACK标志的数据包–\n二次握手–客户端客户端–发送带有带有ACK标志的数据包–三次握手")]),t._v(" "),s("p",[t._v("服务端四次挥手：\n客户端-发送一个FIN，用来关闭客户端到服务器的数据传送服务器-收到这个FIN，它发回一个ACK，确认序号为收到的序号加1 。和SYN一样，一个FIN将占用一个序号服务器-关闭与客户端的连接，发送一个FIN给客户端客户端-发回ACK报文确认，并将确认序号设置为收到序号加1还不懂的童鞋，去找别人的文章好好看看！")]),t._v(" "),s("h2",{attrs:{id:"http与https的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http与https的区别"}},[t._v("#")]),t._v(" HTTP与HTTPS的区别")]),t._v(" "),s("h2",{attrs:{id:"http状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http状态码"}},[t._v("#")]),t._v(" HTTP状态码")]),t._v(" "),s("h3",{attrs:{id:"_2xx-成功"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2xx-成功"}},[t._v("#")]),t._v(" 2XX 成功")]),t._v(" "),s("p",[t._v("200 OK，表示从客户端发来的请求在服务器端被正确处理204 No content，表示请求成功，但响应报文不含实体的主体部分206 Partial Content，进行范围请求")]),t._v(" "),s("h3",{attrs:{id:"_3xx-重定向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3xx-重定向"}},[t._v("#")]),t._v(" 3XX 重定向")]),t._v(" "),s("p",[t._v("301 moved permanently，永久性重定向，表示资源已被分配了新的 URL")]),t._v(" "),s("p",[t._v("302 found，临时性重定向，表示资源临时被分配了新的 URL")]),t._v(" "),s("p",[t._v("303 see other，表示资源存在着另一个 URL，应使用 GET 方法定向获取资源")]),t._v(" "),s("p",[t._v("304 not modified，表示服务器允许访问资源，但因发生请求未满足条件的情况")]),t._v(" "),s("p",[t._v("307 temporary redirect，临时重定向，和302含义相同")]),t._v(" "),s("h3",{attrs:{id:"_4xx-客户端错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4xx-客户端错误"}},[t._v("#")]),t._v(" 4XX 客户端错误")]),t._v(" "),s("p",[t._v("400 bad request，请求报文存在语法错误")]),t._v(" "),s("p",[t._v("401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息")]),t._v(" "),s("p",[t._v("403 forbidden，表示对请求资源的访问被服务器拒绝")]),t._v(" "),s("p",[t._v("404 not found，表示在服务器上没有找到请求的资源")]),t._v(" "),s("h3",{attrs:{id:"_5xx-服务器错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5xx-服务器错误"}},[t._v("#")]),t._v(" 5XX 服务器错误")]),t._v(" "),s("p",[t._v("500 internal sever error，表示服务器端在执行请求时发生了错误")]),t._v(" "),s("p",[t._v("503 service unavailable，表明服务器暂时处于超负载或正在停机维护，无法处理请求")]),t._v(" "),s("h2",{attrs:{id:"http与https的区别-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http与https的区别-2"}},[t._v("#")]),t._v(" HTTP与HTTPS的区别")]),t._v(" "),s("ul",[s("li",[t._v("HTTPS是HTTP协议的安全版本，HTTP协议的数据传输是明文的，是不安全的，HTTPS使用了SSL/TLS协议进行了加密处理，相对更安全")]),t._v(" "),s("li",[t._v("HTTP 和 HTTPS 使用连接方式不同，默认端口也不一样，HTTP是80，HTTPS是443")]),t._v(" "),s("li",[t._v("HTTPS 由于需要设计加密以及多次握手，性能方面不如 HTTP")]),t._v(" "),s("li",[t._v("HTTPS需要SSL，SSL 证书需要钱，功能越强大的证书费用越高")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/0e409fc0-b20c-11eb-85f6-6fac77c0c9b3.png",alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"http1-0-1-1-2-0之间的区别和特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http1-0-1-1-2-0之间的区别和特性"}},[t._v("#")]),t._v(" HTTP1.0,1.1,2.0之间的区别和特性")]),t._v(" "),s("h2",{attrs:{id:"cookie与session的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie与session的区别"}},[t._v("#")]),t._v(" Cookie与Session的区别")])])}),[],!1,null,null,null);a.default=e.exports}}]);