<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>All Products | Accord Paints</title>

<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
 <link rel="shortcut icon" href="img/fav.png">
 <link href="bootstrap/css/bootstrap.css" rel="stylesheet" >
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick-theme.css"/>
<link href="css/animate.css" rel="stylesheet" >
 <link rel="stylesheet" type="text/css" href="https://tympanus.net/Development/TextStylesHoverEffects/css/linkstyles.css">  
<link href="css/my.css" rel="stylesheet" >
<link href="css/responsive.css" rel="stylesheet" >
<link rel="stylesheet" type="text/css" href="plugins/toastr.min.css">
<link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css">
 <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->


<script src="js/jquery.min.js" type="text/javascript"></script>
<!-- page loader -->
<script type="text/javascript">
		$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});
</script>
<style type="text/css">
	.no-js #loader { display: none;  }
.js #loader { display: block; position: absolute; left: 100px; top: 0; }
.se-pre-con {
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	z-index: 9999;
	background: url(img/loader.gif) center no-repeat #fff;
}
</style>

<!-- ===== page loader end =======-->

<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
<script src="https://use.fontawesome.com/bb7d217089.js"></script>
<script src="bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="js/wow.js" type="text/javascript"></script>
<script src="js/custom.js" type="text/javascript"></script>
<script src="plugins/toastr.min.js"></script>
<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>
<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/additional-methods.min.js"></script>
<script type="text/javascript" src="js/jquery.validate.js"></script>

<script type="text/javascript">
	$(document).ready(function(){
	$(".hvr-sweep-to-bottom").click(function(){
		$("#quoteModal").modal('show');
	});
});
</script>
 <!-- quote modal -->
    <div id="quoteModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h3 class="modal-title">Confirmation</h3>
                </div>
                <div class="modal-body" style="padding: 30px;">
                   <form>
					<div class="col-xs-12 no-pad">
						<div class="form-group">
							<input type="text" class="form-control big-dig" placeholder="First Name">
						</div>
					</div>
						<div class="col-xs-12 no-pad">
						<div class="form-group">
							<input type="tel" class="form-control big-dig" placeholder="Contact Number">
						</div>
					</div>

					<div class="col-xs-12 no-pad">
						<div class="form-group">
							<input type="email" class="form-control big-dig" placeholder="Email Id">
						</div>
					</div>

					<div class="col-xs-12 no-pad">
						<div class="form-group">
							 <textarea class="form-control big-dig" rows="5" id="comment" placeholder="Message"></textarea>
						</div>
					</div>

				
				</form>
                </div>
                <div class="modal-footer" style="border: none;">
                   
                    <button type="button" class="btn btn-send" style="font-size: 15px; padding: 15px 30px;">Submit</button>
                </div>
            </div>
        </div>
    </div>


<link rel="stylesheet" type="text/css" href="css/product.css">
<link rel="stylesheet" type="text/css" href="lens-image/css/jquery.simpleLens.css">
<link rel="stylesheet" type="text/css" href="lens-image/css/jquery.simpleGallery.css">
<style type="text/css">
        .simpleLens-big-image-container {
            height: 426px;
            width: 426px;
        }
</style>
<script type="text/javascript" src="lens-image/src/jquery.simpleGallery.js"></script>
<script type="text/javascript" src="lens-image/src/jquery.simpleLens.js"></script>

<script>
    $(document).ready(function(){
        $('#demo-1 .simpleLens-thumbnails-container img').simpleGallery({
            loading_image: 'lens-image/demo/images/loading.gif'
        });

        $('#demo-1 .simpleLens-big-image').simpleLens({
            loading_image: 'lens-image/demo/images/loading.gif'
        });
    });
</script>


<link rel="stylesheet" type="text/css" href="http://www.jqueryscript.net/demo/Simple-jQuery-Star-Rating-System-For-Bootstrap-3/css/star-rating.css">
<script type="text/javascript" src="http://www.jqueryscript.net/demo/Simple-jQuery-Star-Rating-System-For-Bootstrap-3/js/star-rating.js"></script>


<script type="text/javascript">
	$(document).ready(function() {
  // slick carousel
  $('.product-slider').slick({
    dots: false,
    vertical: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    verticalSwiping: true,
    infinite: false,
    arrows:true,
  });
});
</script>
<script type="text/javascript">
	    $(document).ready(function(){
      	$('.our-expertslide').slick({
      	 slidesToShow: 4,
  		slidesToScroll: 1,
  		  infinite: true,
       	 responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
        // dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
      });
    });

