
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function checkVideoFilesExist(videoPairs) {
    var allFilesExist = true;

    for (var i = 0; i < videoPairs.length; i++) {
        var pair = videoPairs[i];
        var experimentVideo = new Image();
        var referenceVideo = new Image();

        experimentVideo.onerror = function() {
        console.error('Experiment video does not exist:', pair.experiment);
        alert('Experiment video does not exist:', pair.experiment);
        allFilesExist = false;
        };

        referenceVideo.onerror = function() {
        console.error('Reference video does not exist:', pair.reference);
        alert('Reference video does not exist:', pair.reference);
        allFilesExist = false;
        };

        experimentVideo.src = pair.experiment;
        referenceVideo.src = pair.reference;
    }

    return allFilesExist;
}

function shuffleArray(originalArray) {
    const arrayCopy = [...originalArray]; // Create a shallow copy to avoid modifying the original array

    for (let i = arrayCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap arrayCopy[i] and arrayCopy[j]
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }

    return arrayCopy;
}
