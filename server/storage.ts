import { bookings, contacts, type Booking, type Contact, type InsertBooking, type InsertContact } from "@shared/schema";

export interface IStorage {
  createBooking(booking: InsertBooking): Promise<Booking>;
  createContact(contact: InsertContact): Promise<Contact>;
  getBookings(): Promise<Booking[]>;
  getContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private bookings: Map<number, Booking> = new Map();
  private contacts: Map<number, Contact> = new Map();
  private bookingId = 1;
  private contactId = 1;

  async createBooking(bookingData: InsertBooking): Promise<Booking> {
    const id = this.bookingId++;
    const createdAt = new Date();
    const booking: Booking = { 
      id, 
      ...bookingData, 
      createdAt 
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async createContact(contactData: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const createdAt = new Date();
    const contact: Contact = {
      id,
      ...contactData,
      createdAt
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();
