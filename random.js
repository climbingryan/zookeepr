// Write code to create a function that accepts an array of numbers


// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

let array = [4, 2, 5, 3, 1, 1, 2, 3, 4, 2, 5, 6, 3, 2, 4, 7, 3, 2, 3]
const newArray = [];

let songFun = (array) => {
    // order numbers from least to greatest
    const sorted =  array.sort();
    let songTotal = 0;

    for(let i = 0; i < sorted.length; i++) {
        songTotal += sorted[i];
        if (songTotal > 60) {
            return i;
        }
    } 
    return sorted.length;
}
songFun(array);