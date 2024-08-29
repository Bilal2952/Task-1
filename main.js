const BASE_URL = "https://7b07443e1598fb30.mokky.dev/sneakers"
const   ul = document.getElementById("list")
const getData = async () => {
    try{
        const responce = await fetch(BASE_URL);
        const data = await responce.json();
        console.log(data);
        renderProducts(data);
    } catch (error) {
        console.log(error);  
    }
};
getData();

const renderProducts = (sneacerssArray = []) => {
    ul.innerHTML = "";
    sneacerssArray.map((sneacers) => {
      const li = document.createElement("li");
      const likedImage = document.createElement("img");
      const NotlikedImage = document.createElement("img");
      const productImage = document.createElement("img");
      const title = document.createElement("p");
      const productInfo = document.createElement("div");
      const containerPrice = document.createElement("div");
      const priceText = document.createElement("span");
      const price = document.createElement("b");
      const btnProduct = document.createElement("button");
      NotlikedImage.addEventListener("click", () => {});
      productImage.src = sneacers.imageURL;
      productImage.alt = sneacers.title;
      productImage.className = "product_image";
  
      title.className = "description";
      title.textContent = sneacers.title;
  
      priceText.textContent = "Цена:";
      price.textContent = `${sneacers.price} руб.`;
  
      containerPrice.append(priceText, price);
      containerPrice.className = "container_price";
      productInfo.className = "product_info";
      productInfo.append(containerPrice, btnProduct);
      btnProduct.textContent = "+";
      btnProduct.className = "btn_product";
      btnProduct.addEventListener("click", () => {
        postBasketSneakers(sneacers);
      });
  
      li.append(likedImage, productImage, title, productInfo, NotlikedImage);
      li.className = "list_item";
      ul.append(li);
    });
  };
  