</script>
<style type="text/css">
h2 {
font-size: 50px;
    text-align: center;
    color: #000;
  
    margin:30px 0px;
    padding-bottom: 20px;
    padding-top: 15px;
    background-image: url(img/colors.jpg);
    background-position: bottom;
    background-repeat: no-repeat;
    font-family: 'Century Gothic';
    font-weight: 400;
}
</style>
</head>
<body style="font-family: 'Century Gothic';">


<div class="se-pre-con"></div> <!-- loader -->
<nav class="navbar navbar-default menu-head" role="navigation">
  <div class="container-fluid">
  <div class="header-row">
      <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="index.php"><img src="img/logo.png"></a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      
      <ul class="nav navbar-nav navbar-right main-menu">
       
          <li>
              <a href="index.php" class="link link--yaku" style="letter-spacing: 1px !important;">
                    <span>H</span><span>o</span><span>m</span><span>e</span>                    
                </a> 
        </li>       
        <li class="hidden-md clearfix"></li>
        <li class="dropdown">
          <a href="#" class="link link--yaku dropdown-toggle" data-toggle="dropdown"> 
            <span>A</span> <span>b</span> <span>o</span> <span>u</span> <span>t</span> <span class="caret"></span>
          </a>
          <ul class="dropdown-menu about-dropdown" role="menu">
          <h3><span>Our Company</span></h3>
            <li>
            
              <ul class="list-unstyled col-md-4 col-sm-6 col-xs-6 padding-top-10 padding-bottom-10">
                
                <li><a href="about.php">About</a></li>
                <li><a href="whyus.php">why Us</a></li>

                
              </ul>
            </li>
          <li>
             <ul class="list-unstyled col-md-4 col-sm-6 col-xs-6 padding-top-10 padding-bottom-10">
              <!--  <h3 style="opacity: 0;"> &nbsp; </h3> -->
               <li><a href="privacy_policies.php">Privacy Policies</li>
               <li><a href="faq.php">FAQ's</a></li>
               
            
             </ul>
           </li> 
             
          </ul>
        </li>
        <li class="hidden-md clearfix"></li>
     <!--    <li>
       <a href="#" class="link link--yaku"> 
         <span>S</span> <span>e</span> <span>r</span> <span>v</span> <span>i</span> <span>c</span> <span>e</span> <span>s</span>
       </a>
     </li>
     <li class="hidden-md clearfix"></li> -->
        <li>
          <a href="blogs.php" class="link link--yaku"> 
            <span>N</span> <span>e</span> <span>w</span> <span>s</span>
          </a>
        </li>
        <li class="hidden-md clearfix"></li>

        <li class="dropdown">
          <a href="#" class="link link--yaku dropdown-toggle" data-toggle="dropdown"> 
            <span>P</span> <span>r</span> <span>o</span> <span>d</span> <span>u</span> <span>c</span> <span>t</span><span>s</span>
            <span class="caret"></span>
          </a>

           <ul class="dropdown-menu product-dropdown" role="menu">
            <li>
              <ul class="list-unstyled col-md-3 col-sm-6 col-xs-6">
                <h3> Primer </h3>
                <li><a href="Exterior_9944.php">Exterior Wall Primer</a></li>
                <li><a href="Interior_9935.php">Water Thinnable Cement Primer </a></li>
              
              </ul>
            </li>
          
            <li>
              <ul class="list-unstyled col-md-3 col-sm-6 col-xs-6">
                 <h3> Wood Filler </h3>
                 <li><a href="Wood_Filter_9947.php">Wood Filler</a></li>
              </ul>
            </li>

            <li class="clearfix hidden-sm hidden-md hidden-lg"></li>

             <li>
              <ul class="list-unstyled col-md-3 col-sm-6 col-xs-6">
                 <h3> Cement Paint </h3>
                 <li><a href="Cement_Paint_9956.php">Water Proof Cement Paint</a></li>
              
              </ul>
            </li>

            <li class="clearfix hidden-sm hidden-xs"></li>
              
             <li>
              <ul class="list-unstyled col-md-3 col-sm-6 col-xs-6">
                 <h3> Emulsion Paints </h3>
                <li><a href="Mettalic_Paint_9953.php">Metallica Luster Paint</a></li>
                <li><a href="Exterior_9937.php">Exterior Emulsion</a></li>
                <li><a href="Luxuryhigh_9939.php">Premium Luxury Emulsion (interior/exterior)</a></li>
                <li><a href="Luxurysemi_9941.php">Luxury Semi Gloss Emulion (interior/exterior)</a></li>
              </ul>
            </li>  

            <li>
              <ul class="list-unstyled col-md-3 col-sm-6 col-xs-6">
                 <h3> Texture Paints </h3>
                <li><a href="Rustic_9960.php">Rustic </a></li>
                <li><a href="Perlina_9960.php">Perlina </a></li>
                <li><a href="Superfine_9960.php">Superfine</a></li>
                
              </ul>
            </li>

             <li>
              <ul class="list-unstyled col-md-3 col-sm-6 col-xs-6">
                 <h3> Wall Putty </h3>
                <li><a href="White_Cement.php">White Cement Based</a></li>
                <li><a href="Acryclic_White.php">Acryclic White Wall Putty</a></li>
              </ul>
            </li>
          </ul>

        </li>
        <li class="hidden-md clearfix"></li>
       <!--  <li><a href="#" class="link link--yaku"> <span>S</span> <span>h</span> <span>o</span> <span>p</span> <span>s</span> <span>p</span> <span>a</span> <span>n</span></a></li> -->
        
        <li>
          <a href="contactus.php" class="link link--yaku"><span>C</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span> 
          </a>
          
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
    </div>
    </div>
  </div><!-- /.container-fluid -->
