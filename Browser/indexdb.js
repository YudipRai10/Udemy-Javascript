const storeButton = document.getElementById("store-btn");
const retreiveButton = document.getElementById("retrieve-btn");

let db;

const dbRequest = indexedDB.open("StorageDummy", 1);

dbRequest.onsuccess = function (e) {
  db = e.target.result;
};

dbRequest.onupgradeneeded = function (e) {
  db = e.target.result;

  // Create object store with keyPath
  const objStore = db.createObjectStore("products", { keyPath: "id" });

  objStore.transaction.oncomplete = function () {
    // When the object store is successfully created, add a product to the store
    const productsStore = db
      .transaction("products", "readwrite")
      .objectStore("products");
    productsStore.add({ id: "p1", title: "A First Product", price: 12.99 });
  };
};

dbRequest.onerror = function (e) {
  console.log("Error opening database", e);
};

storeButton.addEventListener("click", () => {
  if (!db) return;
  const productsStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  productsStore.add({ id: "p2", title: "A Second Product", price: 2.99 });
});

retreiveButton.addEventListener("click", () => {
  const productsStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  const req = productsStore.get("p2");

  req.onsuccess = function () {
    console.log(req.result);
  };
});
