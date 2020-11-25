export interface IDynamodb {
  TableName: string;
  Item: {
    id: string;
    data: object;
    createdAt: string;
    updatedAt: string;
  };
}
