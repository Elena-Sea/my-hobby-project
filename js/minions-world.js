'use strict';

// list of minions (can be in separate file, I'll do it later) 

const minionHeroes = [
  {
    name: 'Lucy Wilde',
    image: '../images/lucy-wild.webp',
	role: 'Positive hero',
	occupation: 'Agent at the Anti-Villain League',
	webpage: 'https://despicableme.fandom.com/wiki/Lucy_Wilde',
	films: ['Despicable Me 2', 'Despicable Me 3'],
	gender: 'Female',
	origin: 'Human',
  },
  {
    name: 'Felonius Gru',
    image: '../images/Gru.webp',
	role: 'Positive hero',
	occupation: 'Supervillain in past and Anti-Villain League agent currently',
	webpage: 'https://despicableme.fandom.com/wiki/Felonius_Gru',
	films: ['Despicable Me','Despicable Me 2', 'Despicable Me 3', 'Home Makeover', 'Despicable Me: Minion', 'Mayhem', 'Puppy', 'Minions', 'Saturday Morning Minions', 'Minions: The Rise of Gru', 'Despicable Me 4'],
	gender: 'Male',
	origin: 'Human',
  },
  {
    name: 'Edith Gru',
    image: './images/ali-opt.jpeg',
	role: 'Positive hero',
	occupation: 'The adopted middle child of Felonius Gru and Lucy Wilde',
	webpage: 'https://despicableme.fandom.com/wiki/Edith_Gru',
	films: ['Despicable Me','Despicable Me 2', 'Despicable Me 3', 'Home Makeover', 'Despicable Me: Minion', 'Mayhem', 'Puppy', 'Training Wheels', 'Minion Scouts'],
	  gender: 'Female',
	origin: 'Human',
	},
  {
    name: 'Agnes Gru',
    image: './images/ali-opt.jpeg',
	role: 'Positive hero',
	occupation: 'The adopted youngest daughter of Felonius Gru and Lucy Wilde',
	webpage: 'https://despicableme.fandom.com/wiki/Agnes_Gru',
	films: ['Despicable Me','Despicable Me 2', 'Despicable Me 3', 'Home Makeover', 'Despicable Me: Minion', 'Mayhem', 'Puppy', 'Training Wheels', 'Minion Scouts'],
	  gender: 'Female',
	origin: 'Human',
	},
  {
    name: 'Margo Gru',
    image: './images/ali-opt.jpeg',
	role: 'Positive hero',
	occupation: 'The adopted eldest child of Felonius Gru and Lucy Wilde',
	webpage: 'https://despicableme.fandom.com/wiki/Margo_Gru',
	films: ['Despicable Me','Despicable Me 2', 'Despicable Me 3', 'Home Makeover', 'Despicable Me: Minion', 'Puppy', 'Training Wheels', 'Minion Scouts'],
	  gender: 'Female',
	origin: 'Human',
	},
  {
    name: 'Vector',
    image: './images/ali-opt.jpeg',
	role: 'Villian',
	occupation: 'Supervillain with both Direction and Magnitude',
	webpage: 'https://despicableme.fandom.com/wiki/Vector',
	films: ['Despicable Me', 'Rush', 'Despicable Me: Minion'],
	  gender: 'Male',
	origin: 'Human',
	},
  {
    name: 'Robert Gru',
    image: './images/ali-opt.jpeg',
	role: 'Villian',
	occupation: 'Legendary Supervillain',
	webpage: 'https://despicableme.fandom.com/wiki/Robert_Gru',
	films: ['Despicable Me'],
	  gender: 'Male',
	origin: 'Human',
	},
  {
    name: 'Dru Gru',
    image: './images/ali-opt.jpeg',
	role: 'Villian',
	occupation: 'Supervillain',
	webpage: 'https://despicableme.fandom.com/wiki/Dru_Gru',
	films: ['Despicable Me 3'],
	  gender: 'Male',
	origin: 'Human',
	},
  {
    name: 'Scarlet Overkill',
    image: './images/ali-opt.jpeg',
	role: 'Villian',
	occupation: 'Supervillain',
	webpage: 'https://despicableme.fandom.com/wiki/Scarlet_Overkill',
	films: 'Minions',
	  gender: 'Female',
	origin: 'Human',
	},
  {
    name: 'Herb Overkill',
    image: './images/ali-opt.jpeg',
	role: 'Villian',
	occupation: 'Supervillain genius and Inventor',
	webpage: 'https://despicableme.fandom.com/wiki/Herb_Overkill',
	films: 'Minions',
	  gender: 'Male',
	origin: 'Human',
	},
  {
    name: 'Bob',
    image: './images/ali-opt.jpeg',
	role: 'Minion',
	occupation: 'Henchman',
	webpage: 'https://despicableme.fandom.com/wiki/Bob',
	films: ['Despicable Me 2', 'Minions Paradise', 'Minions', 'Santa Little Helpers', 'Minions: The Rise of Gru'],
	gender: 'Male',
	origin: 'Yellow creature',
	},
  {
    name: 'Dave',
    image: './images/ali-opt.jpeg',
	role: 'Minion',
	occupation: 'Henchman',
	webpage: 'https://despicableme.fandom.com/wiki/Dave',
	films: ['Despicable Me','Despicable Me 2', 'Despicable Me 3', 'Home Makeover', 'Despicable Me: Minion', 'Puppy', 'Minions', 'Minions Paradise', 'Orientation Day', 'Minions: The Rise of Gru'],
	gender: 'Male',
	origin: 'Yellow creature',
	},
  {
    name: 'Kevin',
    image: './images/ali-opt.jpeg',
	role: 'Minion',
	occupation: 'Henchman',
	webpage: 'https://despicableme.fandom.com/wiki/Kevin_(Despicable_Me_2)',
	films: ['Despicable Me', 'Despicable Me 2', 'Despicable Me 3', 'Home Makeover', 'Despicable Me: Minion', 'Puppy', 'Minions', 'Orientation Day', 'Minions: The Rise of Gru', 'Training Wheels'],
	gender: 'Male',
	origin: 'Yellow creature',
	},
  {
    name: 'Stuart',
    image: './images/ali-opt.jpeg',
	role: 'Minion',
	occupation: 'Henchman',
	webpage: 'https://despicableme.fandom.com/wiki/Stuart',
	films: ['Despicable Me', 'Despicable Me 2', 'Despicable Me 3', 'Home Makeover', 'Despicable Me: Minion', 'Puppy', 'Minions', 'Orientation Day', 'Minions: The Rise of Gru'],
	gender: 'Male',
	origin: 'Yellow creature',
	},
  {
    name: 'Jerry',
    image: './images/ali-opt.jpeg',
	role: 'Minion',
	occupation: 'Henchman',
	webpage: 'https://despicableme.fandom.com/wiki/Jerry_(Despicable_Me)',
	films: ['Despicable Me', 'Home Makeover', 'Despicable Me 3', ],
	gender: 'Male',
	origin: 'Yellow creature',
	},
  {
    name: 'Tom',
    image: './images/ali-opt.jpeg',
	role: 'Minion',
	occupation: 'Henchman',
	webpage: 'https://despicableme.fandom.com/wiki/Tom',
	films: ['Despicable Me', 'Despicable Me 2', 'Despicable Me 3', 'Minions Paradise'],
	gender: 'Male',
	origin: 'Yellow creature',
	},
  {
    name: 'Dr. Nefario',
    image: './images/ali-opt.jpeg',
	role: 'Positive hero',
	occupation: 'Gru gadget man and Owner of Criminal Records in past',
	webpage: 'https://despicableme.fandom.com/wiki/Felonius_Gru',
	films: ['Despicable Me','Despicable Me 2', 'Despicable Me 3', 'Minions', 'Minions: The Rise of Gru'],
	gender: 'Male',
	origin: 'Human',
  },
  {
    name: 'Ken',
    image: './images/ali-opt.jpeg',
	role: 'Minion',
	occupation: 'Henchman',
	webpage: 'https://despicableme.fandom.com/wiki/Ken',
	films: 'Minions: The Rise of Gru',
	gender: 'Male',
	origin: 'Yellow creature',
	},
  {
    name: 'Otto',
    image: './images/ali-opt.jpeg',
	role: 'Minion',
	occupation: 'Henchman',
	webpage: 'https://despicableme.fandom.com/wiki/Otto',
	films: 'Minions: The Rise of Gru',
	gender: 'Male',
	origin: 'Yellow creature',
	},
];


