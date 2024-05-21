class MemoryRepository {
    constructor() {
      this.data = [];
    }
  
    getAll() {
      return this.data;
    }
  
    getById(id) {
      return this.data.find(item => item.id === id);
    }
  
    create(item) {
      this.data.push(item);
      return item;
    }
  
    update(id, updatedItem) {
      const index = this.data.findIndex(item => item.id === id);
      if (index !== -1) {
        this.data[index] = { ...this.data[index], ...updatedItem };
        return this.data[index];
      }
      return null;
    }
  
    delete(id) {
      const index = this.data.findIndex(item => item.id === id);
      if (index !== -1) {
        return this.data.splice(index, 1);
      }
      return null;
    }
  }
  
  export default MemoryRepository;