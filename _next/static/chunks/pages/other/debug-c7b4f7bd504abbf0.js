(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[766],{5944:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/other/debug",function(){return s(2735)}])},2735:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return a}});var l=s(5893),i=s(2673),r=s(2643);let a=[{depth:2,value:"Using the Sample App",id:"using-the-sample-app"},{depth:2,value:"HTTP Playback Doesn't Work or Black Screen on Release Build (Android)",id:"http-playback-doesnt-work-or-black-screen-on-release-build-android"},{depth:2,value:"Decoder Issue (Android)",id:"decoder-issue-android"},{depth:2,value:"Unable to Play Clear Content (All OS)",id:"unable-to-play-clear-content-all-os"},{depth:3,value:"Check Remote File Access",id:"check-remote-file-access"},{depth:3,value:"Check If Another Player Can Play the Content",id:"check-if-another-player-can-play-the-content"},{depth:2,value:"Unable to Play Protected Content (All OS)",id:"unable-to-play-protected-content-all-os"},{depth:3,value:"Protected Content Gives an Error (Token Error / Access Forbidden)",id:"protected-content-gives-an-error-token-error--access-forbidden"},{depth:2,value:"Debugging Network Calls Not Visible in React Native Debugging Tools",id:"debugging-network-calls-not-visible-in-react-native-debugging-tools"},{depth:2,value:"Debugging Media3: Build from Media3 Source",id:"debugging-media3-build-from-media3-source"},{depth:3,value:"Configure Player Path",id:"configure-player-path"},{depth:3,value:"Enable Building from Source",id:"enable-building-from-source"},{depth:2,value:"Still Not Working?",id:"still-not-working"}];function t(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",pre:"pre",span:"span",a:"a",strong:"strong",h3:"h3"},(0,r.a)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{children:"Debugging"}),"\n",(0,l.jsx)(n.p,{children:"This page provides useful tips for debugging and troubleshooting issues in the package or your application."}),"\n",(0,l.jsx)(n.h2,{id:"using-the-sample-app",children:"Using the Sample App"}),"\n",(0,l.jsxs)(n.p,{children:["This repository contains multiple sample implementations in the ",(0,l.jsx)(n.code,{children:"example"})," folder. It is always preferable to test behavior in a sample app rather than in a full application. The basic sample allows testing of many features."]}),"\n",(0,l.jsx)(n.p,{children:"To use the sample app, follow these steps:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Clone this repository:\n",(0,l.jsx)(n.pre,{"data-language":"shell","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"shell","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"git"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"clone"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"git@github.com:TheWidlarzGroup/react-native-video.git"})]})})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Navigate to the root folder and build the package. This generates a transpiled version in the ",(0,l.jsx)(n.code,{children:"lib"})," folder:\n",(0,l.jsx)(n.pre,{"data-language":"shell","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"shell","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"react-native-video"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"&&"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"yarn"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"&&"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"yarn"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"build"})]})})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Navigate to the sample app and install dependencies:\n",(0,l.jsx)(n.pre,{"data-language":"shell","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"shell","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"example/basic"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"&&"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"yarn"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"install"})]})})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Build and run the app:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["For Android:\n",(0,l.jsx)(n.pre,{"data-language":"shell","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"shell","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"yarn"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"android"})]})})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["For iOS:\n",(0,l.jsx)(n.pre,{"data-language":"shell","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"shell","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"ios"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"&&"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"pod"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"&&"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:".."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"&&"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"yarn"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"ios"})]})})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"http-playback-doesnt-work-or-black-screen-on-release-build-android",children:"HTTP Playback Doesn't Work or Black Screen on Release Build (Android)"}),"\n",(0,l.jsxs)(n.p,{children:["If your video works in Debug mode but shows only a black screen in Release mode, check the URL of your video. If you are using the ",(0,l.jsx)(n.code,{children:"http"})," protocol, you need to add the following line to your ",(0,l.jsx)(n.code,{children:"AndroidManifest.xml"})," file. ",(0,l.jsx)(n.a,{href:"https://developer.android.com/guide/topics/manifest/application-element#usesCleartextTraffic",children:"More details here"}),":"]}),"\n",(0,l.jsx)(n.pre,{"data-language":"xml","data-theme":"default",children:(0,l.jsxs)(n.code,{"data-language":"xml","data-theme":"default",children:[(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"application"})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ..."})}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"android"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"usesCleartextTraffic"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"true"'})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})})]})}),"\n",(0,l.jsx)(n.h2,{id:"decoder-issue-android",children:"Decoder Issue (Android)"}),"\n",(0,l.jsxs)(n.p,{children:["Some devices have a maximum number of simultaneous video playbacks. If this limit is reached, ExoPlayer returns an error: ",(0,l.jsx)(n.code,{children:"Unable to instantiate decoder"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Known issue:"})," This happens frequently in Debug mode."]}),"\n",(0,l.jsx)(n.h2,{id:"unable-to-play-clear-content-all-os",children:"Unable to Play Clear Content (All OS)"}),"\n",(0,l.jsx)(n.p,{children:"Before opening a ticket, follow these steps:"}),"\n",(0,l.jsx)(n.h3,{id:"check-remote-file-access",children:"Check Remote File Access"}),"\n",(0,l.jsx)(n.p,{children:"Ensure you can download the manifest/content file using a browser."}),"\n",(0,l.jsx)(n.h3,{id:"check-if-another-player-can-play-the-content",children:"Check If Another Player Can Play the Content"}),"\n",(0,l.jsxs)(n.p,{children:["Clear playback should work with any video player. Test the content with another player, such as ",(0,l.jsx)(n.a,{href:"https://www.videolan.org/vlc/",children:"VLC"}),", to confirm it plays without issues."]}),"\n",(0,l.jsx)(n.h2,{id:"unable-to-play-protected-content-all-os",children:"Unable to Play Protected Content (All OS)"}),"\n",(0,l.jsx)(n.h3,{id:"protected-content-gives-an-error-token-error--access-forbidden",children:"Protected Content Gives an Error (Token Error / Access Forbidden)"}),"\n",(0,l.jsxs)(n.p,{children:["If the content requires an access token or HTTP headers, ensure you can access the data using ",(0,l.jsx)(n.code,{children:"wget"})," or a REST client. Provide all necessary authentication parameters."]}),"\n",(0,l.jsx)(n.h2,{id:"debugging-network-calls-not-visible-in-react-native-debugging-tools",children:"Debugging Network Calls Not Visible in React Native Debugging Tools"}),"\n",(0,l.jsx)(n.p,{children:"This is a React Native limitation—React Native debugging tools only capture network calls made in JavaScript."}),"\n",(0,l.jsx)(n.p,{children:"To debug network calls, use tools like:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.charlesproxy.com/",children:"Charles Proxy"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.telerik.com/fiddler",children:"Fiddler"})}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"These tools allow you to sniff all HTTP/HTTPS calls, including access to content, DRM, and audio/video chunks. Compare the request/response patterns with previous tests to diagnose issues."}),"\n",(0,l.jsx)(n.h2,{id:"debugging-media3-build-from-media3-source",children:"Debugging Media3: Build from Media3 Source"}),"\n",(0,l.jsx)(n.p,{children:"If you need to use a specific ExoPlayer version or modify default behavior, you may need to build from the Media3 source code."}),"\n",(0,l.jsx)(n.h3,{id:"configure-player-path",children:"Configure Player Path"}),"\n",(0,l.jsxs)(n.p,{children:["Add the following lines to ",(0,l.jsx)(n.code,{children:"settings.gradle"})," to configure your Media3 source path:"]}),"\n",(0,l.jsx)(n.pre,{"data-language":"gradle","data-theme":"default",children:(0,l.jsxs)(n.code,{"data-language":"gradle","data-theme":"default",children:[(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"gradle.ext.androidxMediaModulePrefix = 'media-'"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'apply from: file("../../../../media3/core_settings.gradle")'})})]})}),"\n",(0,l.jsx)(n.p,{children:"Replace this with the actual Media3 source path. Ensure that you use the same version (or a compatible API version) supported by the package."}),"\n",(0,l.jsx)(n.h3,{id:"enable-building-from-source",children:"Enable Building from Source"}),"\n",(0,l.jsxs)(n.p,{children:["In your ",(0,l.jsx)(n.code,{children:"build.gradle"})," file, add the following setting:"]}),"\n",(0,l.jsx)(n.pre,{"data-language":"gradle","data-theme":"default",children:(0,l.jsxs)(n.code,{"data-language":"gradle","data-theme":"default",children:[(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"buildscript {"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    ext {"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        ..."})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        buildFromMedia3Source = true"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        ..."})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,l.jsx)(n.h2,{id:"still-not-working",children:"Still Not Working?"}),"\n",(0,l.jsxs)(n.p,{children:["You can open a ticket or contact us for ",(0,l.jsx)(n.a,{href:"https://www.thewidlarzgroup.com/?utm_source=rnv&utm_medium=docs#Contact",children:"premium support"}),"."]})]})}n.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.a)(),e.components);return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)},pageOpts:{filePath:"pages/other/debug.md",route:"/other/debug",timestamp:1742378261e3,title:"Debugging",headings:a},pageNextRoute:"/other/debug"})}},function(e){e.O(0,[673,888,774,179],function(){return e(e.s=5944)}),_N_E=e.O()}]);