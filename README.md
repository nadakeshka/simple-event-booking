🎟️ Simple Event Booking App

         A React Native mobile application that allows users to browse, view, and register for events.
         This project was built as part of a React Native Developer Task.

🚀 Features
         👤 User Authentication
          Sign Up and Login using MockAPI.io
          as backend simulation.
          User data is stored locally using AsyncStorage for session management.

📅 Event Listings

      Fetches and displays all available events from MockAPI.
      
      Each event shows:
      
      🏷 Title
      
      🗓 Date
      
      💰 Price
      
      📍 Location
      
      🖼 Image
      
      When the user taps on an event, they’re navigated to a detailed view.

📝 Event Details Page

      Displays detailed event information including:
      
      Event Name
      
      Date & Time
      
      Location
      
      Description
      
      Speakers
      
      Price (or “Free” if applicable)
      
      Capacity
      
      Available Spots
      
      Image / Banner
      
      Includes a Register button to allow users to register for the event.

🎟️ User Dashboard

   Displays all the events that the logged-in user has registered for.
   
   ⚙️ Tech Stack
   
   React Native (Expo)
   
   React Navigation
   
   AsyncStorage

   MockAPI.io
   
   Material Icons / Ionicons (for UI icons)


###################3Notes############################################################################################################

      The app interacts with a MockAPI backend for authentication and event data.
      
      Local user session is maintained using AsyncStorage.
      
      Navigation between screens is handled using React Navigation.
      
      Basic error messages are shown via Alert when API calls fail.


----------------------------------------------------------------------------------------------------------------------------------

MockAPI Setup

      The app uses MockAPI.io
      to simulate backend services for both Authentication and Events Management.
      Below are the example endpoints and data structures used:

 🧍‍♀️ Users Endpoint
      https://68f93760deff18f212b8fb3b.mockapi.io/users

--------------------------------------------
   {
  "id": "1",
  "name": "Nada Keshka",
  "email": "nada@example.com",
  "password": "123456"
  }
--------------------------------------------
Used for:

User Sign Up and Login
Authentication via email & password
User ID stored in AsyncStorage after login

-----------------------------------------------------------------------------------------------------------------------------------------
🎫 Events Endpoint
 https://68f93760deff18f212b8fb3b.mockapi.io/events

 -------------------------------------------
 {
  "id": "101",
  "title": "AI Conference 2025",
  "date": "2025-11-12",
  "location": "Cairo, Egypt",
  "description": "A full-day event discussing the future of Artificial Intelligence.",
  "speakers": ["Dr. Hady", "Prof. Ahmed Youssef"],
  "price": "Free",
  "capacity": 200,
  "availableSpots": 150,
  "imageUrl": "https://example.com/event-banner.jpg",
  "registrations": [
    { "userId": "1", "status": "confirmed" }
  ]
} ----------------------------------------------
  
   Used for:
   
   Fetching and displaying all available events in the Dashboard
   
   Viewing full details in EventDetails
   
   Registering users for events
   
   Fetching user-specific events in UserDashboard



