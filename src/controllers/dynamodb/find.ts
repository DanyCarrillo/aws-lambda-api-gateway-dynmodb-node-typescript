import { StarshipsService } from "../../domain/service/starships.service";
import { Response } from "../../utils/response";

module.exports.find = async (event, context, callback) => {
  try {
    const starshipsServcie = new StarshipsService();
    const find = await starshipsServcie.find();
    const response = {
      body: JSON.stringify(find),
      statusCode: 200,
      isBase64Encoded: false,
    };
    callback(null, response);
  } catch (error) {
    throw new Error(`Bad request`);
  }
};
