steal("jquery","jquery-ui.js", "can","can/construct/super", "can/util/function").then("./lib/lib.js","./models/models.js","./controls/controls.js")
.then(function() {
	Bitovi.OSS.initTwitterWidgets = function() {
		if($('.twitter-follow-button').length) {
			// replace the "Follow @canjs!" link with a little wiget with follower count.
			$('#twitter-wjs').remove();
			!function (d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (!d.getElementById(id)) {
					js = d.createElement(s);
					js.id = id;
					js.src = "//platform.twitter.com/widgets.js";
					fjs.parentNode.insertBefore(js, fjs);
				}
			}(document, "script", "twitter-wjs");
		}
	};

	Bitovi.OSS.redrawFont = function() {
		var style = $('<style>:before,:after{content:none !important}</style>');
		$('head').append(style);

		window.setTimeout(function() {
			style.remove();
		}, 0);
	};
	
	
	
	var initControls = function(mappings) {
		can.each(mappings, function(name, selector) {
			$(selector).each(function() {
				new Bitovi.OSS[name]($(this));
			});
		});
	}

	$(function() {
		Bitovi.OSS.initTwitterWidgets();
		initControls({
			'#hero-download': 'HeroDownloadCustomizer',
			'.benefits': 'Benefits',
			'.social': 'SocialStats',
			'.cdn': 'CDNChooser',
			'.download .customize': 'DownloadCustomizer',
			'.communityTabs': 'CommunityTabs',
			'.sidebar': 'Menu',
			'.project-carousel': 'ProjectCarousel',
			'.article-carousel': 'ArticleCarousel'
		});

		// Syntax highlighting
		$('pre code').each(function() {
			var el = $(this).parent();
			el.addClass('prettyprint');
			if(!el.hasClass('nolinenums')) {
				el.addClass('linenums');
			}
		});

		prettyPrint();
	});
});