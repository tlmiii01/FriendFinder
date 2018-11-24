function findBestMatch(friends, currentFriend) {
    var bestMatch;
    // 50 is larger than the least compatible friend.
    var matchScore = 50;

    // Cycle through all of the friends and calculate the differentials
    for (friend of friends) {
        let currentScore = 0;
        for (let i = 0; i < 10; ++i) {
            currentScore += Math.abs(friend.scores[i] - currentFriend.scores[i]);
        }
        // If the friend being evaluated is a closer match, swap with the current friend
        if (currentScore < matchScore) {
            matchScore = currentScore;
            bestMatch = friend;
        }
    }
    return {
        "name": bestMatch.name,
        "photo": bestMatch.photo
    }  
}

module.exports = findBestMatch;