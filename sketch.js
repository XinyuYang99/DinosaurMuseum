
/***********************************************************************************
  Dinosaur Museum
  by Xinyu Yang
------------------------------------------------------------------------------------
  This is a museum about basic dinosaurs' information and description. There is 8 kinds
  of dinosaurs and four categories. Each of the dinosaurs have the comparison to a normal 
  person. Some of the dinosaurs have the sound effects.

------------------------------------------------------------------------------------
  It uses functions like preload(), setup(), draw(), image(), sound() and anothers to 
  illustrate adobe XD's work to p5.js


***********************************************************************************/

// Array of images
var images = [];
var strings = [];
var midX;
var midY;
var startY;
var lineHeight = 24;
var drawFunction;
var gTextOffset = 40;
var labelWidth;
var labelHeight;
var labelX;
var backButton;

// Preload some images
function preload() {
  images[0] = loadImage('assets/CoverPage.png');
  images[1] = loadImage('assets/Dinosaurs.png');
  TriceratopsCover = loadImage('assets/TriceratopsCover.png');
  TyrannosaurusCover = loadImage('assets/TyrannosaurusCover.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // provide values for variables
  midX = width/2;
  midY = height/2;
  startY = height *7/11;
  labelWidth = 180;
  labelHeight = 60;
  labelX = labelWidth * 5/6;

  imageMode(CENTER);
  textAlign(CENTER);
  textSize(25);


  // load most of images now
  Back = loadImage('assets/Backbutton.png');
  Sound = loadImage('assets/Soundbutton.png');

  //Label Pictures
  Pterosauria = loadImage('assets/Pterosauria.png');
  Carnivorous = loadImage('assets/Carnivorous.png');
  Herbivorous = loadImage('assets/Herbivorous.png');
  Ichthyosauria = loadImage('assets/Ichthyosauria.png');

  // Room Perosauria Pictures
  Rhamphorhynchus = loadImage('assets/Rhamphorhynchus.png');
  Pterodactylus = loadImage('assets/Pterodactylus.png');
  Rhamphorhynchussize = loadImage('assets/Rhamphorhynchussize.png');
  Pterodactylussize = loadImage('assets/Pterodactylussize.png');

  // Room Carnivorours Pictures
  Tyrannosaurus = loadImage('assets/Tyrannosaurus.png');
  Tyrannosaurussize = loadImage('assets/Tyrannosaurussize.png');
  Allosaurus = loadImage('assets/Allosaurus.png');
  Allosaurussize = loadImage('assets/Allosaurussize.png');

  // Room Herbivorous Pictures
  Brachiosaurus = loadImage('assets/Brachiosaurus.png');
  Brachiosaurussize = loadImage('assets/Brachiosaurussize.png');
  Stegosaurus = loadImage('assets/Stegosaurus.png');
  Stegosaurussize = loadImage('assets/Stegosaurussize.png');

  // Room Ichthyosauria Pictures
  Liopleurodon = loadImage('assets/Liopleurodon.png');
  Liopleurodonsize = loadImage('assets/Liopleurodonsize.png');
  Ophthalmosaurus = loadImage('assets/Ophthalmosaurus.png');
  Ophthalmosaurussize = loadImage('assets/Ophthalmosaurussize.png');

  drawFunction = drawIntro;

  // Load sound file
  PterodactylSound = loadSound('assets/PterodactylSound.mp4');
  TyrannosaurusSound = loadSound('assets/TyrannosaurusSound.mp4');
  BrachiosaurusSound = loadSound('assets/BrachiosaurusSound.mp4');
  StegosaurusSound = loadSound('assets/StegosaurusSound.mp4');
  LiopleurodonSound = loadSound('assets/LiopleurodonSound.mp4');
}

function draw() {
  background(255);

  // call functions
  drawFunction();
}

// put the first preload image and Room Intro Pictures
drawIntro = function() {
  image(images[0], midX, midY, windowWidth, windowHeight);
  image(TriceratopsCover, TriceratopsCover.width / 2, height - (TriceratopsCover.height / 2), TriceratopsCover.height, TriceratopsCover.width);
  image(TyrannosaurusCover, width - (TyrannosaurusCover.width / 2), height - (TyrannosaurusCover.height / 2), TyrannosaurusCover.width, TyrannosaurusCover.height);

  fill(255,0,0);
  text ("Welcome! To the Jurassic World!", midX, midY);
  text ("Start your journal from here!", midX, midY + gTextOffset);

  if (frameCount % 60 != 0) {
    fill (58,34,34);
    text("Click anywhere to start", midX, height - gTextOffset);
  }
}

// put the second preload image and Label Pictures
drawCatalog = function() {
  image(images[1], midX, midY, windowWidth, windowHeight);
  backImage();
  image(Pterosauria, width / 6, labelHeight / 2, labelWidth, labelHeight);
  image(Carnivorous, width / 5, midY + 50, labelWidth, labelHeight);
  image(Herbivorous, midX + 150, midY + 150, labelWidth, labelHeight);
  image(Ichthyosauria, midX + 300, midY + 225, labelWidth, labelHeight);

  fill(255);
  text("Click buttons to check", midX, height - gTextOffset);

}

//put the Label Pictures and Room Perosauria Pictures
drawPerosauria = function() {
  backImage();
  buttonPosition1(Carnivorous);
  buttonPosition2(Herbivorous);
  buttonPosition3(Ichthyosauria);
  textPosition1("Rhamphorhynchus");
  textPosition2("Pterodactylus");
  dinoPosition1(Rhamphorhynchus);
  dinoPosition2(Pterodactylus);
  scalePosition1(Rhamphorhynchussize);
  scalePosition2(Pterodactylussize);

  fill(58, 34, 34);
  text("Click pictures to view more", midX, height - gTextOffset);
}

// put the Label Pictures and Room Carnivorous Pictures
drawCarnivorous = function() {
  backImage();
  buttonPosition1(Pterosauria);
  buttonPosition2(Herbivorous);
  buttonPosition3(Ichthyosauria);
  textPosition1("Tyrannosaurus");
  textPosition2("Allosaurus");
  dinoPosition1(Tyrannosaurus);
  dinoPosition2(Allosaurus);
  scalePosition1(Tyrannosaurussize);
  scalePosition2(Allosaurussize);

  fill(123, 102, 44);
  text("Click pictures to view more", midX, height - gTextOffset);
}

// put the Label Pictures and Room Herbivorous Pictures
drawHerbivorous = function() {
  backImage();
  buttonPosition1(Pterosauria);
  buttonPosition2(Carnivorous);
  buttonPosition3(Ichthyosauria);
  textPosition1("Brachiosaurus");
  textPosition2("Stegosaurus");
  dinoPosition1(Brachiosaurus);
  dinoPosition2(Stegosaurus);
  scalePosition1(Brachiosaurussize);
  scalePosition2(Stegosaurussize);

  fill(5, 89, 3);
  text("Click pictures to view more", midX, height - gTextOffset);
}

// put the Label Pictures and Room Ichthyosauria Pictures
drawIchthyosauria = function() {
  backImage();
  buttonPosition1(Pterosauria);
  buttonPosition2(Carnivorous);
  buttonPosition3(Herbivorous);
  textPosition1("Liopleurodon");
  textPosition2("Ophthalmosaurus");
  dinoPosition1(Liopleurodon);
  dinoPosition2(Ophthalmosaurus);
  scalePosition1(Liopleurodonsize);
  scalePosition2(Ophthalmosaurussize);

  fill(44, 118, 119);
  text("Click pictures to view more", midX, height - gTextOffset);
}

// put discription for Rhamphorhynchus
drawRhamphorhynchusDiscrip = function() {
  backImage();
  fill(112,112,112);
  let t = "Rhamphorhynchus, flying reptile found as fossils from the Late Jurassic Period in Europe that had a diamond-shaped rudder at its tip of its tail. Rhamphorhynchus was about 50 cm (20 inches) long, with a long skull and large eyes; the nostrils were set back on the beak. The teeth slanted forward and interlocked and were probably used to eat fish. The body was short, and each thin wing membrane stretched from a long fourth finger. The wing membrane probably attached near the hind limbs.";
  text (t, 150, 150, width - 350, height - 350 );
}

// put discription for Pterodactylus
drawPterodactylusDiscrip = function() {
  backImage();
  soundImage();
  fill(112,112,112);
  let t = "Pterodactyluswas a Pterosaur from late Jurassic Europe. A contemporary of Rhamphorhynchus, it was one of the first pterodactyloid pterosaurs in the world, and its' name is often confused with Pteranodon. Pterodactylus was a small reptile, hardly larger than a modern pigeon or crow. It still had teeth, but of a more uniform and smaller size than Rhamphorhynchus. Pterodactylus may have had a crest of skin on its head.";
  text (t, 150, 150, width - 350, height - 350 );
}

// put discription for Tyrannosaurus
drawTyrannosaurusDiscrip = function() {
  backImage();
  soundImage();
  fill(112,112,112);
  let t = "Tyrannosaurus lives up to its reputation as one of the most fearsome animals of all time. Its powerful jaws had 60 teeth, each one up to 20cm (8 inches) long and its bite was around 3 times as powerful than that of a lion. Tyrannosaurus would have used its good sense of smell to hunt live prey and locate dead bodies to scavenge. It would have been able to scare off any other scavengers, so it didn't have to shar.";
  text (t, 150, 150, width - 350, height - 350 );
}

// put discription for Allosaurus
drawAllosaurusDiscrip = function() {
  backImage();
  fill(112,112,112);
  let t = "Allosaurus, subsumes Antrodemus, large carnivorous dinosaurs that lived from 150 million to 144 million years ago during the Late Jurassic Period; they are best known from fossils found in the western United States, particularly from the Cleveland-Lloyd Quarry in Utah and the Garden Park Quarry in Colorado. Allosaurus weighed two tons and grew to 10.5 metres (35 feet) in length, although fossils indicate that some individuals could have reached 12 metres.";
  text (t, 150, 150, width - 350, height - 350 );
}

// put discription for Brachiosaurus
drawBrachiosaurusDiscrip = function() {
  backImage();
  soundImage();
  fill(112,112,112);
  let t = "Brachiosaurus is a member of the sauropod family and one of the most well known of all dinosaurs. It gets its name from the great height of its humerus, or upper arm bone - which is longer than most humans are tall. For almost a century, Brachiosaurus was considered the tallest of all dinosaurs, being over 13 metres tall. Since then, other dinosaurs have been discovered to have been taller.";  
  text (t, 150, 150, width - 350, height - 350 );
}

// put discription for Stegosaurus
drawStegosaurusDiscrip = function() {
  backImage();
  soundImage();
  fill(112,112,112);
  let t = "Stegosaurus, one of the various plated dinosaurs of the Late Jurassic Period recognizable by its spiked tail and series of large triangular bony plates along the back. Stegosaurus usually grew to a length of about 6.5 metres (21 feet), but some reached 9 metres (30 feet). The skull and brain were very small for such a large animal. The forelimbs were much shorter than the hind limbs, which gave the back a characteristically arched appearance. The feet were short and broad.";
  text (t, 150, 150, width - 350, height - 350 );
}

// put discription for Liopleurodon
drawLiopleurodonDiscrip = function() {
  backImage();
  soundImage();
  fill(112,112,112);
  let t = "Liopleurodon is a genus of large, carnivorous marine reptile belonging to the Pliosauroidea, a clade of the short-necked plesiosaurs. Two species of Liopleurodon, L. ferox and L. pachydeirus, lived during the Callovian stage of the Middle Jurassic Period (c. 160 million to 150 million years ago mya), while the third, L. rossicus, lived during the Late Jurassic. It was an apex predator of the Middle to Late Jurassic seas that covered Europe.";
  text (t, 150, 150, width - 350, height - 350 );
}

// put discription for Stegosaurus
drawOphthalmosaurusDiscrip = function() {
  backImage();
  fill(112,112,112);
  let t = "Ophthalmosaurus is a genus of ichthyosaur from the Middle to Late Jurassic of Europe, North America, and South America. It had a graceful, 16-20-foot (5-6-meter) long dolphin-like body, but had a tail like a shark's. Ophthalmosaurus had eye sockets that were about the size of coconuts, which makes it have some the largest eyes in the animal kingdom. It also means it could have hunted in deep, dark waters as well as shallow waters around coral reefs and islands.";
  text (t, 150, 150, width - 350, height - 350 );
}

function soundImage() {
  image(Sound, width - Sound.width/2, Sound.height/2, Sound.width, Sound.height);
}

function backImage() {
  image(Back, Back.width / 2, Back.height / 2, Back.width, Back.height);

}

function buttonPosition1(photo) {
  image(photo, labelX, labelHeight * 3.5, labelWidth, labelHeight);
}

function buttonPosition2(photo) {
  image(photo, labelX, labelHeight * 5.5, labelWidth, labelHeight);
}

function buttonPosition3(photo) {
  image(photo, labelX, labelHeight * 7.5, labelWidth, labelHeight);
}

function textPosition1(words) {
  fill(39,198,200);
  text(words, midX - 200, midY - 250);
}

function textPosition2(words) {
  fill(39,198,200);
  text(words, midX - 200, midY);
}

function dinoPosition1(photo) {
  image(photo, midX, midY - 150);
}

function dinoPosition2(photo) {
  image(photo, midX, midY + 150);
}

function scalePosition1(photo) {
  image(photo, width - 200, midY - 150);
}

function scalePosition2(photo) {
  image(photo, width - 200, midY + 150);
}

function playSound() {
  if (mouseX >= width - Sound.width && mouseY <= Sound.height) {
    print("playsound");
    return true;
  } 
  return false;
}

function goBack() {
  if (mouseX <= Back.width && mouseY <= Back.height) {
    return true;
  }
  return false;
}

// Pterosauria button pressed
function pterosauriaButton() {
  if (drawFunction === drawCatalog) {
    if (mouseX >= width/6 - labelWidth/2 && mouseX <= width/6 + labelWidth/2){
      if (mouseY <= labelHeight) {
        return true;
      }
    }
    return false;
  }
  else if (drawFunction === drawCarnivorous || drawFunction === drawHerbivorous ||drawFunction === drawIchthyosauria) {
    if (mouseX >= labelX - labelWidth / 2 && mouseX <= labelX + labelWidth / 2) {
      if (mouseY >= labelHeight * 3 && mouseY <= labelHeight *4) {
        return true;
      }
    }
    return false;
  }
}

// Carnivorous button pressed
function carnivorousButton() {
  if (drawFunction === drawCatalog) {
    if (mouseX >= width/5 - labelWidth/2 && mouseX <= width/5 + labelWidth/2){
      if (mouseY >= midY + 50 - labelHeight/2 && mouseY <= midY + 50 + labelHeight/2) {
        return true;
      }
    }
    return false;
  }
  else if (drawFunction === drawPerosauria) {
    if (mouseX >= labelX - labelWidth / 2 && mouseX <= labelX + labelWidth / 2) {
      if (mouseY >= labelHeight * 3 && mouseY <= labelHeight *4) {
        return true;
      }
    }
    return false;    
  }

  else if (drawFunction === drawHerbivorous ||drawFunction === drawIchthyosauria) {
    if (mouseX >= labelX - labelWidth / 2 && mouseX <= labelX + labelWidth / 2) {
      if (mouseY >= labelHeight * 5 && mouseY <= labelHeight * 6) {
        return true;
      }
    }
    return false;
  }
}

// Herbivorous button pressed 
function herbivorousButton() {
  if (drawFunction === drawCatalog) {
    if (mouseX >= midX + 150 - labelWidth/2 && mouseX <= midX + 150 + labelWidth/2){
      if (mouseY >= midY + 150 - labelHeight/2 && mouseY <= midY + 150 + labelHeight/2) {
        return true;
      }
    }
    return false;
  }

  else if (drawFunction === drawPerosauria || drawFunction === drawCarnivorous) {
    if (mouseX >= labelX - labelWidth / 2 && mouseX <= labelX + labelWidth / 2) {
      if (mouseY >= labelHeight * 5 && mouseY <= labelHeight * 6) {
        return true;
      }
    }
    return false;
  }

  else if (drawFunction === drawIchthyosauria) {
    if (mouseX >= labelX - labelWidth / 2 && mouseX <= labelX + labelWidth / 2) {
      if (mouseY >= labelHeight * 7 && mouseY <= labelHeight * 8) {
        return true;
      }
    }
    return false;
  }
}

// Ichthyosauria button pressed 
function ichthyosauriaButton() {
  if (drawFunction === drawCatalog) {
    if (mouseX >= midX + 300 - labelWidth/2 && mouseX <= midX + 300 + labelWidth/2){
      if (mouseY >= midY + 225 - labelHeight/2 && mouseY <= midY + 225 + labelHeight/2) {
        return true;
      }
    }
    return false;
  }

  else if (drawFunction === drawPerosauria || drawFunction === drawCarnivorous ||drawFunction === drawHerbivorous) {
    if (mouseX >= labelX - labelWidth / 2 && mouseX <= labelX + labelWidth / 2) {
      if (mouseY >= labelHeight * 7 && mouseY <= labelHeight * 8) {
        return true;
      }
    }
    return false;
  }
}

// dinoPosition1 picture pressed
function dino1() {
  if (mouseX >= midX - Rhamphorhynchus.width/2 && mouseX <= midX + Rhamphorhynchus.width/2) {
    if (mouseY >= midY - 150 - Rhamphorhynchus.height/2 && mouseY <= midY - 150 + Rhamphorhynchus.height/2) {
      return true;
    }
  }
  return false;
}

// dinoPosition2 picture pressed
function dino2() {
  if (mouseX >= midX - Rhamphorhynchus.width/2 && mouseX <= midX + Rhamphorhynchus.width/2) {
    if (mouseY >= midY + 150 - Rhamphorhynchus.height/2 && mouseY <= midY + 150 + Rhamphorhynchus.height/2) {
      return true;
    }
  }
  return false;
}

// Change the drawFunction variable use button
function mousePressed() {
  if (drawFunction === drawIntro) {
    drawFunction = drawCatalog;
  }

  else if (drawFunction === drawCatalog) {
    if (goBack()) {
      drawFunction = drawIntro;
    }
    else if (pterosauriaButton()){
      drawFunction = drawPerosauria;
    }
    else if (carnivorousButton()){
      drawFunction = drawCarnivorous;
    }
    else if (herbivorousButton()){
      drawFunction = drawHerbivorous;
    }
    else if (ichthyosauriaButton()){
      drawFunction = drawIchthyosauria;
    }  
  }

  else if (drawFunction === drawPerosauria) {
    if (goBack()) {
      drawFunction = drawCatalog;
    }
    else if (carnivorousButton()){
      drawFunction = drawCarnivorous;
    }
    else if (herbivorousButton()){
      drawFunction = drawHerbivorous;
    }
    else if (ichthyosauriaButton()){
      drawFunction = drawIchthyosauria;
    } 
    else if (dino1()) {
      drawFunction = drawRhamphorhynchusDiscrip;
    }
    else if (dino2()) {
      drawFunction = drawPterodactylusDiscrip;
    }
  }

  else if (drawFunction === drawCarnivorous) {
    if (goBack()) {
      drawFunction = drawCatalog;
    }
    else if (pterosauriaButton()){
      drawFunction = drawPerosauria;
    }
    else if (herbivorousButton()){
      drawFunction = drawHerbivorous;
    }
    else if (ichthyosauriaButton()){
      drawFunction = drawIchthyosauria;
    }  
    else if (dino1()) {
      drawFunction = drawTyrannosaurusDiscrip;
    }
    else if (dino2()) {
      drawFunction = drawAllosaurusDiscrip;
    }
  }

  else if (drawFunction === drawHerbivorous) {
    if (goBack()) {
      drawFunction = drawCatalog;
    }
    else if (pterosauriaButton()){
      drawFunction = drawPerosauria;
    }
    else if (carnivorousButton()){
      drawFunction = drawCarnivorous;
    }
    else if (ichthyosauriaButton()){
      drawFunction = drawIchthyosauria;
    }  
    else if (dino1()) {
      drawFunction = drawBrachiosaurusDiscrip;
    }
    else if (dino2()) {
      drawFunction = drawStegosaurusDiscrip;
    }
  }

  else if (drawFunction === drawIchthyosauria) {
    if (goBack()) {
      drawFunction = drawCatalog;
    }
    else if (pterosauriaButton()){
      drawFunction = drawPerosauria;
    }
    else if (carnivorousButton()){
      drawFunction = drawCarnivorous;
    }
    else if (herbivorousButton()){
      drawFunction = drawHerbivorous;
    }
    else if (dino1()) {
      drawFunction = drawLiopleurodonDiscrip;
    }
    else if (dino2()) {
      drawFunction = drawOphthalmosaurusDiscrip;
    }
  }

  else if (drawFunction === drawRhamphorhynchusDiscrip) {
    if (goBack()) {
      drawFunction = drawPerosauria;
    }
  }

  else if (drawFunction === drawPterodactylusDiscrip) {
    if (goBack()) {
      PterodactylSound.stop();
      drawFunction = drawPerosauria;
    }
    else if (playSound()) {
      PterodactylSound.play();
    }
  }

  else if (drawFunction === drawTyrannosaurusDiscrip) {
    if (goBack()) {
      TyrannosaurusSound.stop();
      drawFunction = drawCarnivorous;
    }
    else if (playSound()) {
      TyrannosaurusSound.play();
    }
  }

  else if (drawFunction === drawAllosaurusDiscrip) {
    if (goBack()) {
      drawFunction = drawCarnivorous;
    }
  }

  else if (drawFunction === drawBrachiosaurusDiscrip) {
    if (goBack()) {
      BrachiosaurusSound.stop();
      drawFunction = drawHerbivorous;
    }
    else if (playSound()) {
      BrachiosaurusSound.play();
    }
  }

  else if (drawFunction === drawStegosaurusDiscrip) {
    if (goBack()) {
      StegosaurusSound.stop();
      drawFunction = drawHerbivorous;
    }
    else if (playSound()) {
      StegosaurusSound.play();
    }
  }

  else if (drawFunction === drawLiopleurodonDiscrip) {
    if (goBack()) {
      LiopleurodonSound.stop();
      drawFunction = drawIchthyosauria;
    }
    else if (playSound()) {
      LiopleurodonSound.play();
    }
  }

  else if (drawFunction === drawOphthalmosaurusDiscrip) {
    if (goBack()) {
      drawFunction = drawIchthyosauria;
    }
  }
}