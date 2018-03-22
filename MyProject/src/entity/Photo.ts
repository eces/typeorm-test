import {Entity, PrimaryGeneratedColumn, Column, Index} from "typeorm";

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
      length: 300,
    })
    filename: string;
    
    @Column()
    @Index('filesize-idx')
    ext: string;
    
    @Column('double')
    filesize: number;

}