// main code 

const ref = {
	minionsGallery: document.querySelector(".minions-gallery"),
	selectorMinions: document.querySelector("#minions"),
	selectorCountry: document.querySelector("#country"),
	selectorGender: document.querySelector("#gender"),
	selectorGenderIcon: document.querySelectorAll('.range__icon'),
	selectorGenderMan: document.querySelector('.range__icon--man'),
	selectorGenderBoth: document.querySelector('.range__icon--both'),
	selectorGenderWoman: document.querySelector('.range__icon--woman'),
}

function markupGallery(minionHeroes) { 
	ref.minionsGallery.innerHTML = "";
    ref.minionsGallery.insertAdjacentHTML('beforeend', minionHeroes.map(minionHero => { 
        return `<li class="minion-card">
                    <div class="minion-card__thumb">
                        <img class="minion-card__image" src="${minionHero.image}" width="200" alt="${minionHero.name} photo"/>
                        <div class="minion">
                            <h3 class="minion__name">${minionHero.name.toUpperCase()}</h3>
                            <p class="minion__role">${minionHero.role}</p>
							<p class="minion__function">${minionHero.occupation}</p>
                            <ul class="minion__links">
                                <li class="minion-link">
                                    <a href="${minionHero.webpage}" class="minion-link__link">
                                    <svg class="minion-link__icon" width="32" height="32">
                                        <use href="./images/sprite-minions.svg#icon-arrow-right2"></use>
                                    </svg>
                                    </a>
                                </li>
								
                            </ul>
                        </div>
                    </div>
                </li>`
    }).join('')
    );
}

