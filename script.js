document.addEventListener('DOMContentLoaded', function() {
    // Function to update the progress for a section
    function updateProgress(section, videoId) {
        let watchedVideos = JSON.parse(localStorage.getItem(section)) || [];
        
        // Check if the videoId is already in the watched videos list
        if (!watchedVideos.includes(videoId)) {
            watchedVideos.push(videoId);
            localStorage.setItem(section, JSON.stringify(watchedVideos));
            
            // Check the corresponding checkbox
            let checkbox = document.getElementById(section.toLowerCase() + '-checkbox');
            if (checkbox) {
                checkbox.checked = true;
            }
        }
    }

    // Function to calculate and display overall course completion progress
    function displayOverallProgress() {
        let totalVideos = 0;
        let completedVideos = 0;
        
        // Loop through each section
        for (let i = 1; i <= 10; i++) {
            let section = 'Section ' + i;
            let watchedVideos = JSON.parse(localStorage.getItem(section)) || [];
            totalVideos += 10; // Assuming each section has 10 videos
            
            // Increment completedVideos by the number of watched videos in the section
            completedVideos += watchedVideos.length;
            
            // Check the corresponding checkbox for each watched video
            for (let videoId of watchedVideos) {
                let checkbox = document.getElementById(section.toLowerCase() + '-checkbox');
                if (checkbox) {
                    checkbox.checked = true;
                }
            }
        }
        
        let overallProgress = Math.round((completedVideos / totalVideos) * 100);
        document.getElementById('progress').innerText = 'Course Completion: ' + overallProgress + '%';
    }

    // Add event listeners to update progress and navigate to videos for each section
    for (let i = 1; i <= 10; i++) {
        let sectionId = 'section' + i;
        document.getElementById(sectionId).addEventListener('click', function() {
            updateProgress('Section ' + i, 'VIDEO_ID_HERE'); // Update with actual video ID
            window.location.href = '#v' + i; // Scroll to the video container of the section
        });
    }

    // Call the function to display overall progress
    displayOverallProgress();
});
function playVideo(videoUrl) {
    var defaultVideoContainer = document.getElementById('v1');
    defaultVideoContainer.innerHTML = '<iframe width="603" height="300" src="' + videoUrl + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
}
function overview() {
    // Get the section element by its id
    var section = document.getElementById("write");
    
    // Add content to the section
    section.innerHTML = "<h2>About this course</h2><p>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps </p><hr><h3>Features</h3>Available on iOS and Android Coding exercises <hr><h3>Description</h3>Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer.<br>We'll take you step-by-step through engaging video tutorials and teach you everything you need to know to succeed as a web developer.<br>The course includes over 62 hours of HD video tutorials and builds your programming knowledge while making real-world websites and web apps.";
}
function qa() {
    // Get the section element by its id
    var section = document.getElementById("write");
    
    // Add content to the section
    section.innerHTML = "<h4>Q.Where did old videos go?</h4><p>A.The course is updated regularly according the trends of the market so new videos have been added.You can view old videos in the link provided to you through mail.<h4>Q.Where are course PDFs?</h4><p>A.It is in the notes section.You can hover over to the next section.</p><h4>Q.How to make best use of this course?</h4><p>A.This is explained properly in the videos of the course you may view it.</p><h4>Q.How to download mongodb?</h4><p>A.It has been covered in the backend parts of our course kindly look into it.</p>";
}
function notes() {
// Get the section element by its id
var section = document.getElementById("write");

 // Add content to the section
section.innerHTML = "<h2>This is the content!</h2><p>You may download notes from <a href='http://www.sample.org/head' target='_blank'>here</a>.</p>";
}

function announcement() {
    // Get the section element by its id
    var section = document.getElementById("write");
    
    // Add content to the section
    section.innerHTML = "<h4>Great News! Course Fully Updated for 2024!</h4><p>How is your new year going? Have you set a new years resolution to finally learn to code? Or do you have a goal to change careers this year? No matter your motivation for picking up the Complete Web Development Bootcamp, I've got fantastic news for you!We just released the fully updated Authentication module! This means that all modules in this course is now fully up to date! It took a lot of effort and we made lots of updates to make this course relevant for programmers in 2024.So if you bought this course a million years ago and still haven't started or watched some videos but never made the jump to actually writing some code. Then this is your sign to get started today!</p>";
}
function reviews() {
    // Get the section element by its id
    var section = document.getElementById("write");
    
    // Add content to the section
    section.innerHTML = "<h4>Akaay</h4><p>I really liked the build first approach in this course, you basically build a mini project for every section you learn. Some sections are little outdated but it is getting constant updates.</p><h4>Zoro</h4><p>Course is Well Organized and Well taught. After completing this course your concepts on frontend and Backend will be cristal clear. After that all depends on your practice.</p><h4>Steven</h4><p>Cover broad of topic in web development industry. Explained a lot of basic programming knowledge with easy to understand explanation.Not only doing programming together with video, this course is full of homework, test, and training where it really does test your knowledge about the topic.Love this course.</p>";
}
function refermaterials() {
    // Get the section element by its id
    var section = document.getElementById("write");
    
    // Add content to the section
    section.innerHTML = "<h4>Learning materials right over here</h4><table><ul><li>HTML and CSS: Design and Build Websites, by Jon Duckett</li><li>HTML5: The Missing Manual</li><li>Learning Web Design: A beginner’s guide to HTML, CSS, Javascript, and Web Graphics, By Jennifer Niederst Robbins</li><li>Eloquent Javascript: by Marijn Haverbake</li><li> JavaScript: The Good Parts 1st Edition</li><li>CSS Mastery: Advanced Web Standards Solutions</li><li>You Don’t Know JS – ES6 & Beyond</li></ul></table>";
}
window.onload = overview;
