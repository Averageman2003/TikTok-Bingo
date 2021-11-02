const list =
["Furry",
"Fur-suit",
"Neko",
"Weeb",
"Anime",
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
"Hyper active",
"Boomer",
"Amogus",
"Snap-back",
"Braces",
"Religion",
"Cross dressing",
"Sex toys",
"Gangster",
"Demonic",
"Joker",
"Hot Pink",
"Tomboy",
"Femboy",
"Too close",
"Balding/Bald",
"Feral/Otherkin",
"High-pitch voice",
"Neck-beard",
"Soyboy",
"Ring tone",
"Ear rape",
"Cringe cat filter",
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
"India",
"Wholesome",
"Gamer girl",
"Politics",
"Glow up",
"Mc Donalds",
"White Castle",
"Star Bucks",
"Dunkin Donuts",
"Red-neck",
"Shirtless",
"Twerking",
"Police",
"Vegan",
"Kissing",
"Missing Teeth",
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
