let rating = 0;

function setRating(value) {
    rating = value;
    let stars = document.querySelectorAll(".stars span");

    stars.forEach((star, index) => {
        if (index < value) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });
}

function submitFeedback() {
    let name = document.getElementById("name").value;
    let comment = document.getElementById("comment").value;

    if (name === "" || rating === 0 || comment === "") {
        document.getElementById("msg").innerText = "Please fill all fields!";
        return;
    }

    let feedback = {
        name: name,
        rating: rating,
        comment: comment
    };

    localStorage.setItem("feedback", JSON.stringify(feedback));

    document.getElementById("msg").innerText = "Feedback Submitted Successfully ✔";
}
