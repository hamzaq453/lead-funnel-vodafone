import { NextResponse } from 'next/server';
import db from '@/app/db/dbClient';
import { leads } from '@/app/db/schema';
import { NewLead } from '@/app/db/schema';

// Handler for adding a new lead (POST request)
export async function POST(request: Request) {
    try {
        const data = await request.json() as Partial<NewLead>;

        // Validate required fields
        const { jobImportance, customerExperience, contactTime, fullName, email, phone, address } = data;
        if (!jobImportance || !customerExperience || !contactTime || !fullName || !email || !phone || !address) {
            return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
        }

        // Prepare leadData with all required fields and default status
        const leadData: NewLead = {
            jobImportance,
            customerExperience,
            contactTime,
            fullName,
            email,
            phone,
            address,
            status: data.status || 'New', // Default to 'New' if not provided
        };

        // Insert the new lead into the database
        await db.insert(leads).values(leadData);

        return NextResponse.json({ message: 'Lead added successfully!' });
    } catch (error) {
        console.error('Error adding lead:', error);
        return NextResponse.json({ error: 'Failed to add lead.' }, { status: 500 });
    }
}
