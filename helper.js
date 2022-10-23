// noinspection CssUnusedSymbol
/**
 * https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver
 * document.querySelectorAll('[src^="/static/flags"]')
 *
 * 2022-10-23
 * Es gibt keine Flaggen-Dateien mehr, die das Landkürzel als Dateinamen haben. Stattdessen verwenden wir nun einfach
 * den alt-Text des imgs, um ihn darzustellen.
 * Die Länderliste wird daher aktuell nicht benötigt.
 */
class GGHelper {

	constructor()
	{
		this.name = "gh";
		this.version = .88;
		this.t1 = new Date();

		this.init();

		// noinspection JSUnusedGlobalSymbols
		this.interval_tick_nr = 0;
		// noinspection JSUnusedGlobalSymbols
		this.interval_id = null;
		this.runInterval();
	}

	init()
	{
		// language=CSS
		let css = `

			img[class^="country-flag_flag__"] {
			}

			.game-state-overview__player-list {
				/* weil die Spieler items zu hoch sind
				 wieder raus, weil es bei geoguessr wieder kleiner ist */
				/*transform-origin: top left;*/
				/*transform: scaleY(.75);*/
			}

			.player-list {
				/*margin-top : 10em;*/
			}

			.player-list__item {
			}

			.player-list__player {
				--padding : 0.35rem .5rem;
				/* weil die Spieler items zu hoch sind; hier Verzerrung von oben korrigieren
				 wieder raus, weil es bei geoguessr wieder kleiner ist  */
				/*transform: scaleY(1.3);*/
			}

			.player-list__player-name {
				font-style : normal;
				font-size  : 1.1em;

			}

			*[class^="countries-game-overview_overviewWrongGuesses"],
			*[class^="countries-game-overview_wrongGuesses__"] /*,
			.wrong-guesses*/
			{
				height : auto !important;
			}

			*[class^="countries-game-overview_wrongGuessesFlags__"] /*,
			.wrong-guesses__flags*/
			{
				grid-template-columns : repeat(4, 1fr);
			}

			.game-state-overview__wrong-guesses {
				height : auto !important;
			}

			*[class^="countries-game-overview_wrongGuessesFlag__"] /*,
			.wrong-guesses__flag*/
			{
				display        : flex;
				flex-direction : column;
				align-items    : center;
				margin-bottom  : 2em;
				font-size      : 90%;
			}

			*[class^="countries-game-overview_wrongGuessesFlag__"] > * /*,
			.wrong-guesses__flag > **/
			{
				flex-grow : 1;
			}

			*[class^="countries-game-overview_wrongGuessesFlag__"]:after /*,
			.wrong-guesses__flag:after*/
			{
				position       : absolute;
				top            : 100%;
				content        : attr(data-land);
				background     : yellow;
				color          : black;
				font-size      : 1em;
				padding        : 0 .1em;
				display        : inline-block;
				z-index        : 1;
				outline        : 1px solid rgba(0, 0, 0, .2);
				text-transform : capitalize;
				font-style     : normal;
			}

			#tgggInfo {
				position         : absolute;
				display          : inline-block;
				z-index          : 999;
				top              : 0;
				right            : 0;
				background-color : rgba(255, 255, 0, .7);
				padding          : .2em;
				text-align       : center;
				font-size        : 65%;
			}

			#tgggInfo > span {
				/*display   : block;*/
				clear : both;
				color : dimgray;
			}
		`;

		const style = document.createElement('style');
		style.id = "tgggStyle";
		style.textContent = css;
		document.head.append(style);

		const info = document.createElement('div');
		info.id = "tgggInfo";
		info.textContent = this.name + " ";
		const span = document.createElement('span');
		span.textContent = this.version;
		info.append(span);
		document.body.appendChild(info);

		console.log("geoguessr Helper is running.");
	}

	onInterval()
	{
		if(!(this.interval_tick_nr % 60)) {
			console.log("geoguessr Helper is running. " + this.getYoutubeLikeToDisplay((new Date()) - this.t1));
		}
		document.querySelectorAll('*[class^="countries-game-overview_wrongGuessesFlag__"]').forEach(
			this.setFlagCircleCountry.bind(this)
		);

		this.interval_tick_nr++;
	}

	runInterval()
	{
		this.interval_id = window.setInterval(this.onInterval.bind(this), 1000);
	}

	/**
	 * @param {HTMLElement} element
	 */
	setFlagCircleCountry(element)
	{
		let img_alt = element.querySelector('img').getAttribute('alt');
		let container = element/*.querySelector('.circle__content')*/;
		let newland = img_alt;
		if(newland !== container.dataset.land) {
			container.dataset.land = newland;
		}
	}

	/**
	 * @param {MutationRecord[]} mutations
	 */
	onMutation(mutations)
	{
		let app = this;
		mutations.forEach(function(mutation)
		{
			if(mutation.target || mutation.previousSibling || mutation.nextSibling) {
				if((mutation.target instanceof HTMLElement && mutation.target.classList.contains('guessed-flags')) || (mutation.previousSibling instanceof HTMLElement && mutation.previousSibling.classList.contains('guessed-flags')) || (mutation.nextSibling instanceof HTMLElement && mutation.nextSibling.classList.contains('guessed-flags'))) {
					// console.log("SIBLING", mutation.target, mutation.previousSibling, mutation.nextSibling);
				}
			}

			switch(mutation.type) {
				/*
								case 'characterData':
									break;

				*/
				case 'attributes':
					if(mutation.target instanceof HTMLElement) {
						/** @var {HTMLElement} element */
						let element = mutation.target;
						if(element.classList.contains('guessed-flags')) {
							// console.log("ATTRIBUTE CHANGED guessed-flags", element, mutation.attributeName);
						}
						if('class' === mutation.attributeName) {
							// console.log("CLASS CHANGED", element, mutation.oldValue);
						}
					}
					break;

				case 'childList':
					for(let i = 0; i < mutation.addedNodes.length; i++) {
						// DOM-Element
						if(mutation.addedNodes[i] instanceof HTMLElement) {
							/** @var {HTMLElement} element */
							let element = mutation.addedNodes[i];
							if(element.parentElement && element.parentElement.classList.contains('guessed-flags__flag')) {
								console.log("GUESSED FLAG");
							}
							if(element.classList.contains('flag-circle')) {
								app.setFlagCircleCountry(element);
							}
						}
					}
					break;
			}
		});
	}

	runMutationObserver()
	{
		this.observer = new MutationObserver(this.onMutation.bind(this));
		this.observer.observe(document, {
			attributes: true, childList: true, subtree: true/*,
			characterData: true*/
		});
	}

	getYoutubeLikeToDisplay(millisec)
	{
		let seconds = (millisec / 1000).toFixed(0);
		let minutes = Math.floor(seconds / 60);
		let hours = "";
		if(minutes > 59) {
			hours = Math.floor(minutes / 60);
			hours = (hours >= 10) ? hours : "0" + hours;
			minutes = minutes - (hours * 60);
			minutes = (minutes >= 10) ? minutes : "0" + minutes;
		}
		seconds = Math.floor(seconds % 60);
		seconds = (seconds >= 10) ? seconds : "0" + seconds;
		if(hours !== "") {
			return hours + ":" + minutes + ":" + seconds;
		}
		return minutes + ":" + seconds;
	}
}

new GGHelper();
