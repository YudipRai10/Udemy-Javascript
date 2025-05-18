const xhr = new XMLHttpRequest();
const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");

function sendHttpRequest(method, url) {
  xhr.open(method, url);
  xhr.onload = function () {
    const listOfPosts = JSON.parse(xhr.response);
    console.log(listOfPosts);

    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      listElement.append(postEl);
    }
  };
  xhr.send();
}
// "https://jsonplaceholder.typicode.com/posts"

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json()) // Convert response to JSON
//   .then((data) => {
//     console.log("Posts:", data);
//   })
//   .catch((error) => {
//     console.error("Error fetching posts:", error);
//   });
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "My Post",
//     body: "This is my post content",
//     userId: 1,
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Created post:", data);
//   })
//   .catch((error) => {
//     console.error("Failed to create post:", error);
//   });

async function fetchPosts() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(res.data, "ji");
  } catch (error) {
    console.error(error.response);
  }
}
fetchPosts();

document.getElementById("postForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title,
        body,
        userId: 1,
      }
    );
    console.log("Post created:", response.data);
  } catch (err) {
    console.error("Error creating post:", err);
  }
});
