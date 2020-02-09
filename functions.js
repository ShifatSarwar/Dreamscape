	
	var textsofwisdom=["A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.","A faithful friend is a strong defense.", "A fresh start will put you on your way.", "Be on the alert to recognize your prime at whatever time of your life it may occur."];

    function change(){
        var random = Math.floor(Math.random() * (textsofwisdom.length));
        document.getElementById("boxofwisdom").innerHTML = textsofwisdom[random];
    }


	function changeColors(colorvalue) {
		document.getElementById("boxofwisdom").style.color=colorvalue;
		document.getElementById("boxofwisdom").style.borderColor=colorvalue;
		var newcolor="white";
		var fontvalue="verdana";
		var fontsizeval=13;
		if(colorvalue=="red") {
			fontvalue="ariel";
			newcolor="yellow";
		}else if(colorvalue=="green"){
			fontvalue="Impact,Charcoal,sans-serif";
			newcolor="#f7f6af";
		}else if(colorvalue=="blue") {
			fontsizeval=15;
			newcolor="orange";
		}else{
			newcolor="#ff1dce";
			fontsizeval:20;
		}
		document.getElementById("boxofwisdom").style.backgroundColor=newcolor;
		document.getElementById("boxofwisdom").style.fontFamily=fontvalue;
		document.getElementById("boxofwisdom").style.fontFamily=fontsizeval;

	}

	function convert(){
		var valueinput=document.getElementById("valueinput").value;
		var x = document.getElementById("choice");
        var i = x.selectedIndex;
        var option=x.options[i].text;
        if(option=="lb to kg") {
		    document.getElementById("outputbox").innerHTML = valueinput/ 2.205 +" Kilograms";
		} else{
			document.getElementById("outputbox").innerHTML=valueinput*2.205+ " Pounds";
		}
	}

	function funwithnumbers(){
		var nums=document.getElementById("numinput");
		nums=nums.value.split(",");
		var sumofnums=0;
		for(i=0; i<nums.length; i++){
			sumofnums+=parseInt(nums[i]);
		}
		var mean=sumofnums/nums.length;
		var maximum=Math.max.apply(Math,nums);
		var minimum=Math.min.apply(Math,nums);
		document.getElementById("maxout").innerHTML=maximum;
		document.getElementById("minout").innerHTML=minimum;
		document.getElementById("sumout").innerHTML=sumofnums;
		document.getElementById("avgout").innerHTML=mean;
		document.getElementById("reverseout").innerHTML=nums.reverse();
	}

	function clearall(){
		document.getElementById("maintext").value="";
	}

	function caseconvert(){
		var textdata=document.getElementById("maintext").value;
		if(textdata==textdata.toUpperCase()) {
			document.getElementById("maintext").value=textdata.toLowerCase();
		} else {
			document.getElementById("maintext").value=textdata.toUpperCase();
		}
	}

	function sorttext(){
		var textdata=document.getElementById("maintext").value.split("\n");
		textdata.sort();
		textdatanew="";
		for(i=0; i<textdata.length; i++) {
			if(textdata[i]!=""){
				textdatanew=textdatanew+textdata[i]+"\n";
			}
		}
		document.getElementById("maintext").value=textdatanew;
	}

	function reversetext() {
		var textdata=document.getElementById("maintext").value.split("\n");
		textdata.reverse();
		textdatanew="";

		for(i=0; i<textdata.length; i++) {
			if(textdata[i]!=""){
				textdatanew=textdatanew+textdata[i]+"\n";
			}
		}
		document.getElementById("maintext").value=textdatanew;
	}

	function stripblank() {
		var textdata=document.getElementById("maintext").value.split("\n");
		textdatanew="";
		for(i=0; i<textdata.length; i++) {
			if(textdata[i]!=""){
				textdatanew=textdatanew+(textdata[i].trim())+"\n";
			}
		}
		document.getElementById("maintext").value=textdatanew;
	}

	function addNumber() {
		var textdata=document.getElementById("maintext").value.split("\n");
		textdatanew="";
		for(i=0; i<textdata.length; i++) {
		    textdatanew=textdatanew+(i+1)+" "+textdata[i]+"\n";
		}
		document.getElementById("maintext").value=textdatanew;
	}

	function shuffle() {
		var textdata=document.getElementById("maintext").value.split("\n");
		textdatanew="";
		var j, x, i;
        for (i = textdata.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = textdata[i];
            textdata[i] = textdata[j];
            textdata[j] = x;
        }
        for(i=0; i<textdata.length; i++) {
			if(textdata[i]!=""){
				textdatanew=textdatanew+textdata[i]+"\n";
			}
		}
		document.getElementById("maintext").value=textdatanew;
	}