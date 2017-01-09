$(document).ready(function(){
});

for(var i=0; i<15;i++){
	$('#products').append('\
                        <div class="item col-md-3 col-sm-4">\
                            <div class="row">\
                                <div class="col">\
                                    <a href="#"><p>EXOFIT STRATA POSITIONING HARNESS</p></a>\
                                </div>\
                            </div>\
                            <div class="row">\
                                <div class="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">\
                                    <img src="https://placehold.it/150x150" class="img-responsive center-block">\
                                </div>\
                            </div>\
                            <div class="row">\
                                <div class="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1">\
                                    <p>ipsum dolor sit amet, consectetur adipisicing elit</p>\
                                </div>\
                            </div>\
                            <div class="row">\
                                <div class="col-md-6 col-sm-6 col-md-offset-3 col-sm-offset-3">\
                                    <span class="price">$328.99</span>\
                                </div>\
                            </div>\
                            <div class="row">\
                                <span class="col-md-3 col-sm-3 col-md-offset-3 col-sm-offset-3 ">\
                                    <span style="font-size: large">Size:</span>\
                                </span>\
                                <span class="col-md-3 col-sm-3">\
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
                                <div class="col-md-6 col-sm-6 col-md-offset-3 col-sm-offset-3">\
                                    <button class="btn btn-primary" id="add-cart">Add to Cart</button>\
                                </div>\
                            </div>\
                        </div>')
}
