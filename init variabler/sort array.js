let Nordpool = msg.payload;

Nordpool.sort((a, b) => a.price - b.price); // sort funkar

global.set("NordpoolTrimmed", Nordpool);

return msg;