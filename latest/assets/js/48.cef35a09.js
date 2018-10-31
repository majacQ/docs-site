(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{201:function(e,t,s){"use strict";s.r(t);var r=s(0),a=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("You install the Zowe Application Framework, explorer server, and API Mediation Layer on z/OS.")]),e._v(" "),s("p",[e._v("Before you install the runtime on z/OS, ensure that your environment meets the requirements. See "),s("router-link",{attrs:{to:"./systemrequirements.html"}},[e._v("System requirements")]),e._v(".")],1),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("To install API Mediation Layer, the Zowe Application Framework, and explorer server, you install the Zowe runtime on z/OS.")]),e._v(" "),e._m(2),e._v(" "),s("ol",[e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),s("li",[s("p",[e._v("Add the users to the required groups, IZUADMIN for administrators and IZUUSER for standard users.")]),e._v(" "),e._m(7),e._v(" "),s("p",[e._v("When the "),s("code",[e._v("zowe-install.sh")]),e._v(" script runs, it performs a number of steps broken down into sections. These are covered more in the section "),s("router-link",{attrs:{to:"./troubleshootinstall.html"}},[e._v("Troubleshooting the installation")]),e._v(".")],1)])]),e._v(" "),e._m(8),e._v(" "),s("p",[e._v("Zowe has three runtime components on z/OS, the explorer server, the Zowe Application Server, and API Mediation Layer. When you run the ZOWESVR PROC, it starts all these components. The Zowe Application Server startup script also starts the zSS server, so starting the ZOWESVR PROC starts all the four servers, and stopping it stops all four.")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._m(12),e._v(" "),e._m(13),e._v(" "),s("p",[e._v("If you prefer to use SDSF to start Zowe, start ZOWESVR by issuing the following operator command in SDSF:")]),e._v(" "),e._m(14),s("p",[e._v("By default, Zowe uses the runtime version that you most recently installed. To start a different runtime, specify its server path on the START command:")]),e._v(" "),e._m(15),e._m(16),e._v(" "),s("p",[e._v("The port number 7443 is the default port and can be overridden through the "),s("code",[e._v("zowe-install.yaml")]),e._v(" file before the "),s("code",[e._v("zowe-install.sh")]),e._v(" script is run. See "),s("router-link",{attrs:{to:"./install-zos.html"}},[e._v("Installing Zowe runtime on z/OS")]),e._v(".")],1),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),s("p",[e._v("If you prefer to use SDSF to stop Zowe, stop ZOWESVR by issuing the following operator command in SDSF:")]),e._v(" "),e._m(20),s("p",[e._v("Either of the methods will stop the explorer server, the Zowe Application Server, and the zSS server.")]),e._v(" "),s("p",[e._v("When you stop the ZOWESVR, you might get the following error message:")]),e._v(" "),e._m(21),s("p",[e._v("This is because there is more than one started task named ZOWESVR. To resolve the issue, stop the required ZOWESVR instance by issuing the following commands:")]),e._v(" "),e._m(22),e._m(23),e._v(" "),e._m(24),e._m(25),e._v(" "),s("p",[e._v("After you complete the installation of API Mediation, Zowe Application Framework, and explorer server, use the following procedures to verify that the components are installed correctly and are functional.")]),e._v(" "),e._m(26),e._v(" "),s("p",[e._v("If the Zowe Application Framework is installed correctly, you can open the Zowe Desktop from a supported browser.")]),e._v(" "),e._m(27),e._v(" "),s("p",[e._v("where:")]),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),s("p",[e._v("After explorer server is installed and the ZOWESVR procedure is started, you can verify the installation from an Internet browser by using the following case-sensitive URL:")]),e._v(" "),e._m(30),e._v(" "),e._m(31),e._v(" "),s("p",[e._v("This URL sends an HTTP GET request to the Liberty Profile explorer server. If explorer server is installed correctly, a JSON payload that indicates the current explorer server application version is returned. For example:")]),e._v(" "),e._m(32),e._m(33),e._v(" "),s("p",[e._v("After you verify that explorer server is successfully installed, you can access the UI at the following URLs:")]),e._v(" "),e._m(34),e._v(" "),s("p",[e._v("If explorer server is not installed successfully, see "),s("router-link",{attrs:{to:"./troubleshootinstall.html"}},[e._v("Troubleshooting installation")]),e._v(" for solutions.")],1),e._v(" "),e._m(35),e._v(" "),s("p",[e._v("To verify the availability of all explorer server REST APIs, use the Liberty Profile's REST API discovery feature from an internet browser with the following URL. This URL is case-sensitive.")]),e._v(" "),e._m(36),e._v(" "),s("p",[e._v("With the discovery feature, you can also try each discovered API. The users who verify the availability must have access to their data sets and job information by using relevant explorer server APIs. This ensures that your z/OSMF configuration is valid, complete, and compatible with the explorer server application. For example, try the following APIs:")]),e._v(" "),s("p",[e._v("Explorer server: JES Jobs APIs")]),e._v(" "),e._m(37),e._v(" "),s("p",[e._v("This API returns job information for the calling user.")]),e._v(" "),s("p",[e._v("Explorer server: Data set APIs")]),e._v(" "),e._m(38),e._v(" "),s("p",[e._v("This API returns a list of the userid.** MVS data sets.")]),e._v(" "),e._m(39),e._v(" "),s("p",[e._v("Use your preferred REST API client to review the value of the status variable of the API Catalog service that is routed through the API Gateway using the following URL:")]),e._v(" "),e._m(40),e._m(41),e._v(" "),e._m(42),e._v(" "),e._m(43),e._v(" "),e._m(44),e._m(45)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"installing-the-zowe-application-framework-explorer-server-and-api-mediation-layer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-zowe-application-framework-explorer-server-and-api-mediation-layer","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing the Zowe Application Framework, explorer server, and API Mediation Layer")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installing-the-zowe-runtime-on-z-os"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-zowe-runtime-on-z-os","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing the Zowe runtime on z/OS")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Follow these steps:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Navigate to the directory where the installation archive is extracted. Locate the "),t("code",[this._v("/install")]),this._v(" directory.")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("     /install\n        /zowe-install.sh\n        /zowe-install.yaml\n")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("p",[e._v("Review the "),s("code",[e._v("zowe-install.yaml")]),e._v(" file which contains the following properties:")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("install:rootDir")]),e._v(" is the directory that Zowe will be installed into to create a Zowe runtime. The default directory is "),s("code",[e._v("~/zowe/0.9.2")]),e._v(". The user's home directory is the default value to ensure that the installing user has permission to create the directories that are required for the install. If the Zowe runtime will be maintained by multiple users it might be more appropriate to use another directory, such as "),s("code",[e._v("/var/zowe/v.r.m")]),e._v(".")]),e._v(" "),s("p",[e._v("You can run the installation process multiple times with different values in the "),s("code",[e._v("zowe-install.yaml")]),e._v(" file to create separate installations of the Zowe runtime. The directory that Zowe is installed into must be empty. The install script exits if the directory is not empty and creates the directory if it does not exist.")])]),e._v(" "),s("li",[s("p",[e._v("API Mediation Layer has three ports - two HTTP ports and one HTTPS port, each for a micro-service.")])]),e._v(" "),s("li",[s("p",[e._v("Explorer-server has two ports - one for HTTP and one for HTTPS. The liberty server is used for the explorer-ui components.")])]),e._v(" "),s("li",[s("p",[e._v("zlux-server has three ports - the HTTP and HTTPS ports that are used by the Zowe Application Server, and the port that is used by the ZSS Server.")]),e._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[e._v("install")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n rootDir=/var/zowe/0.9.2\n\n"),s("span",{attrs:{class:"token key atrule"}},[e._v("api-mediation")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  catalogHttpPort=7552\n  discoveryHttpPort=7553\n  gatewayHttpsPort=7554\n\n"),s("span",{attrs:{class:"token key atrule"}},[e._v("explorer-server")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  httpPort=7080\n  httpsPort=7443\n\n"),s("span",{attrs:{class:"token comment"}},[e._v("# http and https ports for the node server")]),e._v("\n"),s("span",{attrs:{class:"token key atrule"}},[e._v("zlux-server")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  httpPort=8543\n  httpsPort=8544\n  zssPort=8542\n")])])])])]),e._v(" "),s("p",[e._v("If all of the default port values are acceptable, then you do not need to change them. The ports must not be in use for the Zowe runtime servers to be able to allocate them.")]),e._v(" "),s("p",[e._v("To determine which ports are not available, follow these steps:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("To display a list of ports that are in use, issue the following command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("TSO NETSTAT\n")])])])]),e._v(" "),s("li",[s("p",[e._v("To display a list of reserved ports, issue the following command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("TSO NETSTAT PORTLIST\n")])])])])]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("zowe-install.yaml")]),e._v(" also contains the telnet and SSH port with defaults of 23 and 22.  If your z/OS LPAR is using different ports, edit the values. This is to allow the TN3270 terminal desktop application to connect as well as the VT terminal desktop application.  Unlike the ports needed by the Zowe runtime for its Zowe Application Framework and explorer server which must be unused, the terminal ports are expected to be in use.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# Ports for the TN3270 and the VT terminal to connect to\nterminals:\n    sshPort=22\n    telnetPort=23\n")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("p",[e._v("Execute the "),s("code",[e._v("zowe-install.sh")]),e._v(" script.")]),e._v(" "),s("p",[e._v("With the current directory being the "),s("code",[e._v("/install")]),e._v(" directory, execute the script "),s("code",[e._v("zowe-install.sh")]),e._v(" by issuing the following command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("zowe-install.sh\n")])])]),s("p",[e._v("You might receive the following error that the file cannot be executed.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("zowe-install.sh: cannot execute\n")])])]),s("p",[e._v("The error is due to that the install script does not have execute permission. To add execute permission, issue the following command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("chmod u+x zowe-install.sh.\n")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("p",[e._v("Configure Zowe as a started task.")]),e._v(" "),s("p",[e._v("The ZOWESVR must be configured as a started task (STC) under the IZUSVR user ID.")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("If you use RACF, issue the following commands:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("RDEFINE STARTED ZOWESVR.* UACC(NONE) STDATA(USER(IZUSVR) GROUP(IZUADMIN) PRIVILEGED(NO) TRUSTED(NO) TRACE(YES))  \nSETROPTS REFRESH RACLIST(STARTED)\n")])])])]),e._v(" "),s("li",[s("p",[e._v("If you use CA ACF2, issue the following commands:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("SET CONTROL(GSO)\nINSERT STC.ZOWESVR LOGONID(IZUSVR) GROUP(IZUADMIN) STCID(ZOWESVR)\nF ACF2,REFRESH(STC)\n")])])])]),e._v(" "),s("li",[s("p",[e._v("If you use CA Top Secret, issue the following commands:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("TSS ADDTO(STC) PROCNAME(ZOWESVR) ACID(IZUSVR)\n")])])])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("p",[e._v("If you use RACF, issue the following command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("CONNECT (userid) GROUP(IZUADMIN)\n")])])])]),e._v(" "),s("li",[s("p",[e._v("If you use CA ACF2, issue the following commands:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ACFNRULE TYPE(TGR) KEY(IZUADMIN) ADD(UID(<uid string of user>) ALLOW)\nF ACF2,REBUILD(TGR)\n")])])])]),e._v(" "),s("li",[s("p",[e._v("If you use CA Top Secret, issue the following commands:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("TSS ADD(userid)  PROFILE(IZUADMIN)\nTSS ADD(userid)  GROUP(IZUADMGP)\n")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"starting-and-stopping-the-zowe-runtime-on-z-os"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#starting-and-stopping-the-zowe-runtime-on-z-os","aria-hidden":"true"}},[this._v("#")]),this._v(" Starting and stopping the Zowe runtime on z/OS")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"starting-the-zowesvr-proc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#starting-the-zowesvr-proc","aria-hidden":"true"}},[this._v("#")]),this._v(" Starting the ZOWESVR PROC")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To start the ZOWESVR PROC, run the "),t("code",[this._v("zowe-start.sh")]),this._v(" script at the Unix Systems Services command prompt:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("cd $ZOWE_ROOT_DIR/scripts\n./zowe-start.sh\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("where "),t("em",[this._v("$ZOWE_ROOT_DIR")]),this._v(" is the directory where you installed the Zowe runtime. This script starts the ZOWESVR PROC for you so you don't have to log on to TSO and use SDSF.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Note:")]),this._v(" The default startup allows self signed and expired certificates from the Zowe Application Framework proxy data services such as the explorer server.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("/S ZOWESVR\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("/S ZOWESVR,SRVRPATH='$ZOWE_ROOT_DIR/explorer-server'\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To test whether the explorer server is active, open the URL "),t("code",[this._v("https://<hostname>:7443/explorer-mvs")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"stopping-the-zowesvr-proc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stopping-the-zowesvr-proc","aria-hidden":"true"}},[this._v("#")]),this._v(" Stopping the ZOWESVR PROC")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To stop the ZOWESVR PROC, run the "),t("code",[this._v("zowe-stop.sh")]),this._v(" script at the Unix Systems Services command prompt:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("cd $ZOWE_ROOT_DIR/scripts\n./zowe-stop.sh\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("/C ZOWESVR\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IEE842I ZOWESVR DUPLICATE NAME FOUND- REENTER COMMAND WITH 'A='\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("/C ZOWESVR,A=asid\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can obtain the "),t("em",[this._v("asid")]),this._v(" from the value of "),t("code",[this._v("A=asid")]),this._v(" when you issue the following commands:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("/D A,ZOWESVR\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"verifying-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#verifying-installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Verifying installation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"verifying-zowe-application-framework-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#verifying-zowe-application-framework-installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Verifying Zowe Application Framework installation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("From a supported browser, open the Zowe Desktop at "),t("code",[this._v("https://myhost:httpsPort/ZLUX/plugins/com.rs.mvd/web/index.html")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("em",[e._v("myHost")]),e._v(" is the host on which you installed the Zowe Application Server.")]),e._v(" "),s("li",[s("em",[e._v("httpPort")]),e._v(" is the port number that is assigned to "),s("em",[e._v("node.http.port")]),e._v(" in "),s("code",[e._v("zluxserver.json")]),e._v(".")]),e._v(" "),s("li",[s("em",[e._v("httpsPort")]),e._v(" is the port number that is assigned to "),s("em",[e._v("node.https.port")]),e._v(" in "),s("code",[e._v("zluxserver.json")]),e._v(".\nFor example, if the Zowe Application Server runs on host "),s("em",[e._v("myhost")]),e._v(" and the port number that is assigned to "),s("em",[e._v("node.http.port")]),e._v(" is 12345, you specify "),s("code",[e._v("https://myhost:12345/ZLUX/plugins/com.rs.mvd/web/index.htm")]),e._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"verifying-explorer-server-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#verifying-explorer-server-installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Verifying explorer server installation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("https://<your.server>:<atlasport>/api/v1/system/version")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("where "),s("em",[e._v("your.server")]),e._v(" is the host name or IP address of the z/OS® system where explorer server is installed, and "),s("em",[e._v("atlasport")]),e._v(" is the port number that is chosen during installation. You can verify the port number in the "),s("code",[e._v("server.xml")]),e._v(" file that is located in the explorer server installation directory, which is "),s("code",[e._v("/var/zowe/explorer-server/wlp/usr/servers/Atlas/server.xml")]),e._v(" by default. Look for the "),s("code",[e._v("httpsPort")]),e._v(" assignment in the "),s("code",[e._v("server.xml")]),e._v(' file, for example: httpPort="7443".')])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{ "version": "V0.0.1" }\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Note:")]),this._v(" The first time that you interact with the explorer server, you are prompted to enter an MVS™ user ID and password. The MVS user ID and password are passed over the secure HTTPS connection to establish authentication.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("https://<your.server>:<atlasport>/ui/v1/jobs/#/")])]),this._v(" "),t("li",[t("code",[this._v("https://<your.server>:<atlasport>/ui/v1/datasets/#/")])]),this._v(" "),t("li",[t("code",[this._v("https://<your.server>:<atlasport>/ui/v1/uss/#/")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"verifying-the-availability-of-explorer-server-rest-apis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#verifying-the-availability-of-explorer-server-rest-apis","aria-hidden":"true"}},[this._v("#")]),this._v(" Verifying the availability of explorer server REST APIs")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("https://<your.server>:<atlasport>/ibm/api/explorer")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("GET /api/v1/jobs")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("GET /api/v1/datasets/userid.**")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"verifying-api-mediation-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#verifying-api-mediation-installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Verifying API Mediation installation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("https://hostName:basePort/api/v1/apicatalog/application/state\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("hostName")]),this._v(" is set during install, and "),t("code",[this._v("basePort")]),this._v(" is set as the "),t("code",[this._v("gatewayHttpsPort")]),this._v(" parameter.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Example:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The following example illustrates how to use the "),t("strong",[this._v("curl")]),this._v(" utility to invoke API Mediation Layer endpoint and the "),t("strong",[this._v("grep")]),this._v(" utility to parse out the response status variable value")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('$ curl -v -k --silent https://hostName:basePort/api/v1/apicatalog/application/state 2>&1 | grep -Po \'(?<=\\"status\\"\\:\\")[^\\"]+\'\nUP\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The response "),t("code",[this._v("UP")]),this._v(" confirms that API Mediation Layer is installed and is running properly.")])}],!1,null,null,null);a.options.__file="install-zos.md";t.default=a.exports}}]);