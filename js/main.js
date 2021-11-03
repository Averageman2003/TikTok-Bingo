//List of all possible items that can appear on the card
const list =
["Furry",
"Fur-suit",
"Neko",
"Weeb",
"Anime",
"Brony",
"Body fluids",
"Granny",
"Family",
"Sports",
"Karen",
"Emo",
"Hyper active",
"Boomer",
"Amogus",
"Snap-back",
"Braces",
"Christian",
"Cross dressing",
"Sex toys",
"Gangster",
"Demonic",
"Joker",
"Baby",
"Hot Pink",
"Tomboy",
"Femboy",
"Too close",
"Balding/ Bald",
"Feral/ Otherkin",
"High-pitch voice",
"Neck-beard",
"Ring tone",
"Ear rape",
"Edgy filter",
"Self-harm",
"Body moddifications",
"Fetish",
"Poop",
"Farting",
"Pregnancy",
"Obese",
"Under 13",
"Diaper",
"Lying",
"Theft",
"Abuse",
"Death",
"Maid outfit",
"Bullying",
"Prune face/ Wrinkly",
"Crack head",
"Singing without music",
"Anti-vax",
"Pretending to be tough",
"School",
"Addiction",
"Alcohol",
"Drugs",
"Child predator",
"Racism",
"India",
"Wholesome",
"Gamer girl",
"Politics",
"Glow up",
"Fast food",
"Overly sexualized",
"Red-neck",
"Shirtless",
"Twerking",
"Vampire",
"Police",
"Vegan",
"Chest hair",
"Face stretching",
"Kissing",
"Missing Teeth",
"Trashy bedroom",
"Pronouns",
"Vibrant hair",
"Trigger Warning",
"Fake disabilities",
"Mask",
"Covid-19",
"Cos-play",
"Genuinely funny",
"Fortnite",
"Minecraft",
"Roblox",];

//creates buttons
function AddItem(title) {
  var btn = document.createElement("BUTTON");
  btn.innerHTML = title;
  btn.classList.add('button');
  document.getElementById("grid").appendChild(btn).addEventListener("click", function() {
    if ( btn.classList.contains('button') ) {
      btn.classList.remove('button');
      btn.classList.add('button-highlighted');
    } else if ( btn.classList.contains('button-highlighted') ) {
      btn.classList.remove('button-highlighted');
      btn.classList.add('button');
    }
    console.log("clicked", btn);
  })
}

//generates a randomized list of items for the new card
function GenerateList() {
  let templist = list;
  let newlist = [];
  for (let i = 0; i < 25; i++) {
    if (i == 12) {
      newlist.push("FREE SPACE");
    } else {
      let newitem = Math.floor(Math.random() * (templist.length - 0));
      newlist.push(templist[newitem]);
      if (newitem > -1) {
        templist.splice(newitem, 1);
      }
    }
  }
  for (let i = 0; i < newlist.length; i++) {
    AddItem(newlist[i]);
  }
}

GenerateList();
