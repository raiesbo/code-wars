// Dubstep


const songDecoder = song => song.split("WUB").join(' ').replace(/\s+/g, ' ').trim();


songDecoder("AWUBBWUBC") // "A B C","WUB should be replaced by 1 space"
songDecoder("AWUBWUBWUBBWUBWUBWUBC") // "A B C","multiples WUB should be replaced by only 1 space"
songDecoder("WUBAWUBBWUBCWUB") // "A B C","heading or trailing spa