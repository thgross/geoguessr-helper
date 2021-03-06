// noinspection CssUnusedSymbol
/**
 * https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver
 * document.querySelectorAll('[src^="/static/flags"]')
 */

class GGHelper {

	constructor()
	{
		this.name = "gh";
		this.version = .81;
		this.t1 = new Date();

		this.countries = {
			RS: "Serbien",
			ME: "Montenegro",
			AF: "Afghanistan",
			EG: "Ägypten",
			AL: "Albanien",
			DZ: "Algerien",
			AD: "Andorra",
			AO: "Angola",
			AI: "Anguilla",
			AQ: "Antarktis",
			AG: "Antigua und Barbuda",
			GQ: "Äquatorial Guinea",
			AR: "Argentinien",
			AM: "Armenien",
			AW: "Aruba",
			AZ: "Aserbaidschan",
			ET: "Äthiopien",
			AU: "Australien",
			BS: "Bahamas",
			BH: "Bahrain",
			BD: "Bangladesh",
			BB: "Barbados",
			BE: "Belgien",
			BZ: "Belize",
			BJ: "Benin",
			BM: "Bermudas",
			BT: "Bhutan",
			MM: "Birma",
			BO: "Bolivien",
			BA: "Bosnien-Herzegowina",
			BW: "Botswana",
			BV: "Bouvet Inseln",
			BR: "Brasilien",
			IO: "Britisch-Indischer Ozean",
			BN: "Brunei",
			BG: "Bulgarien",
			BF: "Burkina Faso",
			BI: "Burundi",
			CL: "Chile",
			CN: "China",
			CX: "Christmas Island",
			CK: "Cook Inseln",
			CR: "Costa Rica",
			DK: "Dänemark",
			DE: "Deutschland",
			DJ: "Djibuti",
			DM: "Dominika",
			DO: "Dominikanische Republik",
			EC: "Ecuador",
			SV: "El Salvador",
			CI: "Elfenbeinküste",
			ER: "Eritrea",
			EE: "Estland",
			FK: "Falkland Inseln",
			FO: "Färöer Inseln",
			FJ: "Fidschi",
			FI: "Finnland",
			FR: "Frankreich",
			GF: "französisch Guyana",
			PF: "Französisch Polynesien",
			TF: "Französisches Süd-Territorium",
			GA: "Gabun",
			GM: "Gambia",
			GE: "Georgien",
			GH: "Ghana",
			GI: "Gibraltar",
			GD: "Grenada",
			GR: "Griechenland",
			GL: "Grönland",
			UK: "Großbritannien",
			GB: "Großbritannien (UK)",
			GP: "Guadeloupe",
			GU: "Guam",
			GT: "Guatemala",
			GN: "Guinea",
			GW: "Guinea Bissau",
			GY: "Guyana",
			HT: "Haiti",
			HM: "Heard und McDonald Islands",
			HN: "Honduras",
			HK: "Hong Kong",
			IN: "Indien",
			ID: "Indonesien",
			IQ: "Irak",
			IR: "Iran",
			IE: "Irland",
			IS: "Island",
			IL: "Israel",
			IT: "Italien",
			JM: "Jamaika",
			JP: "Japan",
			YE: "Jemen",
			JO: "Jordanien",
			YU: "Jugoslawien",
			KY: "Kaiman Inseln",
			KH: "Kambodscha",
			CM: "Kamerun",
			CA: "Kanada",
			CV: "Kap Verde",
			KZ: "Kasachstan",
			KE: "Kenia",
			KG: "Kirgisistan",
			KI: "Kiribati",
			CC: "Kokosinseln",
			CO: "Kolumbien",
			KM: "Komoren",
			CG: "Kongo",
			CD: "D.-R. Kongo", // Demokratische Republik Kongo
			HR: "Kroatien",
			CU: "Kuba",
			KW: "Kuwait",
			LA: "Laos",
			LS: "Lesotho",
			LV: "Lettland",
			LB: "Libanon",
			LR: "Liberia",
			LY: "Libyen",
			LI: "Liechtenstein",
			LT: "Litauen",
			LU: "Luxemburg",
			MO: "Macao",
			MG: "Madagaskar",
			MW: "Malawi",
			MY: "Malaysia",
			MV: "Malediven",
			ML: "Mali",
			MT: "Malta",
			MP: "Marianen",
			MA: "Marokko",
			MH: "Marshall Inseln",
			MQ: "Martinique",
			MR: "Mauretanien",
			MU: "Mauritius",
			YT: "Mayotte",
			MK: "Mazedonien",
			MX: "Mexiko",
			FM: "Mikronesien",
			MZ: "Mocambique",
			MD: "Moldavien",
			MC: "Monaco",
			MN: "Mongolei",
			MS: "Montserrat",
			NA: "Namibia",
			NR: "Nauru",
			NP: "Nepal",
			NC: "Neukaledonien",
			NZ: "Neuseeland",
			NI: "Nicaragua",
			NL: "Niederlande",
			AN: "Niederländische Antillen",
			NE: "Niger",
			NG: "Nigeria",
			NU: "Niue",
			KP: "Nord Korea",
			NF: "Norfolk Inseln",
			NO: "Norwegen",
			OM: "Oman",
			AT: "Österreich",
			PK: "Pakistan",
			PS: "Palästina",
			PW: "Palau",
			PA: "Panama",
			PG: "Papua Neuguinea",
			PY: "Paraguay",
			PE: "Peru",
			PH: "Philippinen",
			PN: "Pitcairn",
			PL: "Polen",
			PT: "Portugal",
			PR: "Puerto Rico",
			QA: "Qatar",
			RE: "Reunion",
			RW: "Ruanda",
			RO: "Rumänien",
			RU: "Russland",
			LC: "Saint Lucia",
			ZM: "Sambia",
			AS: "Samoa",
			WS: "Samoa",
			SM: "San Marino",
			ST: "Sao Tome",
			SA: "Saudi Arabien",
			SE: "Schweden",
			CH: "Schweiz",
			SN: "Senegal",
			SC: "Seychellen",
			SL: "Sierra Leone",
			SG: "Singapur",
			SK: "Slowakei",
			SI: "Slowenien",
			SB: "Solomon Inseln",
			SO: "Somalia",
			GS: "Südgeorgien und die Südlichen Sandwichinseln",
			ES: "Spanien",
			LK: "Sri Lanka",
			SH: "St. Helena",
			KN: "St. Kitts Nevis Anguilla",
			PM: "St. Pierre und Miquelon",
			VC: "St. Vincent",
			KR: "Süd Korea",
			ZA: "Südafrika",
			SD: "Sudan",
			SR: "Surinam",
			SJ: "Svalbard und Jan Mayen Islands",
			SZ: "Swasiland",
			SY: "Syrien",
			TJ: "Tadschikistan",
			TW: "Taiwan",
			TZ: "Tansania",
			TH: "Thailand",
			TP: "Timor",
			TG: "Togo",
			TK: "Tokelau",
			TO: "Tonga",
			TT: "Trinidad Tobago",
			TD: "Tschad",
			CZ: "Tschechien",
			TN: "Tunesien",
			TR: "Türkei",
			TM: "Turkmenistan",
			TC: "Turks und Kaikos Inseln",
			TV: "Tuvalu",
			UG: "Uganda",
			UA: "Ukraine",
			HU: "Ungarn",
			UY: "Uruguay",
			UZ: "Usbekistan",
			VU: "Vanuatu",
			VA: "Vatikan",
			VE: "Venezuela",
			AE: "Ver. Arabische Emirate",	// Vereinigte Arabische Emirate
			US: "USA",
			VN: "Vietnam",
			VG: "Virgin Island (Brit.)",
			VI: "Virgin Island (USA)",
			WF: "Wallis et Futuna",
			BY: "Weissrussland",
			EH: "Westsahara",
			CF: "Zentralafrikanische Republik",
			ZW: "Zimbabwe",
			CY: "Zypern"
		};

		this.init();

		// this.runMutationObserver();

		// noinspection JSUnusedGlobalSymbols
		this.interval_tick_nr = 0;
		// noinspection JSUnusedGlobalSymbols
		this.interval_id = null;
		this.runInterval();
	}

