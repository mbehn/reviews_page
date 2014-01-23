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
        var reviewerNickname = document.createElement("h5");
        reviewerNickname.className="reviewer-nickname";
        reviewerNickname.innerHTML="Written by: " + data.Results[i].UserNickname;
        review.appendChild(reviewerNickname);
        var reviewDate = document.createElement("h4");
        reviewDate.className = "review-date";
        reviewDate.day = data.Results[i].SubmissionTime.split("T")[0];
        var reviewDateSplit = reviewDate.day.split("-");
        reviewDate.innerHTML= "On " + reviewDateSplit[1] + "/" + reviewDateSplit[2] + "/" + reviewDateSplit[0]
        console.log(reviewDateSplit);
        review.appendChild(reviewDate);
        var productId = document.createElement("h5");
        productId.className="product";
        productId.innerHTML= data.Results[i].ProductId;
        review.appendChild(productId);
        var reviewText = document.createElement("p");
        reviewText.className = "review-text";
        if (!data.Results[i].ReviewText) {
            data.Results[i].ReviewText = "Review Text";
        }
        review.appendChild(reviewText);
        reviewText.innerHTML = data.Results[i].ReviewText;
        console.log(review);
        document.body.appendChild(review);
    }

}