</nav>


	<div class="container-fluid">
		<div class="row">
				
				<div class="col-md-12 col-sm-12 col-xs-12 bread-crum-box">
					<div class="container">
						<ul class="breadcrumb">
						    <li><a href="index.php">Home</a></li>
						    <li class="active">All Products</li>
						</ul>
						<h3>All Products </h3>
					</div>
				</div>

		</div>
		
		<div class="row">
			<div class="container">
				
				<div class="col-xs-12 col-sm-12 col-md-12 center-align padding-lr-0">
						 <div class="col-md-12 col-sm-12 col-xs-12 heading-style">
						 	<h2>Primer</h2>
						  </div>		
						  <div class="col-xs-12 col-sm-4 col-md-4 center-container">
							<div class="expert-mainbox">
								<div class="expert-image" style="">
									<a href="Exterior_9944.php" class="product_type_simple">
										<span class="lnr lnr-eye"></span> Quick View
									 </a>
									<img src="img/rel_pro/img5.jpg">
								</div>
								<div class="expert-data">
									<h3>Exterior Wall Primer</h3>
									<p><b>Categories:</b> Primer </p>
								</div>	
							</div>	
						 </div>

						  <div class="col-xs-12 col-sm-4 col-md-4 center-container">
							<div class="expert-mainbox">
								<div class="expert-image" style="">
									<a href="Interior_9935.php" class="product_type_simple"><span class="lnr lnr-eye"></span> Quick View </a>
									<img src="img/rel_pro/img1.jpg">
								</div>
								<div class="expert-data">
									<h3> Water Thinnable Cement Primer</h3>
									<p><b>Categories:</b> Primer </p>
								</div>	
							</div>	
						 </div>
					
				</div>

			

				<div class="col-xs-12 col-sm-12 col-md-12 center-align padding-lr-0">
						 <div class="col-md-12 col-sm-12 col-xs-12 heading-style">
						 	<h2>Emulsion Paints</h2>
						  </div>	
						  <div class="col-xs-12 col-sm-4 col-md-4 center-container">
							<div class="expert-mainbox">
								<div class="expert-image" style="">
									<a href="Interior_9953.php" class="product_type_simple">
									<span class="lnr lnr-eye"></span> Quick View </a>
									<img src="img/rel_pro/img8.jpg">
								</div>
								<div class="expert-data">
									<h3> Metallica Luster Paint</h3>
									<p> <b>Categories: </b> Emulsion Paints </p>
								</div>	
							</div>	
						 </div>	
						  <div class="col-xs-12 col-sm-4 col-md-4 center-container">
							<div class="expert-mainbox">
								<div class="expert-image" style="">
									<a href="Exterior_9937.php" class="product_type_simple">
									<span class="lnr lnr-eye"></span> Quick View </a>
									<img src="img/rel_pro/img2.jpg">
								</div>
								<div class="expert-data">
									<h3> Exterior Emulsion</h3>
									<p> <b>Categories: </b> Emulsion Paints </p>
								</div>	
							</div>	
						 </div>	
						  <div class="col-xs-12 col-sm-4 col-md-4 center-container">
							<div class="expert-mainbox">
								<div class="expert-image" style="">
									<a href="Luxuryhigh_9939.php" class="product_type_simple">
									<span class="lnr lnr-eye"></span> Quick View </a>
									<img src="img/rel_pro/img3.jpg">
								</div>
								<div class="expert-data">
									<h3> Premium Luxury Emulsion</h3>
									<p> <b>Categories: </b> Emulsion Paints </p>
								</div>	
							</div>	
						 </div>	
						  <div class="col-xs-12 col-sm-4 col-md-4 center-container">
							<div class="expert-mainbox">
								<div class="expert-image" style="">
									<a href="Luxurysemi_9941.php" class="product_type_simple">
									<span class="lnr lnr-eye"></span> Quick View </a>
									<img src="img/rel_pro/img4.jpg">
								</div>
								<div class="expert-data">
									<h3>Luxury Semi Gloss Emulsion </h3>
									<p> <b>Categories: </b> Emulsion Paints </p>
								</div>	
							</div>	
						 </div>	
				</div>

				<div class="col-xs-12 col-sm-12 col-md-12 center-align padding-lr-0">
						 <div class="col-md-12 col-sm-12 col-xs-12 heading-style">
						 	<h2>Texture Paints</h2>
						  </div>	

						<div class="col-xs-12 col-sm-4 col-md-4 center-container">
							<div class="expert-mainbox">
								<div class="expert-image" style="">
									<a href="Rustic_9960.php" class="product_type_simple">
									<span class="lnr lnr-eye"></span> Quick View </a>
									<img src="img/rel_pro/img10.jpg">
								</div>
								<div class="expert-data">
									<h3>Rustic </h3>
									<p> <b>Categories: </b> Texture Paints </p>
								</div>	
							</div>	
						 </div>	
						 <div class="col-xs-12 col-sm-4 col-md-4 center-container">
							<div class="expert-mainbox">
								<div class="expert-image" style="">
									<a href="Perlina_9960.php" class="product_type_simple">
									<span class="lnr lnr-eye"></span> Quick View </a>
									<img src="img/rel_pro/img10.jpg">
								</div>
								<div class="expert-data">
									<h3>Perlina</h3>
									<p> <b>Categories: </b> Texture Paints </p>
								</div>	
							</div>	
						 </div>	
						 <div class="col-xs-12 col-sm-4 col-md-4 center-container">
							<div class="expert-mainbox">
								<div class="expert-image" style="">
									<a href="Superfine_9960.php" class="product_type_simple">
									<span class="lnr lnr-eye"></span> Quick View </a>
									<img src="img/rel_pro/img10.jpg">
								</div>
								<div class="expert-data">
									<h3>Superfine </h3>
									<p> <b>Categories: </b> Texture Paints </p>
								</div>	
							</div>	
						 </div>	
				</div>

				<div class="col-xs-12 col-sm-12 col-md-12 center-align padding-lr-0">
					 <div class="col-md-12 col-sm-12 col-xs-12 heading-style">
					 	<h2>Wall Putty</h2>
					  </div>	

					<div class="col-xs-12 col-sm-4 col-md-4 center-container">
						<div class="expert-mainbox">
							<div class="expert-image" style="">
								<a href="White_Cement.php" class="product_type_simple">
								<span class="lnr lnr-eye"></span> Quick View </a>
								<img src="img/rel_pro/img11.jpg">
							</div>
							<div class="expert-data">
								<h3>White Cement Based </h3>
								<p> <b>Categories: </b> Wall Putty </p>
							</div>	
						</div>	
					 </div>	
					 <div class="col-xs-12 col-sm-4 col-md-4 center-container">
						<div class="expert-mainbox">
							<div class="expert-image" style="">
								<a href="Acryclic_White.php" class="product_type_simple">
								<span class="lnr lnr-eye"></span> Quick View </a>
								<img src="img/rel_pro/img11.jpg">
							</div>
							<div class="expert-data">
								<h3>Acryclic White Wall Putty </h3>
								<p> <b>Categories: </b> Wall Putty </p>
							</div>	
						</div>	
					 </div>	
				</div>

					<div class="col-xs-12 col-sm-12 col-md-12 center-align padding-lr-0">
						 <div class="col-md-12 col-sm-12 col-xs-12 heading-style">
						 	<h2>Wood Filler</h2>
						  </div>	
						  <div class="col-xs-12 col-sm-4 col-md-4 center-container">
							<div class="expert-mainbox">
								<div class="expert-image" style="">
									<a href="Wood_Filter_9947.php" class="product_type_simple"><span class="lnr lnr-eye"></span> Quick View </a>
									<img src="img/rel_pro/img7.jpg">
								</div>
								<div class="expert-data">
									<h3> Wood Filler</h3>
									<p><b>Categories:</b> Wood_Filter</p>
								</div>	
							</div>	
						 </div>	
				</div>

				<div class="col-xs-12 col-sm-12 col-md-12 center-align padding-lr-0">
						 <div class="col-md-12 col-sm-12 col-xs-12 heading-style">
						 	<h2>Cement Paint</h2>
						  </div>	
						  <div class="col-xs-12 col-sm-4 col-md-4 center-container">
							<div class="expert-mainbox">
								<div class="expert-image" style="">
									<a href="Cement_Paint_9956.php" class="product_type_simple"><span class="lnr lnr-eye"></span> Quick View </a>
									<img src="img/rel_pro/img9.jpg">
								</div>
								<div class="expert-data">
									<h3> Water Proof Cement Paint</h3>
									<p><b>Categories:</b> Cement Paint</p>
								</div>	
							</div>	
						 </div>	
				</div>
				
			</div>
		</div>
		
	
		
			

		

	</div>

	<div class="container-fluid">
		<div class="row">
				<div class="getfree-box">
					<div class="container">
					<h3>Get Free Estimate: (000-000-000)</h3>
					</div>

				</div>
				
				<div class="container" style="    padding-top: 25px;">
					<div class="col-xs-6 col-sm-4 col-md-3 social-icons footer-xs-12">
					<img src="img/footer-logo.png">
						<ul class="list-inline">
							<li class="hi-icon-effect-1 hi-icon-effect-1a">
								<a href="#" class="hi-icon hi-icon-mobile">Mobile</a>
							</li>
							<li class="hi-icon-effect-1 hi-icon-effect-1a">
								<a href="#" class="hi-icon hi-icon-twit">Mobile</a>
					
							</li>
							<li class="hi-icon-effect-1 hi-icon-effect-1a">
								<a href="#" class="hi-icon hi-icon-link">Mobile</a>
					
							</li>

						</ul>
					</div>
					<div class="col-xs-6 col-sm-4 col-md-3 our-service footer-xs-12">
						<h3>Our Services</h3>
						<ul class="list-unstyled">
							
							<li><a href="#">About Accord</a></li>
							<li><a href="#">Mobile</a></li>
							<li><a href="#">Why Accord</a></li>
							<li><a href="#">Social Media</a></li>
							
						</ul>	
					</div>

					<div class="col-xs-6 col-sm-4 col-md-3 our-link footer-xs-12">
						<h3>Links</h3>
						<ul class="list-unstyled">
							
							<li><a href="#">Company</a></li>
							<li><a href="#">Latest Jobs</a></li>
							<li><a href="#">Partners</a></li>
							<li><a href="#">Blog Posts</a></li>
							<li><a href="#">Help Topics</a></li>
							<li><a href="#">Policies</a></li>
							
						</ul>	
					</div>

					<div class="col-xs-6 col-sm-12 col-md-3 our-contact footer-xs-12">
						<h3>Contact Us</h3>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.887825613575!2d75.89467781513525!3d30.889798881582713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a82d382204875%3A0xc7b2b91fd73f64f5!2sRahultelecom%26karyana+Store!5e0!3m2!1sen!2sin!4v1488793888011" width="100%" height="150" frameborder="0" style="border:0" allowfullscreen></iframe>
					</div>
				</div>

	
			</div>

			<div class="row" style="background-color: #333;font-family: 'Century Gothic';">
				<div class="container">
				<p class="copy-right"> <i class="fa fa-copyright" aria-hidden="true"></i> 2017 accord.com</p>
				<p class="designby">Design by <a href="#" target="_blank">VismaadLabs</a></p>				
				</div>
			</div>
	</div>		



</body>
</html>				