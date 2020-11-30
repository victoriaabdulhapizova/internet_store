const query = require('./item.query');
const queryBrand = require('../brand/brand.query');
const queryPurchase = require('../purchase/purchase.query');

module.exports = {
  async getData(req, res) {
    try {
      const item = await query.findAllItem();
      return res.status(200).send(item);
    }
    catch (error) {
      return res.status(500).send(error);
    }
  },
  async getItem(req, res) {
    try {
      const { itemId, } = req.params;

      const item = await query.findByPkItem(itemId);

      if (!item) return res.status(404).send('Item not found');

      return res.status(200).send(item);
    }
    catch (error) {
      return res.status(500).send(error);
    }
  },
  async filterData(req, res) {
    try {
      const { brandId, } = req.body;
      const item = await query.findItem(brandId);

      if (!item) return res.sendStatus(404).send('Brand not found');

      return res.send(item).status(200);
    }
    catch (error) {
      return res.status(500).send(error);
    }
  },

  async add(req, res) {
    try {
      const {
        name, brandId, price, purchaseId, fileLink,
      } = req.body;
      const existItem = await queryBrand.findBrand(brandId);

      if (!existItem) return res.status(404).send('Brand not found');

      const existPurchase = await queryPurchase.findByPkPurchases(purchaseId);

      if (!existPurchase) return res.status(404).send('Purchase not found');

      const item = await query.addItem(name, brandId, price, purchaseId, fileLink);

      return res.status(200).send(item);
    }
    catch (error) {
      return res.status(500).send(error);
    }
  },

  async update(req, res) {
    try {
      const { itemId, } = req.params;
      const { name, price, } = req.body;
      const item = await query.findByPkItem(itemId);

      if (!item) return res.status(404).send('Item not found');

      await query.updateItem(item, name, price);

      return res.sendStatus(200);
    }
    catch (error) {
      return res.status(500).send(error);
    }
  },

  async deleteItem(req, res) {
    try {
      const { itemId, } = req.params;
      const item = await query.findByPkItem(itemId);
      if (!item) return res.status(404).send('Item not found');

      await item.destroy();

      return res.sendStatus(200);
    }
    catch (error) {
      return res.status(500).send(error);
    }
  },
};
