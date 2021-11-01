const list =
["Furry",
"Fur-suit",
"Neko",
"Weeb",
"Brony",
"Granny",
"Grandpa",
"Uncle",
"Mother",
"Father",
"Family",
"Sports",
"Karen",
"Emo",
"Demonic",
"Self-harm",
"Body implants",
"Fetish",
"Poop",
"Farting",
"Pregnancy",
"Pet-play",
"Obese",
"Extremely young",
"Diaper",
"Faker",
"Crime",
"Abuse",
"Death",
"Crack head",
"Alcohol",
"Drugs",
"Child predator",
"Racism",
"England",
"Austrailia",
"Brazil",
"India",
"Russia",
"Wholesome",
"Gamer girl",
"Politics",
"Glow up",
"Mc Donalds",
"Burger King",
"KFC",
"White Castle",
"Star Bucks",
"Dunkin Donuts",
"Red-neck",
"Shirtless",
"Twerking",
"Kissing",
"Trashy bedroom",
"Pronouns",
"Vibrant hair",
"Trigger Warning",
"Mask",
"Covid-19",
"Fortnite",
"Minecraft",
"Roblox",];

function AddItem(title) {
  var btn = document.createElement("BUTTON");
  btn.innerHTML = title;
  document.getElementById("grid").appendChild(btn).addEventListener("click", function() {
    btn.style.background = "yellow";
    console.log("clicked", btn);
  })
}


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