	init()
	{
		// Stand: 2022-06-11
		let exampleHtml = `<div class="countries-game-overview_overviewWrongGuesses__K794O" style="height: 4.9375rem;">
	<div class="countries-game-overview_wrongGuesses__rS8j_" style="height: 4.9375rem; opacity: 1;"><h1
		class="countries-game-overview_wrongGuessesHeading__u5QOB">Already made guesses</h1>
		<div class="countries-game-overview_wrongGuessesFlags__7YiqE">
			<div class="countries-game-overview_wrongGuessesFlag__xq_M0" data-land="Tschechien"><img
				class="country-flag_flag__EOWp2" src="/static/flags/CZ.svg" alt="Czech Republic"></div>
			<div class="countries-game-overview_wrongGuessesFlag__xq_M0" data-land="Slowakei"><img
				class="country-flag_flag__EOWp2" src="/static/flags/SK.svg" alt="Slovakia"></div>
			<div class="countries-game-overview_wrongGuessesFlag__xq_M0" data-land="Polen"><img
				class="country-flag_flag__EOWp2" src="/static/flags/PL.svg" alt="Poland"></div>
		</div>
	</div>
</div>
		`;

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
		document.querySelectorAll('*[class^="countries-game-overview_wrongGuessesFlag__"]').forEach(this.setFlagCircleCountry.bind(this));

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
		let country_key = element.querySelector('img').getAttribute('src').match(/([A-Z]{2})\.[a-z]+$/)[1];
		let container = element/*.querySelector('.circle__content')*/;
		let newland;
		if(this.countries.hasOwnProperty(country_key)) {
			newland = this.countries[country_key];
		} else {
			newland = country_key;
		}
		if(newland !== container.dataset.land) {
			container.dataset.land = newland;
			// console.log("SET", container/*, newland*/);
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
				if(
					(mutation.target instanceof HTMLElement && mutation.target.classList.contains('guessed-flags'))
					||
					(mutation.previousSibling instanceof HTMLElement && mutation.previousSibling.classList.contains('guessed-flags'))
					||
					(mutation.nextSibling instanceof HTMLElement && mutation.nextSibling.classList.contains('guessed-flags'))
				) {
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
			attributes: true,
			childList : true,
			subtree   : true/*,
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
