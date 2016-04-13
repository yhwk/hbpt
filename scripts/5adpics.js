var slideimages=new Array();
slideimages[0]="images/ad-00.jpg";
slideimages[1]="images/ad-01.jpg";
slideimages[2]="images/ad-02.jpg";
slideimages[3]="images/ad-03.jpg";
slideimages[4]="images/ad-04.jpg";
slideimages[5]="images/ad-05.jpg";
slideimages[6]="";
slideimages[7]="";
slideimages[8]="";
var slidelinks=new Array();
slidelinks[0]="Untitled-4.html";
slidelinks[1]="Untitled-3.html";
slidelinks[2]="Untitled-1.html";
slidelinks[3]="Untitled-4.html";
slidelinks[4]="Untitled-1.html";
slidelinks[5]="Untitled-4.html";
var c=0;
var imageholder=new Array()
var ie55=window.createPopup
for (i=0;i<slideimages.length;i++){
imageholder[i]=new Image()
imageholder[i].src=slideimages[i]
}
var whichlink=0
var whichimage=0
function gotoshow(){
window.open(slidelinks[whichlink]);
}
function ove(n){
					whichimage=n
					whichlink=(whichlink+n)%5
if(n==1){imageholder[6].src=imageholder[0].src
for(i=0;i<6;i++){	
imageholder[i].src=imageholder[i+1].src
				}}
if(n==2){
imageholder[6].src=imageholder[0].src
imageholder[7].src=imageholder[1].src
for(i=0;i<6;i++){
imageholder[i].src=imageholder[i+2].src}}
if(n==3){
imageholder[6].src=imageholder[0].src
imageholder[7].src=imageholder[1].src
imageholder[8].src=imageholder[2].src
for(i=0;i<6;i++){
imageholder[i].src=imageholder[i+3].src
}}
document.images.slide.src=imageholder[0].src
document.images.slide1.src=imageholder[1].src
document.images.slide2.src=imageholder[2].src
document.images.slide3.src=imageholder[3].src
				
				}
		
