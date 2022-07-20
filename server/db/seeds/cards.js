/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('cards').del()
  await knex('cards').insert([
    {
      id: 1,
      name: 'Happy Brithday',
      person_name: 'Emma',
      created_at: '2022-07-10 09:24:00',
      complete: false,
      card_string: 'RndkP',
      added_by_user: 'auth0|62c22897087a31c6a64caada'
    },
    {
      id: 2,
      name: 'Happy Anniversary',
      person_name: 'Chris',
      created_at: '2022-07-10 09:24:00',
      complete: false,
      card_string: 'lljeP',
      added_by_user: 'auth0|62c22897087a31c6a64caada'
    },
    {
      id: 3,
      name: 'Get Well Soon',
      person_name: 'Andrea',
      created_at: '2022-07-10 09:24:00',
      complete: false,
      card_string: 'fskdl',
      added_by_user: 'auth0|62c22897087a31c6a64caada'
    },
    {
      id: 4,
      name: 'Congratulations',
      person_name: 'Cassie',
      created_at: '2022-07-10 09:24:00',
      complete: false,
      card_string: 'Pmhhd',
      added_by_user: 'auth0|62c22897087a31c6a64caada'
    },
  ])
}
