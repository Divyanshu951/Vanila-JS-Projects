async function generateBarcode(text, type) {
  try {
    const res = await fetch(
      `https://api.api-ninjas.com/v1/qrcode?data=${text}&format=${type}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": "4Z/ACFQI2AkvcZI95PTasg==q4VqB29OJK3Te8RQ",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    // 🔴 IMPORTANT: this API returns BASE64 TEXT, not JSON, not blob
    const base64 = await res.text();

    const img = document.getElementById("barcode");
    img.src = `data:image/png;base64,${base64}`;
  } catch (err) {
    console.error(err);
  }
}

document.getElementById("btn").addEventListener("click", () => {
  generateBarcode(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur numquam blanditiis nesciunt voluptatem quo? Rem, rerum! Quod voluptas ullam nisi omnis facilis praesentium consequatur nihil dicta eaque rerum asperiores quos veritatis commodi vel quas deleniti, neque aliquid libero? Sunt laudantium, accusantium exercitationem, debitis dolor quam aspernatur delectus porro praesentium quisquam ipsa soluta nulla quaerat provident suscipit assumenda. Quaerat veritatis fuga cum enim itaque similique soluta sapiente vitae totam labore? Dicta, at. Doloremque laborum dolore itaque dignissimos sapiente consequatur laudantium vitae pariatur quisquam voluptate tenetur cumque ut dolorem porro quos fugiat odit, maxime unde, corrupti possimus a quidem sed sequi. Quam eligendi libero eius animi necessitatibus. Deserunt fugiat amet architecto ad rerum modi explicabo unde hic ducimus quod aliquid iure illum doloremque animi dolorum, voluptatum quasi consequuntur doloribus soluta consectetur veniam fugit? Molestiae nostrum asperiores, ex porro minus odio officia nobis, magni optio aut doloribus tenetur ratione odit molestias pariatur quisquam iste dignis",
    "png"
  );
});
