import { StarshipsService } from "../../domain/service/starships.service";
import { Response } from "../../utils/response";

module.exports.findOne = async (event) => {
  try {
    console.log("event::: ", event);
    const starshipsServcie = new StarshipsService();
    if (!event.pathParameters || !event.pathParameters.ID) {
      // failed without an ID
      return {
        body: JSON.stringify({ message: "Missing ID from path" }),
        statusCode: 400,
        isBase64Encoded: false,
      };
    }
    const id: string = event.pathParameters.ID;
    const findOne = await starshipsServcie.findOne(id);

    return {
      body: JSON.stringify(findOne),
      statusCode: 200,
      isBase64Encoded: false,
    };
  } catch (error) {
    throw new Error(`Bad request`);
  }
};
