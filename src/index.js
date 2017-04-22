/**
 ************** HTML to DOM Actions (just for demo) ***********
 *
 * @author Gilles Coomans
 * @licence MIT
 * @copyright 2016-2017 Gilles Coomans
 */

import babelute from 'babelute';
import { insertHTML } from 'nomocas-webutils/lib/dom-utils';
import htmlLexicon from 'babelute-html-lexicon'; // external

/**
 * @external {FacadePragmatics} https://github.com/nomocas/babelute
 */
const $baseOutput = babelute.FacadePragmatics.prototype.$output;

/**
 * Dom Pragmatics
 * @type {FacadePragmatics}
 * @public
 * @example
 * import domPragmas from 'babelute-html/src/html-to-dom.js';
 * import htmlLexicon from 'babelute-html/src/html-lexicon.js';
 *
 * const h = htmlLexicon.initializer;
 * const sentence = h.div(state.intro).section(h.class('my-section').h1(state.title));
 * const $root = document.getElementById('foo');
 * 
 * domPragmas.$output($root, sentence);
 */
const domPragmas = babelute.createFacadePragmatics({
	html: true
}, {

	// we only need to provides language atoms implementations.

	tag($tag, args /* tagName, babelutes */ ) {
		const child = document.createElement(args[0]),
			babelutes = args[1];
		let templ;

		$tag.appendChild(child);
		if (babelutes)
			for (let i = 0, len = babelutes.length; i < len; ++i) {
				templ = babelutes[i];
				if (typeof templ === 'undefined')
					continue;
				if (templ && templ.__babelute__)
					this.$output(child, templ);
				else
					child.appendChild(document.createTextNode(templ)); // auto escaped when added to dom.
			}
	},

	text($tag, args /* value */ ) {
		$tag.appendChild(document.createTextNode(args[0])); // auto escaped when added to dom.
	},

	class($tag, args /* className, flag */ ) {
		if (args[0] && (args.length === 1 || args[1]))
			$tag.classList.add(args[0]);
	},
	classes($tag, args /* classes */ ) {
		const splitted = args[0].split(/\s+/);
		splitted.forEach((cl) => {
			$tag.classList.add(cl);
		});
	},
	style($tag, args /* name, value  */ ) {
		$tag.style[args[0]] = args[1];
	},

	attr($tag, args /* name, value */ ) {
		$tag.setAttribute(args[0], args[1]);
	},

	prop($tag, args /* name, value */ ) {
		$tag[args[0]] = args[1];
	},

	data($tag, args /* name, value */ ) {
		$tag.dataset[args[0]] = args[1];
	},

	id($tag, args /* value */ ) {
		$tag.id = args[0];
	},

	on($tag, args /* eventName, callback */ ) {
		$tag.addEventListener(args[0], args[1]);
	},
	// custom output
	onDom($tag, args /* render */ ) {
		const onRender = args[0];
		if (onRender)
			onRender($tag, null);
	},

	$output($tag, babelute) {
		return $baseOutput.call(this, $tag, babelute).children;
	},

	html($tag, args) {
		if (args[0])
			insertHTML(args[0], $tag);
	}
});

htmlLexicon.addAliases({
	$toDOM(domElement) {
		return domPragmas.$output(domElement, this);
	}
});

export default domPragmas;

