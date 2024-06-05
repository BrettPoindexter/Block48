function deckRevealedIncreasing(deck) {
    deck.sort((a, b) => b - a);
    
    let result = [];
    
    for (let card of deck) {
        if (result.length > 0) {
            result.unshift(result.pop());
        }
        result.unshift(card);
    }
    
    return result;
}

const deck = [17, 13, 11, 2, 3, 5, 7];
console.log(deckRevealedIncreasing(deck));