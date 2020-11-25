import { StarshipsRepository } from "../../src/repositories/service/startships.repository";

import { StarshipsEntity } from "../../src/repositories/entity/starships.entity";
const starshipsRepository = new StarshipsRepository();
test("service starships findAll", async () => {
  const resolverFindAll: StarshipsEntity[] = await starshipsRepository.findAll();
  console.log("service: ", resolverFindAll);
  if (resolverFindAll && resolverFindAll.length > 0) {
    const count = resolverFindAll[0].count;
    expect(count).toBe(36);
  }
});
