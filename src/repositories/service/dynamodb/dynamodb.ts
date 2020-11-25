import { DynamoDB } from "aws-sdk";
import { IDynamodb } from "../../entity/dynamodb/dynamodb";
import { ScanOutput } from "aws-sdk/clients/dynamodb";

export class DynamodbRepository {
  private dynamoDb = new DynamoDB.DocumentClient();
  public save(params: IDynamodb): void {
    this.dynamoDb.put(params, (error, result) => {
      // handle potential errors
      if (error) {
        console.error(error);
        throw new Error("Couldn't create the document in dynamodb.");
      }
    });
  }

  public async find(): Promise<any> {
    const params = {
      TableName: `${process.env.DYNAMODB_TABLE}`,
    };
    const data: ScanOutput = await this.dynamoDb.scan(params).promise();
    // handle potential errors
    if (!data || !data.Items) {
      throw Error(
        `There was an error fetching the data from ${params.TableName}`
      );
    }
    return data.Items;
  }
  public async findOne(id: string): Promise<any> {
    let response;
    const params = {
      TableName: `${process.env.DYNAMODB_TABLE}`,
      Key: {
        id,
      },
    };

    const data = await this.dynamoDb.get(params).promise();
    // handle potential errors
    if (!data || !data.Item) {
      throw Error(
        `There was an error fetching the data for id of ${params.Key} from ${params.TableName}`
      );
    }
    return data.Item;
  }
}
