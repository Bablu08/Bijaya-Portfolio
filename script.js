
    function animateCounter(id, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            document.getElementById(id).innerText = Math.floor(progress * (end - start) + start) + "+";
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Call the animateCounter function for each number
    animateCounter('experience-count', 0, 3, 2000);  // From 0 to 3+ (Years of Experience)
    animateCounter('projects-count', 0, 40, 2000);   // From 0 to 40+ (Projects Completed)
    animateCounter('companies-count', 0, 14, 2000);  // From 0 to 14+ (Companies Served)
