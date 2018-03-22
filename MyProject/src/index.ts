import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {Photo} from "./entity/Photo";

createConnection().then(async connection => {

    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);
    
    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);
     
    // console.log("Here you can setup and run express/koa/any other framework.");

    // const p1 = new Photo()
    // p1.filename = 'pic-' + Date.now()
    // p1.ext = 'gif'
    // await connection.manager.save(p1)

    // const photos = await connection
    //   .getRepository(Photo)
    //   .createQueryBuilder('photo')
    //   .where('photo.ext = :ext', {ext: 'png'})
    //   .getManyAndCount()
    // console.log(photos)

    // console.time('q2')
    // const sql = 'SELECT `photo`.`ext` AS `photo_ext`, COUNT(`photo`.`id`) AS `count` FROM `photo` `photo` GROUP BY `photo`.`ext`'
    // const plain = await connection
    //   .createEntityManager()
    //   .query(sql)
    // console.timeEnd('q2')
    // console.log('>>>', plain)

    console.time('q1')
    const photos = await connection
      .getRepository(Photo)
      .createQueryBuilder('photo')
      .select('COUNT(photo.id)', 'count')
      .addSelect('photo.ext')
      .groupBy('photo.ext')
      // .where('photo.ext = :ext', {ext: 'png'})
      .getRawMany()
      // .getQuery()
    // SELECT`photo`.`ext` AS`photo_ext`, COUNT(`photo`.`id`) AS`count` FROM`photo` `photo` GROUP BY`photo`.`ext`
    console.timeEnd('q1')
    console.log(photos)
    
}).catch(error => console.log(error));
