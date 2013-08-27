/**
 * function permettant de choisir un chiffre dans une liste le plus près par rapport à un chiffre donné
 */ 
var list = [5, 10, 15, 20, 25];
var numbertofound = 12 ;
previousSous = 12 ;
for (var i=0; i<list.length; i++) {
	currentSous = list[i] - numbertofound  ;
	indexfound = i ;
	if (Math.abs(previousSous) > currentSous) {
		console.log('found['+i+'] ! : '+list[i]) ;
	}
	previousSous = currentSous;
}

/**
 * Ajouter des styles en dynamique
 */
var style = document.createElement('style') ,
	text_style = '#contener{position:relative;!important}';

style.setAttribute('type', 'text/css');
if (style.styleSheet) { //For ie
	style.styleSheet.cssText = text_style;
} else {
	style.appendChild(document.createTextNode(text_style));
}
(document.getElementsByTagName('head')[0]).appendChild(mmmStyle);

function addCssRuleToHead (cssRule) {
	var head = document.getElementsByTagName('head')[0],
		s = document.createElement('style') ;
		css = '' ;
	for (var cssrulename in cssRule) {
		if (!cssRule.hasOwnProperty(cssrulename) || !cssrulename in cssRule) continue ;
		css += cssrulename+'{' ;
		for (var cssattributes in cssRule[cssrulename]) {
			css += cssattributes+': '+cssRule[cssrulename][cssattributes]+';' ;
		}
		css+='}';
	}
	s.setAttribute('type', 'text/css');
	if (s.styleSheet) { // IE
		s.styleSheet.cssText = css;
	} else { // the world
		s.appendChild(document.createTextNode(css));
	}
	head.appendChild(s);
}

addCssRuleToHead({
	'#lbSpacer': {
		'height': '0'
	},
	'.homeContHl': {
		'margin-top': '-14px'
	},
	'body': {
		'background-color': '#000'
	}
});

/**
 * Ajouter des styles en dynamique à l'intérieur d'un media querie
 */
function addCssRuleWithMediaQueryToHead (cssRule) {
    var head = document.getElementsByTagName('head')[0],
        s = document.createElement('style') ;
    css = '' ;
    for (var cssrulename in cssRule) {
        if (!cssRule.hasOwnProperty(cssrulename) || !cssrulename in cssRule) continue ;
        css += cssrulename+'{' ;
        for (var cssattributes in cssRule[cssrulename]) {
            css += cssattributes+': '+cssRule[cssrulename][cssattributes]+';' ;
        }
        css+='}';
    }
    s.setAttribute('type', 'text/css');
    if (s.styleSheet) { // IE
        s.styleSheet.cssText = css;
    } else { // the world
        s.appendChild(document.createTextNode(css));
    }
    head.appendChild(s);
}

addCssRuleWithMediaQueryToHead('@media screen and (max-width: 640px) and (orientation:portrait)',{
    '#lbSpacer': {
        'height': '0'
    },
    '.homeContHl': {
        'margin-top': '-14px'
    },
    'body': {
        'background-color': '#000'
    }
});