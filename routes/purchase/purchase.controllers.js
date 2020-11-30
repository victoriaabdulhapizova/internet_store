const query = require('./purchase.query');
const queryUser = require('../user/user.query');

module.exports = {

  async getData(req, res) {
    try {
      const purchases = await query.findAllPurchases();
      return res.status(200).send(purchases);
    }
    catch (error) {
      return res.status(500).send(error);
    }
  },

  async add(req, res) {
    try {
      const { category, amount, userId, } = req.body;
      const existUser = await queryUser.findUser(userId);

      if (!existUser) return res.status(404).send('User not found');

      const purchases = await query.addPurchases(category, amount, userId);

      return res.status(200).send(purchases);
    }
    catch (error) {
      return res.status(500).send(error);
    }
  },

  async update(req, res) {
    try {
      const { id, } = req.params;
      const purchase = await query.findByPkPurchases(id);

      if (!purchase) return res.status(404).send('Purchase not found');

      const { name, price, } = req.body;

      await query.updatePurchases(purchase, name, price);

      return res.sendStatus(200);
    }
    catch (error) {
      return res.status(500).send(error);
    }
  },

  async deleteRecord(req, res) {
    try {
      const { id, } = req.params;
      const purchase = await query.findByPkPurchases(id);

      if (!purchase) return res.status(404).send('Purchase not found');

      await purchase.destroy();

      return res.sendStatus(200);
    }
    catch (error) {
      return res.status(500).send(error);
    }
  },
};
