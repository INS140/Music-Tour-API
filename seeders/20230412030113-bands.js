'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('band', [
      {
        name: 'Slipknot',
        genre: 'Metal',
        available_start_time: '2023-06-22 8:00:00-07',
        end_time: '2023-06-22 12:00:00-07'
      },
      {
        name: 'Thy Art Is Murder',
        genre: 'Deathcore',
        available_start_time: '2023-06-22 10:00:00-07',
        end_time: '2023-06-22 17:00:00-07'
      },
      {
        name: 'Whitechapel',
        genre: 'Deathcore',
        available_start_time: '2023-06-22 9:00:00-07',
        end_time: '2023-06-22 13:00:00-07'
      },
      {
        name: 'Avenged Sevenfold',
        genre: 'Metal',
        available_start_time: '2023-06-22 7:00:00-07',
        end_time: '2023-06-22 15:00:00-07'
      },
      {
        name: 'Alter Bridge',
        genre: 'Rock',
        available_start_time: '2023-06-22 11:00:00-07',
        end_time: '2023-06-22 18:00:00-07'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    // note that this deletes ALL data from the bands table
    await queryInterface.bulkDelete('band', null, {})
  }
}