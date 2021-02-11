// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const listingData = require("../../data.json");

export default (req: any, res: any) => {
  res.statusCode = 200;
  res.json(JSON.stringify(listingData));
};
