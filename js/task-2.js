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
    #checkitems(itemTo){
     
      if (itemTo !== -1) {
        return true;
        

         }
        
       }

    
      
    removeItem(itemToRemove){
     
        const  itemTo = this.#items.indexOf(itemToRemove);
        if (this.#checkitems(itemTo)) { 
          return this.#items.splice(itemTo,1);
        }
        
    }
  
  };
  
  const storage = new Storage(["Nanitoids","Prolonger", "Antigravitator"]);
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
  storage.addItem("Droid");
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
  storage.removeItem("Prolonger");
 
  console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
