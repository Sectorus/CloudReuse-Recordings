  // Array of video pairs: experiment video and corresponding reference video
        var host = "https://github.com/Sectorus/CloudReuse-Recordings/raw/main";
        var videoPairs = [
            { experiment: host + '/Radius_25_1.25/MV_reg.webm', reference: host + '/reg_reference.webm' },
            { experiment: host + '/Radius_25_1.25/MV_reg_lowCoverage_03_07.webm', reference: host + '/reg_reference.webm' },
            //{ experiment: host + '/Radius_25_1.25/MV_reg_highCoverage_2_2.webm', reference: host + '/reg_reference.webm' },
            { experiment: host + '/Radius_25_1.25/MV_faster.webm', reference: host + '/faster_reference.webm' },
            { experiment: host + '/Radius_25_1.25/MV_faster_lowCoverage_03_07.webm', reference: host + '/Radius_25_0.5/MV_faster_lowCoverage_03_07.webm' },
            //{ experiment: host + '/Radius_25_1.25/MV_faster_highCoverage_2_2.webm', reference: host + '/faster_reference.webm' },
            //{ experiment: host + '/Radius_25_1.25/landscape_linear.webm', reference: host + '/landscape_reference.webm' },

            { experiment: host + '/Radius_50_1.25/MV_reg.webm', reference: host + '/reg_reference.webm' },
            { experiment: host + '/Radius_50_1.25/MV_reg_lowCoverage_03_07.webm', reference: host + '/reg_reference.webm' },
            //{ experiment: host + '/Radius_50_1.25/MV_reg_highCoverage_2_2.webm', reference: host + '/reg_reference.webm' },
            { experiment: host + '/Radius_50_1.25/MV_faster.webm', reference: host + '/faster_reference.webm' },
            { experiment: host + '/Radius_50_1.25/MV_faster_lowCoverage_03_07.webm', reference: host + '/Radius_25_0.5/MV_faster_lowCoverage_03_07.webm' },
            //{ experiment: host + '/Radius_50_1.25/MV_faster_highCoverage_2_2.webm', reference: host + '/faster_reference.webm' },
            //{ experiment: host + '/Radius_50_1.25/landscape_linear.webm', reference: host + '/landscape_reference.webm' },

            { experiment: host + '/Radius_200_1.25/MV_reg.webm', reference: host + '/reg_reference.webm' },
            { experiment: host + '/Radius_200_1.25/MV_reg_lowCoverage_03_07.webm', reference: host + '/reg_reference.webm' },
            //{ experiment: host + '/Radius_200_1.25/MV_reg_highCoverage_2_2.webm', reference: host + '/reg_reference.webm' },
            { experiment: host + '/Radius_200_1.25/MV_faster.webm', reference: host + '/faster_reference.webm' },
            { experiment: host + '/Radius_200_1.25/MV_faster_lowCoverage_03_07.webm', reference: host + '/Radius_25_0.5/MV_faster_lowCoverage_03_07.webm' },
            //{ experiment: host + '/Radius_200_1.25/MV_faster_highCoverage_2_2.webm', reference: host + '/faster_reference.webm' },

            { experiment: host + '/Radius_200_1.25/landscape_linear.webm', reference: host + '/landscape_reference.webm' },
            { experiment: host + '/Radius_200_0.5/landscape_linear.webm', reference: host + '/landscape_reference.webm' },

            { experiment: host + '/Radius_25_0.5/MV_reg.webm', reference: host + '/reg_reference.webm' },
            { experiment: host + '/Radius_25_0.5/MV_reg_lowCoverage_03_07.webm', reference: host + '/reg_reference.webm' },
            //{ experiment: host + '/Radius_25_0.5/MV_reg_highCoverage_2_2.webm', reference: host + '/reg_reference.webm' },
            { experiment: host + '/Radius_25_0.5/MV_faster.webm', reference: host + '/faster_reference.webm' },
            { experiment: host + '/Radius_25_0.5/MV_faster_lowCoverage_03_07.webm', reference: host + '/Radius_25_0.5/MV_faster_lowCoverage_03_07.webm' },
            //{ experiment: host + '/Radius_25_0.5/MV_faster_highCoverage_2_2.webm', reference: host + '/faster_reference.webm' },
            //{ experiment: host + '/Radius_25_0.5/landscape_linear.webm', reference: host + '/landscape_reference.webm' },

            { experiment: host + '/Radius_50_0.5/MV_reg.webm', reference: host + '/reg_reference.webm' },
            { experiment: host + '/Radius_50_0.5/MV_reg_lowCoverage_03_07.webm', reference: host + '/reg_reference.webm' },
            //{ experiment: host + '/Radius_50_0.5/MV_reg_highCoverage_2_2.webm', reference: host + '/reg_reference.webm' },
            { experiment: host + '/Radius_50_0.5/MV_faster.webm', reference: host + '/faster_reference.webm' },
            { experiment: host + '/Radius_50_0.5/MV_faster_lowCoverage_03_07.webm', reference: host + '/faster_reference.webm' },
            //{ experiment: host + '/Radius_50_0.5/MV_faster_highCoverage_2_2.webm', reference: host + '/faster_reference.webm' },
            //{ experiment: host + '/Radius_50_0.5/landscape_linear.webm', reference: host + '/landscape_reference.webm' },

            { experiment: host + '/MV_reg_25_tilt_x5.webm', reference: host + '/MV_reg_25_tilt.webm' },

            // Add more video pairs as needed
        ];


        var videoPairs = [
            { experiment: 'https://github.com/Sectorus/CloudReuse-Recordings/raw/main/Radius_25_1.25/MV_reg.webm', reference: 'https://github.com/Sectorus/CloudReuse-Recordings/raw/main/reg_reference.webm' },
            { experiment: 'https://github.com/Sectorus/CloudReuse-Recordings/raw/main/Radius_25_1.25/MV_reg_lowCoverage_03_07.webm', reference: 'https://github.com/Sectorus/CloudReuse-Recordings/raw/main/reg_reference.webm' }];

        videoPairs = shuffleArray(videoPairs);
        //Scale 1-5; first better -> 1 - 5

        var currentIndex = 0;
        var isExperimentFirst = Math.random() < 0.5;
        var feedback = {};

        function playNextPair() {
            document.getElementById("nextVideoBtn").style.display = "none";
            document.getElementById("introduction").style.display = "none";
            document.getElementById("videoPlayer").style.display = "block";
            if (currentIndex >= videoPairs.length) {
                console.log('Reached the end of video pairs.');

                $.ajax({
                    type: "POST",
                    url: "storeResults.php",  // Replace with the path to your PHP script
                    data: JSON.stringify({ result: feedback }), // Stringify the entire data object            
                    contentType: "application/json; charset=utf-8",
                    success: function(response) {
                        alert(response);
                    },
                    error: function() {
                        alert("An error occurred while making the request.");
                    }
                });

                //download(Date.now() + "_userstudy.txt", JSON.stringify(feedback));
                return;
            }

            var pair = videoPairs[currentIndex];
            var firstVideo = isExperimentFirst ? pair.experiment : pair.reference;

            var videoPlayer = document.getElementById('videoPlayer');

            // Play the first video
            videoPlayer.src = firstVideo;
            videoPlayer.play();

            console.log('Playing first:', firstVideo);

            videoPlayer.onended = function() {
                var secondVideo = isExperimentFirst ? pair.reference : pair.experiment;
                console.log('Playing second:', secondVideo);
                videoPlayer.src = secondVideo;
                alert("Please proceed to the next video, by clicking here.")
                videoPlayer.play();
                videoPlayer.onended = function() {
                    var perference = prompt("[Progress " + (currentIndex+1) + "/" + videoPairs.length + "]\n\nWhich of the previous videos did you like best?\nPlease enter a number on a scale of [-2, -1, 0, 1, 2],"+
                        " where -2 means you liked the first video the most and 2 means you liked the second video the most.");

                    var pairFeedback = {
                        first: firstVideo,
                        second: secondVideo,
                        value: perference,
                    };

                    feedback[currentIndex] = pairFeedback;
                    currentIndex++;
                    isExperimentFirst = Math.random() < 0.5;
                    console.log("Playing next pair (index = " + currentIndex + ")");
                    playNextPair();
                };
            };
        }

        //console.log(checkVideoFilesExist(videoPairs));
        // Start playing the pairs
        document.getElementById("nextVideoBtn").addEventListener("click", playNextPair);