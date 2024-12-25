import{_ as e,c as o,a0 as t,o as r}from"./chunks/framework.Canm8p3M.js";const P=JSON.parse('{"title":"计算机网络","description":"","frontmatter":{},"headers":[],"relativePath":"src/questions/computer-base/3_计算机网络.md","filePath":"src/questions/computer-base/3_计算机网络.md","lastUpdated":1735092830000}'),d={name:"src/questions/computer-base/3_计算机网络.md"};function i(l,a,c,n,s,h){return r(),o("div",null,a[0]||(a[0]=[t('<h1 id="计算机网络" tabindex="-1">计算机网络 <a class="header-anchor" href="#计算机网络" aria-label="Permalink to &quot;计算机网络&quot;">​</a></h1><h2 id="网络协议是什么" tabindex="-1">网络协议是什么 <a class="header-anchor" href="#网络协议是什么" aria-label="Permalink to &quot;网络协议是什么&quot;">​</a></h2><h4 id="类型-基础" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-1-分" tabindex="-1">解答（1 分） <a class="header-anchor" href="#解答-1-分" aria-label="Permalink to &quot;解答（1 分）&quot;">​</a></h4><ul><li><strong>1：</strong> 在计算机网络要做到井井有条的交换数据，就必须遵守一些事先约定好的规则，比如交换数据的格式、是否需要发送一个应答信息。这些规则被称为网络协议。</li></ul><h2 id="什么是tcp-ip和udp" tabindex="-1">什么是TCP/IP和UDP <a class="header-anchor" href="#什么是tcp-ip和udp" aria-label="Permalink to &quot;什么是TCP/IP和UDP&quot;">​</a></h2><h4 id="类型-基础-1" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础-1" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-1" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-1" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-2-分" tabindex="-1">解答（2 分） <a class="header-anchor" href="#解答-2-分" aria-label="Permalink to &quot;解答（2 分）&quot;">​</a></h4><ul><li><strong>1：</strong> TCP/IP即传输控制/网络协议，是面向连接的协议，发送数据前要先建立连接(发送方和接收方的成对的两个之间必须建 立连接)，TCP提供可靠的服务，也就是说，通过TCP连接传输的数据不会丢失，没有重复，并且按顺序到达</li><li><strong>1：</strong> UDP它是属于TCP/IP协议族中的一种。是无连接的协议，发送数据前不需要建立连接，是没有可靠性的协议。因为不需要建立连接所以可以在在网络上以任何可能的路径传输，因此能否到达目的地，到达目的地的时间以及内容的正确性都是不能被保证的</li></ul><h2 id="tcp与udp区别是什么" tabindex="-1">TCP与UDP区别是什么 <a class="header-anchor" href="#tcp与udp区别是什么" aria-label="Permalink to &quot;TCP与UDP区别是什么&quot;">​</a></h2><h4 id="类型-编程" tabindex="-1">类型：<code>编程</code> <a class="header-anchor" href="#类型-编程" aria-label="Permalink to &quot;类型：`编程`&quot;">​</a></h4><h4 id="级别-w2、w3、w4、w5、w6" tabindex="-1">级别：<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w2、w3、w4、w5、w6" aria-label="Permalink to &quot;级别：`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-8-分" tabindex="-1">解答（8 分） <a class="header-anchor" href="#解答-8-分" aria-label="Permalink to &quot;解答（8 分）&quot;">​</a></h4><ul><li><strong>1：</strong> TCP是面向连接的协议，发送数据前要先建立连接，TCP提供可靠的服务，也就是说，通过TCP连接传输的数据不会丢失，没有重复，并且按顺序到达</li><li><strong>1：</strong> UDP是无连接的协议，发送数据前不需要建立连接，是没有可靠性；</li><li><strong>1：</strong> TCP通信类似于于要打个电话，接通了，确认身份后，才开始进行通行；</li><li><strong>1：</strong> UDP通信类似于学校广播，靠着广播播报直接进行通信。</li><li><strong>1：</strong> TCP只支持点对点通信，UDP支持一对一、一对多、多对一、多对多；</li><li><strong>1：</strong> TCP是面向字节流的，UDP是面向报文的； 面向字节流是指发送数据时以字节为单位，一个数据包可以拆分成若干组进行发送，而UDP一个报文只能一次发完。</li><li><strong>1：</strong> TCP首部开销（20字节）比UDP首部开销（8字节）要大</li><li><strong>1：</strong> UDP 的主机不需要维持复杂的连接状态表</li></ul>',16)]))}const w=e(d,[["render",i]]);export{P as __pageData,w as default};
