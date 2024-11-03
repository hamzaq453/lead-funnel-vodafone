import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';

// Define the "leads" table schema
export const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  jobImportance: varchar('job_importance', { length: 50 }).notNull(),
  customerExperience: varchar('customer_experience', { length: 50 }).notNull(),
  contactTime: varchar('contact_time', { length: 50 }).notNull(),
  fullName: varchar('full_name', { length: 100 }).notNull(),
  email: varchar('email', { length: 100 }).notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  status: varchar('status', { length: 20 }).default('Neu').notNull(),
  address: varchar('address', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type Lead = typeof leads.$inferSelect; // Type for fetched data
export type NewLead = typeof leads.$inferInsert; // Type for inserting data
