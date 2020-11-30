module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Brands', [
      {
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        logo: 'brand1',
        location: 'russia',
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Brands', null, {});
  },
};
