let feedbackList = document.getElementById("feedbackList");

let data = localStorage.getItem("feedbackData");
let feedbacks = data ? JSON.parse(data) : [];

if (feedbacks.length === 0) {
    feedbackList.innerHTML = "<p>No feedback available</p>";
}

feedbacks.forEach(fb => {
    let div = document.createElement("div");
    div.classList.add("feedback");

    div.innerHTML = `
        <strong>Name:</strong> ${fb.name} <br>
        <strong>Rating:</strong>
        <span class="rating">${"★".repeat(fb.rating)}</span><br>
        <strong>Comment:</strong> ${fb.comment}
    `;

    feedbackList.appendChild(div);
});

function clearFeedback() {
    localStorage.removeItem("feedbackData");
    location.reload();
}
let feedbacks = JSON.parse(localStorage.getItem("feedbackData")) || [];

feedbacks.push(feedback);

localStorage.setItem("feedbackData", JSON.stringify(feedbacks));
