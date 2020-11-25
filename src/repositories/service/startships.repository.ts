import axios from "axios";
import { StarshipsEntity } from "../entity/starships.entity";
import { Endpoints } from "../../environment/endpoints.environmet";
import * as uuid from "uuid";
import { DynamodbRepository } from "./dynamodb/dynamodb";
import { IDynamodb } from "../entity/dynamodb/dynamodb";
import { Guid } from "guid-typescript";

export class StarshipsRepository {
  private dynamoResolver = new DynamodbRepository();
  public async findAll(): Promise<StarshipsEntity[]> {
    const host = Endpoints.host;
    const pathStarships = Endpoints.pahts.starships;
    const url: string = `${host}${pathStarships}`;

    try {
      let result: StarshipsEntity[] = [];
      const response = await axios.get(url);
      if (response) {
        result = [response.data];
      }
      return result;
    } catch (exception) {
      throw new Error(`Error: ${exception}`);
    }
  }

  public async save(body: any): Promise<boolean> {
    let result = false;
    const nowTime = new Date().getTime();
    const params: IDynamodb = {
      TableName: `${process.env.DYNAMODB_TABLE}`,
      Item: {
        id: Guid.create().toString(),
        data: body,
        createdAt: `${nowTime}`,
        updatedAt: `${nowTime}`,
      },
    };
    try {
      const save = this.dynamoResolver.save(params);
      result = true;
      return result;
    } catch (exception) {
      throw new Error(`Error: ${exception}`);
    }
  }

  public async find(): Promise<any> {
    try {
      const find = await this.dynamoResolver.find();
      return find;
    } catch (exception) {
      throw new Error(`Error: ${exception}`);
    }
  }

  public async findOne(id: string): Promise<any> {
    try {
      const findOne = await this.dynamoResolver.findOne(id);
      return findOne;
    } catch (exception) {
      throw new Error(`Error: ${exception}`);
    }
  }
}