markupGallery(minionHeroes);


function showMinions() { 
	if (ref.selectorMinions.value === "talented") {
		let seniorMinions = [];
		minions.forEach(function(minion) { 
			if (minion.role === 'Senior minion') { 
				seniorMinions.push(minion);
			}
		});
		markupTeamGallery(seniorMinions);
	} else if (ref.selectorMinions.value === "senior") {
		let talentedMinions = [];
		minions.forEach(function(minion) { 
			if (minion.role === 'Talented minion') { 
				talentedMinions.push(minion);
			}
		});
		markupTeamGallery(talentedMinions);
	} else { 
		markupTeamGallery(minions);
	}
}

ref.selectorMinions.addEventListener("change", showMinions, false);


function showMinionsByCountry() { 

	if (ref.selectorCountry.value === "afghanistan") {
		let minionsFromA = [];
		minions.forEach(function(minion) { 
			if (minion.country === 'Afghanistan') { 
				minionsFromA.push(minion);
			}
		});
		markupTeamGallery(minionsFromA);
	} else if (ref.selectorCountry.value === "indonesia") {
		let minionsFromIns = [];
		minions.forEach(function(minion) { 
			if (minion.country === 'Indonesia') { 
				minionsFromIns.push(minion);
			}
		});
		markupTeamGallery(minionsFromIns);
	} else if (ref.selectorCountry.value === "india") {
		let minionsFromInd = [];
		minions.forEach(function(minion) { 
			if (minion.country === 'India') { 
				minionsFromInd.push(minion);
			}
		});
		markupTeamGallery(minionsFromInd);
	} else if (ref.selectorCountry.value === "switzerland") {
		let minionsFromSw = [];
		minions.forEach(function(minion) { 
			if (minion.country === 'Switzerland') { 
				minionsFromSw.push(minion);
			}
		});
		markupTeamGallery(minionsFromSw);
	} else if (ref.selectorCountry.value === "syria") {
		let minionsFromSr = [];
		minions.forEach(function(minion) { 
			if (minion.country === 'Syria') { 
				minionsFromSr.push(minion);
			}
		});
		markupTeamGallery(minionsFromSr);
	} else if (ref.selectorCountry.value === "turkey") {
		let minionsFromT = [];
		minions.forEach(function(minion) { 
			if (minion.country === 'Turkey') { 
				minionsFromT.push(minion);
			}
		});
		markupTeamGallery(minionsFromT);
	} else if (ref.selectorCountry.value === "ukraine") {
		let minionsFromU = [];
		minions.forEach(function(minion) { 
			if (minion.country === 'Ukraine') { 
				minionsFromU.push(minion);
			}
		});
		markupTeamGallery(minionsFromU);
	} else { 
			markupTeamGallery(minions);
	}
}

ref.selectorCountry.addEventListener("change", showMinionsByCountry, false);

function showMinionsByGender() { 
	
	ref.selectorGenderIcon[0].classList.remove('range__icon--changed');
	ref.selectorGenderIcon[1].classList.remove('range__icon--changed');
	ref.selectorGenderIcon[2].classList.remove('range__icon--changed');
	if (ref.selectorGender.value === "100") {
		ref.selectorGenderIcon[2].classList.add('range__icon--changed');
		let femaleMinions = [];
		minions.forEach(function(minion) { 
			if (minion.gender === 'female') { 
				femaleMinions.push(minion);
			}
		});
		markupTeamGallery(femaleMinions);

	} else if (ref.selectorGender.value === "0") {
ref.selectorGenderIcon[0].classList.add('range__icon--changed');		let maleMinions = [];
		minions.forEach(function(minion) { 
			if (minion.gender === 'male') { 
				maleMinions.push(minion);
			}
		});
		markupTeamGallery(maleMinions);

	} else {
		ref.selectorGenderIcon[1].classList.add('range__icon--changed');
		markupTeamGallery(minions);
	} 
}

ref.selectorGender.addEventListener("change", showMinionsByGender, false);



 
	let cardTarget = document.querySelector('.minion-card');
	let cardTargetById = document.getElementById('.minion-card');

    console.log(cardTarget);
    // console.log(cellTarget.closest('.minion-card'));


	(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();