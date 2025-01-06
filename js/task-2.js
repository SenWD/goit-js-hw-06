class Storage  { 
    #items;
     constructor(items){
     this.#items = items;
     }
    
    getItems() {
      return this.#items; 
    }
  
    addItem(newItem) {
      return this.#items.push(newItem);
    }
   
    #checkitems(item){
   
     
      if (item !== " ") {
        return true;
         }
       }

    
  removeItem(itemToRemove) {
    if (this.#checkitems(itemToRemove)) {  
     
    this.#items = this.#items.filter((item) => item !== itemToRemove);
 } else { console.log("boş bir dizi")}
}
  };
  
 const storage = new Storage(["Nanitoids","Prolonger", "Antigravitator"]);
 
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
  storage.addItem("Droid");
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
  storage.removeItem("Prolonger");
 
  console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
