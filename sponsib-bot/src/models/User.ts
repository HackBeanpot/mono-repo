import { Document, Schema, model } from 'mongoose';

interface IUser {
    // Generics 
    slackId: string;
    name: string;
    email: string;
    emailVerified: boolean;

    // Authentication for email inbox access
    emailAuthentication?: string;

    // Bot-specific permissions
    canViewPipeline?: boolean;
    canEditPipeline?: boolean;
    canSendEmails?: boolean;
    canViewInbox?: boolean;
}

const userSchema = new Schema({
    slackId: { type: String, required: true, index: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    emailVerified: { type: Boolean, required: true, default: false },
    emailAuthentication: { type: String, required: false} ,


});

export type UserModel = Document<unknown, {}, IUser> & IUser;
export const UserModel = model<IUser>('contact', userSchema);