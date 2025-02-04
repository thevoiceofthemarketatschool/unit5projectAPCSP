let listofwords = ["minecraft","iron","gold","diamond","emerald","redstone","lapis","netherite","copper","sword","pickaxe","axe","shovel","hoe","pig","golem","cat","wolf"]

// south of this line is stella's territory
let playagain:boolean = true
game.showLongText("This is a guessing game. It's hangman style, so you guess one letter at a time, and you can only get the letters wrong 6 times, and you fail on the seven. Only single words at a time, all lowercase, nouns only, and here's the kicker: its minecraft themed. Anything that would be 2 words has been shortened to 1.", DialogLayout.Bottom)
while(playagain) {
    let failures:number = 0
    let randomentry = listofwords[randint(0,listofwords.length-1)]
    let knownthusfar:string[] = []
    for (let i = 0;i < randomentry.length;i++){
        knownthusfar.push("_")
    }
    while (failures<7) {
        for(let i = 0;i<listofwords.length;i++) {
            
        }
    }
}
