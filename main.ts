let listofwords = ["minecraft","iron","gold","diamond","emerald","redstone","lapis","netherite","copper","sword","pickaxe","axe","shovel","hoe","allay","armadillo","axolotl","bat","bee","camel","cat","chicken","cod","cow","dolphin","donkey","drowned","enderman","fox","frog","goat","golem","horse","mooshroom","mule","ocelot","parrot","pig","pufferfish","rabbit","salmon","sheep","sniffer","spider","squid","strider","tadpole","turtle","villager"]
let listofdead = ["agent","batato"]


// south of this line is stella's territory
let playagain:boolean = true
let failures: number = null
let randomentry = null
let knownthusfar: string[] = null
let knownfull: string = null
let succeeded:boolean = null

game.showLongText("This is a guessing game. It's hangman style, so you guess one letter at a time, and you can only get the letters wrong 6 times, and you fail on the seven. Only single words at a time, all lowercase, nouns only, and here's the kicker: its minecraft themed. Anything that would be 2 words has been shortened to 1.", DialogLayout.Bottom)
function calculateknown(model:string[]){
    let output = ""
    for (let i = 0; i < model.length; i++) {
        output = output + model[i]
    }
    return output
}
while(playagain) {
    succeeded = false
    failures = 0
    randomentry = listofwords[randint(0,listofwords.length-1)]
    knownthusfar = []
    for (let i = 0;i < randomentry.length;i++){
        knownthusfar.push("_")
    }
    //testing {
    game.splash(randomentry)
    knownfull = calculateknown(knownthusfar)
    game.splash(knownfull)
    // }
    while (failures<7 && !succeeded) {
        let matches = 0
        let guess = game.askForString(knownfull,1)
        for(let i = 0;i<listofwords.length;i++) {
            if (randomentry.charAt(i) == guess){
                knownthusfar[i] = randomentry.charAt(i)
                knownfull = calculateknown(knownthusfar)
                matches++
                }
            }
        if (matches < 1){
            failures++
            game.splash("Wrong, " + (7-failures) + " guesses left.")
        }
        if (knownfull == randomentry){
            playagain = game.ask("Correct! play again?")
            succeeded = true
        }
    }
    if (failures > 6) {
        game.splash("dang, it looks like you got it wrong.")
        playagain = game.ask("play again?")
    }
}   

