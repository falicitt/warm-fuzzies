/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('messages').del()
  await knex('messages').insert([
   {id: 1, name: 'John', message: 'You are so lovely, kind and thoughtful thanks for everything', image: '/images/thanks2.jpg', card_id: 1 },
    {id: 2, name: 'Bonnie', message: 'Thank you so much! You are my hero, I always look up to you, you are not just my hero..but my SuperHero!', image: '/images/thanks3.jpg', card_id: 1 },
    {id: 3, name: 'Lola', message: 'You are totally awesome and one of the kindest people I know', image: '/images/thanks4.jpg', card_id: 1 },
    {id: 4, name: 'Pete', message: 'You are the love of my life and the kindest, thanks again!', image: '/images/thanks5.jpg', card_id: 1 },
    {id: 5, name: 'Jonas', message: 'Thank you for everything you do and thank you for being you, you are awesome', image: '/images/thank_you.jpeg', card_id: 1 },
    {id: 6, name: 'Andrea', message: 'Congratulations! you are totally amazing.. we are all so proud of you', image: '/images/congrats1.jpg', card_id: 2 },
    {id: 7, name: 'max', message: 'Wow! you did it, big congratulations from us all', image: './public/images/congrats2.jpg', card_id: 2 },
    {id: 8, name: 'Ben', message: 'We cant believe you did it we are all so very proud of you', image: '/images/congrats3.jpg', card_id: 2 },
    {id: 9, name: 'Cassie', message: 'Happy Anniversary! WoW 10 years of being together!', image: '/images/anniversary1.jpg', card_id: 3 },
    {id: 10, name: 'adam and Lucy', message: 'Happy Anniversary! to you both...lots of love', image: '/images/anniversary2.jpg', card_id: 3 },
    {id: 11, name: 'Kenneth', message: 'Happy Anniversary to an awesome couple, see you both on Tuesday for the party!', image: '/images/anniversary3.jpg', card_id: 3 },
    {id: 12, name: 'Chris', message: 'Happy Birthday to one of the nicest people i know! I cant wait to see you at the party!', image: '/images/happyb1.jpg', card_id: 4 },
    {id: 13, name: 'Jodie', message: 'Happy birthday love you lots and see you very soon!', image: '/images/happyb2.jpg', card_id: 4 },
    {id: 14, name: 'Emma', message: 'Have a wonderful day on your special day and dont drink too much haha :-)', image: '/images/happyb3.jpg', card_id: 4 },  

  ]);
};
