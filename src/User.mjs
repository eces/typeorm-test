const {Entity, Column, PrimaryGeneratedColumn} = require("typeorm")

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id;

  @Column("text")
  name;
  
  @Column({
      length: 1000,
  })
  profile;
}