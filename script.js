$(document).ready(function(){
});
fill_title('Respect forming clothes do in he Course so piqued no an by appear Themselves reasonable pianoforte so motionless he as difficulty be Abode way begin ham there power whole Do unpleasing indulgence impossible to conviction Suppose neither evident welcome it at do civilly uncivil Sing tall much you get nor')
function fill_title(string){
    titles = string.split(' ');
};
// var descriptions = [];
// // function random_description (string){
// //     var temp_string = string.split(' ')
// //     for (i=0; i<=temp_string.length; i++){
// //         descriptions[i] = (temp_string[Math.floor(Math.random()*temp_string.length)]);
// //     };
// //     return descriptions.join(' ');
// // }
var imgs = ['http://hplgit.github.io/scipro-primer/slides/random/html/fig-random/associations/random_walker1.gif','https://s3.amazonaws.com/neowin/forum/uploads/set_resources_36/84c1e40ea0e759e3f1505eb1788ddf3c_default_photo.png','http://www.onlive1.com/wp-content/uploads/2016/09/list-of-things-to-draw-when-youre-bored-150x150.jpg'];
function pull_db(){
    for(var i=0; i<8;i++){
    	$('#products').append('\
                            <div class="col-md-3 col-sm-4 col-xs-12 item">\
                                <div class="row">\
                                    <div class="">\
                                        <a id="title" href="#"><p>'+titles[Math.floor((Math.random()*titles.length)+0)]+'</p></a>\
                                    </div>\
                                </div>\
                                <div class="row">\
                                    <div class="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-6 col-xs-offset-3">\
                                        <img src="'+imgs[Math.floor((Math.random()*imgs.length)+0)]+'" class="img-responsive center-block">\
                                    </div>\
                                </div>\
                                <div class="row">\
                                    <div class="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">\
                                        <p>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>\
                                    </div>\
                                </div>\
                                <div class="row">\
                                    <div class="col-md-6 col-sm-6 col-md-offset-3 col-sm-offset-3 col-xs-6 col-xs-offset-3">\
                                        <span class="price">PRICE: $'+(Math.floor(Math.random()*500)+100)+'</span>\
                                    </div>\
                                </div>\
                                <div class="row">\
                                    <span class="col-md-3 col-sm-3 col-md-offset-3 col-sm-offset-3 col-xs-3 col-xs-offset-3 ">\
                                        <span style="font-size: large">Size:</span>\
                                    </span>\
                                    <span class="col-md-3 col-sm-3 col-xs-3">\
                                        <div class="dropdown">\
                                            <button class="btn dropdown-toggle" type="button" data-toggle="dropdown">Small<span class="caret"></span></button>\
                                            <ul class="dropdown-menu">\
                                                <li><a href="">Medium</a></li>\
                                                <li><a href="">Large</a></li>\
                                                <li><a href="">XL</a></li>\
                                                <li><a href="">XXL</a></li>\
                                            </ul>\
                                        </div>\
                                    </span>\
                                </div>\
                                <div class="row">\
                                    <div class="col-md-6 col-sm-6 col-md-offset-3 col-sm-offset-3 col-xs-6 col-xs-offset-3">\
                                        <button class="btn btn-primary" id="add-cart">Add to Cart</button>\
                                    </div>\
                                </div>\
                            </div>');
    }
}
pull_db();
