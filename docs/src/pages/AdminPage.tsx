import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Booking, Contact } from "@shared/schema";

export default function AdminPage() {
  // Query bookings with TanStack Query
  const { 
    data: bookings,
    isLoading: isLoadingBookings,
    error: bookingsError
  } = useQuery<Booking[]>({
    queryKey: ['/api/bookings'],
  });

  // Query contacts with TanStack Query
  const { 
    data: contacts,
    isLoading: isLoadingContacts,
    error: contactsError
  } = useQuery<Contact[]>({
    queryKey: ['/api/contacts'],
  });

  if (isLoadingBookings || isLoadingContacts) {
    return <div className="container mx-auto py-10">Loading...</div>;
  }

  if (bookingsError || contactsError) {
    return <div className="container mx-auto py-10">Error loading data</div>;
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Bookings</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">ID</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Phone</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Service</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Time</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Created At</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bookings && bookings.length > 0 ? (
                bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">{booking.id}</td>
                    <td className="px-4 py-3 text-sm">{booking.name}</td>
                    <td className="px-4 py-3 text-sm">{booking.email}</td>
                    <td className="px-4 py-3 text-sm">{booking.phone}</td>
                    <td className="px-4 py-3 text-sm">{booking.service}</td>
                    <td className="px-4 py-3 text-sm">{booking.date}</td>
                    <td className="px-4 py-3 text-sm">{booking.time}</td>
                    <td className="px-4 py-3 text-sm">
                      {new Date(booking.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="px-4 py-3 text-sm text-center">
                    No bookings found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Contact Messages</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">ID</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Subject</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Message</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Created At</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {contacts && contacts.length > 0 ? (
                contacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">{contact.id}</td>
                    <td className="px-4 py-3 text-sm">{contact.name}</td>
                    <td className="px-4 py-3 text-sm">{contact.email}</td>
                    <td className="px-4 py-3 text-sm">{contact.subject}</td>
                    <td className="px-4 py-3 text-sm">
                      {contact.message.length > 50
                        ? `${contact.message.substring(0, 50)}...`
                        : contact.message}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {new Date(contact.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-4 py-3 text-sm text-center">
                    No contact messages found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}