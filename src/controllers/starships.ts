"use strict";

import { StarshipsService } from "../domain/service/starships.service";

module.exports.list = async (event, context, callback) => {
  const starshipsServcie = new StarshipsService();
  try {
    const findAll = await starshipsServcie.findAll();
    const response = {
      statusCode: 201,
      body: JSON.stringify(findAll[0]),
      isBase64Encoded: false,
    };
    callback(null, response);
  } catch (error) {
    throw new Error(`Bad request`);
  }
};
