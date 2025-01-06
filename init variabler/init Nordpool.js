// 1. Klipp ut så endast relevanta timmar: kl 15:00 nuvarande dag till
// 14:00 nästa dag
// 2. Sortera på pris.

// Code added here will be run once
// whenever the node is started.
// Ta bort alla timmar som är före 15:00 idag och efter 15:00 imorgon

let Nordpool = msg.payload;

let idag = new Date();

let imorrn = new Date();

// add a day
imorrn.setDate(idag.getDate() + 1);

idag = idag.toISOString();

imorrn = imorrn.toISOString();

idag = idag.split("T", 1)[0];
imorrn = imorrn.split("T", 1)[0];

// First initialize the Nordpool variable with default values
// If we get not price from Nordpool, e.g. their service is down
// We want to set night hours as the cheapest

let NordpoolTrimmed;

NordpoolTrimmed = [{ timestamp: `${idag}T15`, price: 1 },
{ timestamp: `${idag}T16`, price: 1 },
{ timestamp: `${idag}T17`, price: 1 },
{ timestamp: `${idag}T18`, price: 1 },
{ timestamp: `${idag}T19`, price: 1 },
{ timestamp: `${idag}T20`, price: 1 },
{ timestamp: `${idag}T21`, price: 1 },
{ timestamp: `${idag}T22`, price: 0 },
{ timestamp: `${idag}T23`, price: 0 },
{ timestamp: `${imorrn}T00`, price: 0 },
{ timestamp: `${imorrn}T01`, price: 0 },
{ timestamp: `${imorrn}T02`, price: 0 },
{ timestamp: `${imorrn}T03`, price: 1 },
{ timestamp: `${imorrn}T04`, price: 1 },
{ timestamp: `${imorrn}T05`, price: 1 },
{ timestamp: `${imorrn}T06`, price: 1 },
{ timestamp: `${imorrn}T07`, price: 1 },
{ timestamp: `${imorrn}T08`, price: 1 },
{ timestamp: `${imorrn}T09`, price: 1 },
{ timestamp: `${imorrn}T10`, price: 1 },
{ timestamp: `${imorrn}T11`, price: 1 },
{ timestamp: `${imorrn}T12`, price: 1 },
{ timestamp: `${imorrn}T13`, price: 1 },
{ timestamp: `${imorrn}T14`, price: 1 }];


for (let i = 0; i < Nordpool.length; i++) {
    Nordpool[i].timestamp = Nordpool[i].timestamp.substring(0, Nordpool[i].timestamp.indexOf(':'));
    
    
//    let hej = "2025-01-06T15:00:00Z";
// let trimmedHej = hej.substring(0, hej.indexOf(':'));
    
}

// No need to change values above if we don't get the price from Nordpool
if (msg.payload !== null) {
    // sätt price till värdet i Nordpool för samma timestamp
    
    for (let i = 0; i < Nordpool.length; i++) {
        for (let j = 0; j < NordpoolTrimmed.length; j++) {
            if (Nordpool[i].timestamp === NordpoolTrimmed[j].timestamp) {
                NordpoolTrimmed[j].price = Nordpool[i].price;
                // break;
            }
        }
    }

}

// test
// NordpoolTrimmed[0].price = Nordpool[40].price;

global.set("NordpoolTrimmed", NordpoolTrimmed);
msg.payload = NordpoolTrimmed;

return msg;