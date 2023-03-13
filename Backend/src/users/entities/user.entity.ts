import { BaseEntity ,Entity , PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('users')
export class User  extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname:  string;

    @Column()
    email: string

    @Column({default : true})
    isActive: boolean


}
