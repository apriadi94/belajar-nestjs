import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.model';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('Users') private readonly userModel: Model<UserDocument>
    ){}
    async getData() {
        return this.userModel.find().exec()
    }
}
