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

  addItem(name, brandId, price, purchaseId, fileLink) {
    return Item.create({
      name,
      brandId,
      price,
      logo: fileLink,
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
