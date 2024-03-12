        // Sample courses data
        const courses = [
            { title: "Introduction to Programming", category: "Computer Science", description: "Learn the basics of programming.", link: "https://example.com/programming", image: "https://www.seekpng.com/png/detail/352-3528194_programming-language-free-png-image-programming-language.png" },
            { title: "Algebra Basics", category: "Maths", description: "Explore fundamental concepts in algebra.", link: "https://example.com/algebra", image: "https://www.eurokidsindia.com/blog/wp-content/uploads/2023/09/what-is-algebra.jpg" },
            { title: "English Literature", category: "English", description: "Dive into classic works of English literature.", link: "https://example.com/literature", image: "https://img.freepik.com/free-vector/watercolor-literature-illustration_52683-81536.jpg" },
            { title: "Management Principles", category: "Management", description: "Understand key principles of management.", link: "https://example.com/management", image: "https://aaft.edu.in/wp-content/uploads/2023/03/business-management-help-review_141072_large.jpg" },
            { title: "Web Development Fundamentals", category: "Computer Science", description: "Get started with web development.", link: "https://example.com/webdev", image: "https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png" },
            { title: "Statistics for Beginners", category: "Maths", description: "Learn basic statistical concepts and analysis.", link: "https://example.com/statistics", image: "https://st.adda247.com/https://adda247jobs-wp-assets-prod.adda247.com/jobs/wp-content/uploads/sites/2/2022/09/08221320/Introduction-To-Statistics.png" },
            { title: "Creative Writing", category: "English", description: "Express yourself through creative writing.", link: "https://example.com/creativewriting", image: "https://www.inspireculture.org.uk/uploads/images/Creative_Writing.2e16d0ba.fill-430x322_AMt2155.jpg" },
            { title: "Project Management Essentials", category: "Management", description: "Essential skills for effective project management.", link: "https://example.com/projectmanagement", image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/project_management_coursefees.jpg" },
            { title: "Data Structures and Algorithms", category: "Computer Science", description: "Learn about data structures and algorithms.", link: "https://example.com/dsa", image: "https://miro.medium.com/v2/resize:fit:1358/1*4ZcW5tSdizlbtDQyVpRTuA.jpeg" }
        ];

        // Display initial courses
        displayCourses(courses);

        function displayCourses(coursesToShow) {
            const coursesContainer = document.getElementById("courses-container");
            coursesContainer.innerHTML = '';

            coursesToShow.forEach(course => {
                const courseContainer = document.createElement("div");
                courseContainer.classList.add("course-container");

                const courseImage = document.createElement("img");
                courseImage.classList.add("course-image");
                courseImage.src = course.image;
                courseContainer.appendChild(courseImage);

                const courseName = document.createElement("p");
                courseName.innerText = course.title;
                courseContainer.appendChild(courseName);

                const tooltip = document.createElement("div");
                tooltip.classList.add("tooltip");
                tooltip.innerText = course.description;
                courseContainer.appendChild(tooltip);

                // Open the link in a new tab when clicking on the course container
                courseContainer.onclick = function () {
                    window.open(course.link, '_blank');
                };

                coursesContainer.appendChild(courseContainer);
            });
        }

        function searchCourses() {
            const searchTerm = document.getElementById("search-input").value.toLowerCase();
            const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(searchTerm));
            displayCourses(filteredCourses);
        }

        function filterCourses() {
            const allCheckbox = document.getElementById("all-checkbox");
            const csCheckbox = document.getElementById("cs-checkbox");
            const mathCheckbox = document.getElementById("math-checkbox");
            const engCheckbox = document.getElementById("eng-checkbox");
            const mgmtCheckbox = document.getElementById("mgmt-checkbox");

            let filteredCourses = [];

            if (allCheckbox.checked) {
                filteredCourses = courses;
            } else {
                filteredCourses = courses.filter(course => {
                    return (
                        (csCheckbox.checked && course.category === "Computer Science") ||
                        (mathCheckbox.checked && course.category === "Maths") ||
                        (engCheckbox.checked && course.category === "English") ||
                        (mgmtCheckbox.checked && course.category === "Management")
                    );
                });
            }

            displayCourses(filteredCourses);
        }

        // Toggle display of filter checkboxes
        function toggleFilterCheckboxes() {
            const filterCheckboxes = document.getElementById("filter-checkboxes");
            filterCheckboxes.style.display = (filterCheckboxes.style.display === 'none' || filterCheckboxes.style.display === '') ? 'block' : 'none';
        }