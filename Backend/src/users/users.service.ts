import {
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const findById = await this.userRepository.findOne({ where: { id: id } });
    if (!findById)
      throw new HttpException(
        `User with id ${id} does not exist`,
        HttpStatus.NOT_FOUND,
      );
    return findById;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const getUser = await this.userRepository.findOneBy({ id: id });
    if (!getUser)
      throw new HttpException(
        `User with id ${id} does not exist`,
        HttpStatus.NOT_FOUND,
      );

    const updateUser = { ...getUser, ...updateUserDto, updated_at: new Date() };
    return await this.userRepository.save(updateUser);
  }

  async remove(id: number) {
    const findById = await this.userRepository.findOneBy({
      id: id,
    });

    if (!findById) {
      throw new HttpException(
        `User with id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }

    return await this.userRepository.delete(id);
  }
}
