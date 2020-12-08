	var defaultWidth = "960px";
	var defaultHeight = "600px";
	window.onresize = function(){ resize(); }
	resize();
	
	//------------------------------
	function resize(){
		if(getOrientation()=="Landscape" && isMobileDevice()){
			modifyScreenDimensions();
			unityInstance.SetFullscreen(1);
		}else if(getOrientation()=="Portrait" && isMobileDevice()){
			unityInstance.SetFullscreen(0);
			document.getElementById("unityContainer").style.width = defaultWidth;
			document.getElementById("unityContainer").style.height = defaultHeight;
		}else{
		    document.getElementById("unityContainer").style.width = defaultWidth;
			document.getElementById("unityContainer").style.height = defaultHeight;
		}
	}
	
	function modifyScreenDimensions(){
		var mywidth = innerWidth;
		var myheight = innerHeight;

		//mywidth = (myheight*16)/9;
	
		document.getElementById("unityContainer").style.width = mywidth + "px";
		document.getElementById("unityContainer").style.height = myheight + "px";
	};
	
	function getOrientation(){
		var orientation = window.innerWidth > window.innerHeight ? "Landscape" : "Portrait";
		return orientation;
	};

	function isMobileDevice() {
		return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
	};