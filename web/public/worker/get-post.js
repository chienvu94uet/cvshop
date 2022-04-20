onmessage = async () => {
  console.log("data from main script");
  let listPosts = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();
  postMessage(listPosts);
};
