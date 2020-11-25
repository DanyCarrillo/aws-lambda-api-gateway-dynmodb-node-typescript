import { StarshipsService } from "../../src/domain/service/starships.service";
test("findAllController", async () => {
  const starshipsServcie = new StarshipsService();
  const findAll = await starshipsServcie.findAll();
  console.log("controller: ", findAll);
});
