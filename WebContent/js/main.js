/*Javascript*/


$(document).ready(function(){
  	 
  	/* alert("jQuery est prêt !");*/

  	var $carrousel = $('#carrousel');
  	var $img = $('#carrousel img');
  	var indexImg = $img.length - 1;
  	var  i = 0;
  	var  $currentImg = $img.eq(i);

$img.css('display', 'none'); 
$currentImg.css('display', 'block'); 


/*faire apparaître les  bouton suivants et précédents*/

//$carrousel.append('<div class="controls"> <span class="prev">&#10094;</span> <span class="next">&#10095;</span> </div> ');

$('.next').click(function(){
i++;
if( i<= indexImg ){ 

$img.css('display', 'none');
$currentImg = $img.eq(i);
$currentImg.css('display','block');
console.log("suivant");

} else {
	i = indexImg;
}

});
$('.prev').click(function(){

i--;

if( i>= 0){ 

$img.css('display', 'none');
$currentImg = $img.eq(i);
$currentImg.css('display', 'block');
console.log('precedent');
} else {
 	i = 0;

 }

});

function slideImg() {

	setTimeout(function(){

		if(i < indexImg){
			i++;
		} else{
			i = 0;
		}
		$img.css('display', 'none');
		$currentImg = $img.eq(i);
		$currentImg.css('display', 'block');
		slideImg();
	}, 7000)
}

slideImg();

});

/************************************************************************************AJAX-ARTICLES*******************************************************************************/

$('charge-texte').on('click', function(){
	
	.load.('')
})



