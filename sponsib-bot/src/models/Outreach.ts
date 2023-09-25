import { Document, Schema, model } from 'mongoose';

// This model is for keeping track of outreach attempts


interface IOutreach {
    // Generics
    outreachId: string;

    // The contact that we are trying to reach

    contactId: string;

    // The slack ID of the user that is trying to reach the contact
    userId: string;

    // Steps of the pipeline that have been attempted

    // Current state of the outreach
    
    

}

const outreachSchema = new Schema({
    
});

export type OutreachModel = Document<unknown, {}, IOutreach> & IOutreach;
export const OutreachModel = model<IOutreach>('outreach', outreachSchema);