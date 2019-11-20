var a1=document.getElementById('a1');
var c1=a1.getElementsByClassName('c1');
var ul1=a1.getElementsByClassName('ul1');
	for (var i=0;i<ul1.length;i++){
	ul1[i].style.display='none';
}
for (var i=0;i<ul1.length;i++){
	c1[i].index=i;
	ul1[i].index1=i;
	var c=c1[i].onclick=function(){
		index=this.index;
	if(ul1[index].style.display=='none'){
		for (var i=0;i<ul1.length;i++){
		  ul1[i].style.display='none';
		  }
		 ul1[index].style.display='';
		}else{
			for (var i=0;i<ul1.length;i++){
		  ul1[i].style.display='none';
		  }
	 }
  }
}