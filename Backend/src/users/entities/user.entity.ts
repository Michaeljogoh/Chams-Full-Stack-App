import { BaseEntity ,Entity , PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('users')
export class User  extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    firstname: string;

    @Column({type: 'varchar'})
    lastname:  string;

    @Column({type: 'varchar'})
    email: string

    @Column({default : true})
    isActive: boolean


}
