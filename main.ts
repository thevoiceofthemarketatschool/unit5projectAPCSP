let listofwords = ["minecraft","iron","gold","diamond","emerald","redstone","lapis","netherite","copper","sword","pickaxe","axe","shovel","hoe","pig","golem","cat","wolf"]

// south of this line is stella's territory
let playagain:boolean = true
let failures: number = null
let randomentry = null
let knownthusfar: string[] = null
let knownfull: string = null
game.showLongText("This is a guessing game. It's hangman style, so you guess one letter at a time, and you can only get the letters wrong 6 times, and you fail on the seven. Only single words at a time, all lowercase, nouns only, and here's the kicker: its minecraft themed. Anything that would be 2 words has been shortened to 1.", DialogLayout.Bottom)
while(playagain) {
    failures = 0
    randomentry = listofwords[randint(0,listofwords.length-1)]
    knownthusfar = []
    for (let i = 0;i < randomentry.length;i++){
        knownthusfar.push("_")
    }
    //testing {
    game.splash(randomentry)
    knownfull = ""
    for (let i = 0;i<knownthusfar.length;i++) {
        knownfull = knownfull + knownthusfar[i]
    }
    game.splash(knownfull)
    // }
    while (failures<7) {
        for(let i = 0;i<listofwords.length;i++) {
            
        }
    }
}
