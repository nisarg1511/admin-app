export interface IProfessional {
    user_id: string;
    id?: string;
    profile_picture: string;
    user_name: string;
    email: string;
    phone_number: number;
    mobile_number: number;
    profession: string;
    company_description: string;
    company_name: string;
    instagram: string;
    linkedIn: string;
    whatsapp: string | number;
    facebook: string;
    created_at: Date;
    images: any[];
    address: {
        street: string;
        locality: string;
        city: string;
        pincode: number;
    }
}