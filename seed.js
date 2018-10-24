const db = require('./server/db/db.js');
const { User } = require('./server/db/models');


const seed = async () => {
  try {
    await db.sync({ force: true });
    await User.create({
      email: 'test@email.com',
      password: '1234',
    });
    console.log(`Seed success!`);
    db.close();
  } catch (err) {
    console.error(`Oh noes!`);
    console.error(err.stack);
    db.close();
  }
};

seed();
