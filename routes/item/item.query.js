const { Item, } = require('../../models');

module.exports = {

  findAllItem() {
    return Item.findAll({
      order:
      ['createdAt'],
    });
  },

  findItem(brandId) {
    return Item.findByPk(brandId);
  },

  findPurchase(id) {
    return Item.findByPk(id);
  },

  addItem(name, brandId, price, purchaseId, filename) {
    return Item.create({
      name,
      brandId,
      price,
      image: filename,
      purchaseId,
    });
  },

  findByPkItem(id) {
    return Item.findByPk(id);
  },

  updateItem(item, name, price) {
    return item.update({
      name,
      price,
    });
  },

  destroyItem(item) {
    return item.destroy();
  },
};
