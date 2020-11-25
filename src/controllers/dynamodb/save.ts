import { StarshipsService } from "../../domain/service/starships.service";
import { Response } from "../../utils/response";

module.exports.save = async (event, context, callback) => {
  const starshipsServcie = new StarshipsService();
  const data = JSON.parse(event.body);
  try {
    const findAll = await starshipsServcie.save(data);
    const response = {
      statusCode: 201,
      body: JSON.stringify({ message: "Successful save" }),
      isBase64Encoded: false,
    };

    callback(null, response);
  } catch (error) {
    throw new Error(`Bad request`);
  }
};
