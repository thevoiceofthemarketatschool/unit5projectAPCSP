let listofwords = ["minecraft","steve","alex","herobrine","otherside","mellohi","terraria","iron","stick","gold","diamond","leather","emerald","redstone","lapis","netherite","copper","coal","charcoal","amethyst","quartz","birch","oak","diorite","mangrove","magma","resin","sword","pickaxe","axe","shovel","hoe","allay","armadillo","axolotl","bat","bee","camel","cat","pigstep","chicken","cod","cow","dolphin","donkey","drowned","enderman","fox","frog","goat","golem","horse","mooshroom","mule","ocelot","parrot","pig","pufferfish","rabbit","salmon","sheep","sniffer","spider","squid","strider","tadpole","turtle","villager","llama","panda","piglin","wolf","blaze","bogged","breeze","creaking","creeper","guardian","endermite","evoker","ghast","hoglin","husk","phantom","pillager","ravager","shulker","silverfish","skeleton","slime","stray","vex","vindicator","warden","witch","zoglin","zombie","dragon","wither","ocean","forest","taiga","jungle","swamp","plains","desert","savanna","caves","void","nether","end","button","door","glass","pane","comparator","repeater","torch","lodestone","sandstone","banner","carpet","sign","leaves","bed","terracotta","concrete","sapling","stairs","trapdoor","wood","bricks","loom","planks","candle","fence","slab","stone","dirt","flowers","bamboo","cactus","fern","poppy","grass","rose","andesite","basalt","tuff","beacon","glowstone","lantern","shroomlight","rail","dispenser","hopper","lever","observer","piston","target","tripwire","anvil","barrel","furnace","composter","craft","mine","chest","grindstone","jukebox","lecturn","smoker","book","bookshelf","chain","chainmail","skyblock","obsidian","ice","prismarine","purpur","wool","sand","snow","netherrack","mushroom","chorus","bone","portal","spawner","deepslate","skulk","tnt","barrier","dripleaf","coral","kelp","vine","honey","egg","fire","boat","crossbow","potato","potion","string","bow","carrot","bucket","dye","bundle","bread","compass","cookie","elytra","helmet","chestplate","boots","leggings","disc","armor","mace","stew","sugar","wheat","steak","shield","pie","feather","enchant"]

//these are variables
let playagain:boolean = true
let failures: number = null
let randomentry = null
let knownthusfar: string[] = null
let knownfull: string = null
let succeeded:boolean = null
//this text explains the game rules.
game.showLongText("This is a guessing game. It's hangman style, so you guess one letter at a time, and you can only get the letters wrong 6 times, and you fail on the seven. Only single words at a time, all lowercase, nouns only, and here's the kicker: its minecraft themed. Anything that would be 2 words has been shortened to 1.", DialogLayout.Bottom)
// this function takes a string array and combines all the elements into one word, then returns it.
function calculateknown(model:string[]){
    let output = ""
    for (let i = 0; i < model.length; i++) {
        output = output + model[i]
    }
    return output
}
//everything is in a while loop so that you can play the game again without being explained the rules again. 
while(playagain) {
    succeeded = false
    failures = 0
    
    // this chooses a random entry in the array for the player to guess
    randomentry = listofwords[randint(0,listofwords.length-1)]
    
    //this creates the string array of unknown letters to later be modified as they find letters
    knownthusfar = []
    for (let i = 0;i < randomentry.length;i++){
        knownthusfar.push("_")
    }
    knownfull = calculateknown(knownthusfar)
    //the conditions of the loop cause it to stop asking you for guesses once youve run out of guesses or guessed all the letters
    while (failures<7 && !succeeded) {
        let matches = 0
        //this asks for a guess and stores it in a variable
        let guess = game.askForString(knownfull,1)
        
        //this compares their guess to each individual letter of the answer
        for(let i = 0;i<listofwords.length;i++) {
            if (randomentry.charAt(i) == guess){
                knownthusfar[i] = randomentry.charAt(i)
                knownfull = calculateknown(knownthusfar)
                matches++
                }
            }
        
        //this checks if their guess was in the word, and increases failures if not 
        if (matches < 1){
            failures++
            game.splash("Wrong, " + (7-failures) + " guesses left.")
        }
        
        //this prompts the player to play again if they succeed, and also ends the questioning loop
        if (knownfull == randomentry){
            playagain = game.ask("Correct! play again?")
            succeeded = true
        }
    }
    //this tells the player they lost if they run out of guesses, and prompt them to play again.
    if (failures > 6) {
        game.splash("dang, it looks like you got it wrong.")
        game.splash("your word was: "+randomentry+"!")
        playagain = game.ask("play again?")
    }
}
game.splash("OK, enjoy some random sounds, lol.")
game.onUpdateInterval(100, function () { music.play(music.randomizeSound(music.createSoundEffect(WaveShape.Noise, randint(200, 5000), randint(200, 5000), randint(20, 100), randint(20, 100), randint(200,1000), SoundExpressionEffect.None, InterpolationCurve.Linear)), music.PlaybackMode.UntilDone)})
