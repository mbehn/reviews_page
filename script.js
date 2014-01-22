function JSONPHandler(data) {
    console.log(data);
    for (i = 0; i < data.Results.length; i++) {
        var review = document.createElement("div");
        review.className = "review";
        var reviewTitle = document.createElement("h3");
        reviewTitle.className = "review-title";
        if (!data.Results[i].Title) {
            data.Results[i].Title = "Review Title";
        }
        reviewTitle.innerHTML = data.Results[i].Title.toUpperCase();
        review.appendChild(reviewTitle);
        var reviewDate = document.createElement("h4");
        reviewDate.className = "review-date";
        reviewDate.innerHTML = data.Results[i].SubmissionTime;
        review.appendChild(reviewDate);
        var reviewText = document.createElement("p");
        reviewText.className = "review-text";
        if (!data.Results[i].ReviewText) {
            data.Results[i].ReviewText = "Review Text";
        }
        review.appendChild(reviewText);
        reviewText.innerHTML = data.Results[i].ReviewText.toUpperCase();
        console.log(review);
        document.body.appendChild(review);
    }

}
