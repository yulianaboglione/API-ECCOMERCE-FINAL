const { Categories } = require("../models");

class CategoriesServices {

  static async getAllCategories() {

    try {
      const result = await Categories.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async postCategories(name) {
    try {
      const result = await Categories.create(name);
      return result;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = CategoriesServices;