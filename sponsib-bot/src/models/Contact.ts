import { Document, Schema, model } from 'mongoose';

interface IContact {
    // UUID for the contact
    contactId: string;

    // How we know them

    // name of the person
    contactOrigin: string;
    // type
    contactType: "CORE" | "EXCHANGE" | "UNKNOWN";

    // Contact details

    firstName: string;
    lastName: string;
    email: string;
    role?: string;


    // Organization details
    organizationId: string;
    organizationName: string;
    

}

const contactSchema = new Schema({
    
});

export type ContactModel = Document<unknown, {}, IContact> & IContact;
export const ContactModel = model<IContact>('contact', contactSchema);