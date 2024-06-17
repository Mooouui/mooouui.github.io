import{_ as i,r as p,o as l,c as o,b as n,d as a,e,a as t}from"./app-C95d1NCF.js";const c={},u=n("h1",{id:"emby-aria2pro-infuse",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#emby-aria2pro-infuse"},[n("span",null,"emby + aria2pro + infuse")])],-1),r=n("h2",{id:"emby",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#emby"},[n("span",null,"emby")])],-1),d={href:"https://hub.docker.com/r/emby/embyserver",target:"_blank",rel:"noopener noreferrer"},m=t(`<h3 id="不同内核-仓库不同" tabindex="-1"><a class="header-anchor" href="#不同内核-仓库不同"><span>不同内核 仓库不同</span></a></h3><p>Emby supports the following architectures, each with its own dedicated repository.</p><ul><li>amd64: emby/embyserver</li><li>arm32v7: emby/embyserver_arm32v7</li><li>arm64v8: emby/embyserver_arm64v8</li></ul><h3 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose"><span>docker compose</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;2.3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">emby</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> emby/embyserver
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> embyserver
    <span class="token comment"># runtime: nvidia # Expose NVIDIA GPUs</span>
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> host <span class="token comment"># Enable DLNA and Wake-on-Lan</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> UID=1000 <span class="token comment"># The UID to run emby as (default: 2)</span>
      <span class="token punctuation">-</span> GID=100 <span class="token comment"># The GID to run emby as (default 2)</span>
      <span class="token punctuation">-</span> GIDLIST=100 <span class="token comment"># A comma-separated list of additional GIDs to run emby as (default: 2)</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /path/to/programdata<span class="token punctuation">:</span>/config <span class="token comment"># Configuration directory</span>
      <span class="token punctuation">-</span> /path/to/tvshows<span class="token punctuation">:</span>/mnt/share1 <span class="token comment"># Media directory</span>
      <span class="token punctuation">-</span> /path/to/movies<span class="token punctuation">:</span>/mnt/share2 <span class="token comment"># Media directory</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8096<span class="token punctuation">:</span><span class="token number">8096</span> <span class="token comment"># HTTP port</span>
      <span class="token punctuation">-</span> 8920<span class="token punctuation">:</span><span class="token number">8920</span> <span class="token comment"># HTTPS port</span>
    <span class="token key atrule">devices</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /dev/dri<span class="token punctuation">:</span>/dev/dri <span class="token comment"># VAAPI/NVDEC/NVENC render nodes</span>
      <span class="token comment"># - /dev/vchiq:/dev/vchiq # MMAL/OMX on Raspberry Pi</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> on<span class="token punctuation">-</span>failure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="aria2pro" tabindex="-1"><a class="header-anchor" href="#aria2pro"><span>aria2pro</span></a></h2>`,6),k={href:"https://hub.docker.com/r/p3terx/aria2-pro",target:"_blank",rel:"noopener noreferrer"},v=t(`<h3 id="bridge-网络模式" tabindex="-1"><a class="header-anchor" href="#bridge-网络模式"><span>bridge 网络模式</span></a></h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>ma­cOS 和 Win­dows 必须要使用 bridge 网络模式。</p></div><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.8&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">Aria2-Pro</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> aria2<span class="token punctuation">-</span>pro
    <span class="token key atrule">image</span><span class="token punctuation">:</span> p3terx/aria2<span class="token punctuation">-</span>pro
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=65534
      <span class="token punctuation">-</span> PGID=65534
      <span class="token punctuation">-</span> UMASK_SET=022
      <span class="token punctuation">-</span> RPC_SECRET=P3TERX
      <span class="token punctuation">-</span> RPC_PORT=6800
      <span class="token punctuation">-</span> LISTEN_PORT=6888
      <span class="token punctuation">-</span> DISK_CACHE=64M
      <span class="token punctuation">-</span> IPV6_MODE=false
      <span class="token punctuation">-</span> UPDATE_TRACKERS=true
      <span class="token punctuation">-</span> CUSTOM_TRACKER_URL=
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>PWD<span class="token punctuation">}</span>/aria2<span class="token punctuation">-</span>config<span class="token punctuation">:</span>/config
      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>PWD<span class="token punctuation">}</span>/aria2<span class="token punctuation">-</span>downloads<span class="token punctuation">:</span>/downloads
    <span class="token comment"># If you use host network mode, then no port mapping is required.</span>
    <span class="token comment"># This is the easiest way to use IPv6 networks.</span>
    <span class="token comment">#network_mode: host</span>
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 6800<span class="token punctuation">:</span><span class="token number">6800</span>
      <span class="token punctuation">-</span> 6888<span class="token punctuation">:</span><span class="token number">6888</span>
      <span class="token punctuation">-</span> 6888<span class="token punctuation">:</span>6888/udp
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    <span class="token comment"># Since Aria2 will continue to generate logs, limit the log size to 1M to prevent your hard disk from running out of space.</span>
    <span class="token key atrule">logging</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> json<span class="token punctuation">-</span>file
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
        <span class="token key atrule">max-size</span><span class="token punctuation">:</span> 1m

  <span class="token comment"># AriaNg is just a static web page, usually you only need to deploy on a single host.</span>
  <span class="token key atrule">AriaNg</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> ariang
    <span class="token key atrule">image</span><span class="token punctuation">:</span> p3terx/ariang
    <span class="token comment">#command: --port 6880 --ipv6</span>
    <span class="token comment">#network_mode: host</span>
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 6880<span class="token punctuation">:</span><span class="token number">6880</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    <span class="token key atrule">logging</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> json<span class="token punctuation">-</span>file
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
        <span class="token key atrule">max-size</span><span class="token punctuation">:</span> 1m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="infuse" tabindex="-1"><a class="header-anchor" href="#infuse"><span>infuse</span></a></h2><p>方便集成 emby plex 等，用于多端的视频推流，解码在线观看</p>`,5);function b(h,y){const s=p("ExternalLinkIcon");return l(),o("div",null,[u,r,n("p",null,[n("a",d,[a("docker"),e(s)])]),m,n("p",null,[n("a",k,[a("docker"),e(s)])]),v])}const _=i(c,[["render",b],["__file","emby_aria2_infuse.html.vue"]]),f=JSON.parse('{"path":"/techs/emby_aria2_infuse.html","title":"emby + aria2pro + infuse","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"emby","slug":"emby","link":"#emby","children":[{"level":3,"title":"不同内核 仓库不同","slug":"不同内核-仓库不同","link":"#不同内核-仓库不同","children":[]},{"level":3,"title":"docker compose","slug":"docker-compose","link":"#docker-compose","children":[]}]},{"level":2,"title":"aria2pro","slug":"aria2pro","link":"#aria2pro","children":[{"level":3,"title":"bridge 网络模式","slug":"bridge-网络模式","link":"#bridge-网络模式","children":[]}]},{"level":2,"title":"infuse","slug":"infuse","link":"#infuse","children":[]}],"git":{"updatedTime":1718611692000,"contributors":[{"name":"Moui","email":"alanjingzhixin@gmail.com","commits":1}]},"filePathRelative":"techs/emby_aria2_infuse.md"}');export{_ as comp,f as data};
