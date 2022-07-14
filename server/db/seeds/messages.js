/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('messages').del()
  await knex('messages').insert([
    {id: 1, name: 'John', message: 'You are so lovely', image: 'https://www.mirror.co.uk/news/weird-news/cute-cat-looks-exactly-like-25609153', card_id: 1 },
    {id: 2, name: 'Bonnie', message: 'You are my hero', image: 'https://www.hartvillepetinsurance.com/resources/heroic-cats/', card_id: 1 },
    {id: 3, name: 'Lola', message: 'You are awesome', image: 'https://wallpapersafari.com/cool-cat-hd-wallpaper/', card_id: 1 },
    {id: 4, name: 'Pete', message: 'You are the love of my life', image: 'https://www.cuteness.com/13709717/can-a-dog-fall-in-love-with-a-cat', card_id: 1 },

  ]);
};
