## Grand Hotel Webpage

This project is a webpage for Grand Hotel, featuring sections like About Us, Rooms, Customers, and a Footer.

It is built using HTML, CSS, and JavaScript.

I built this within a week, and it is the result of a Udemy CSS course which focussed on learning Flexbox when styling. 
This helped me to deeply understand and apply flexbox.

## Project Structure

The project is organized into the following main sections:

Sidebar: Contains social media links and a menu icon.
Navigation: Main navigation with links to different sections of the website.
Header: Welcoming message and an entry button.
About Us: Information about the hotel.
Rooms: Display of different room types available at the hotel.
Customers: Testimonials from happy customers.
Footer: Contact information, exploration links, a newsletter sign-up form, and a gallery.

## Dependencies
I used font awesome for icons and Google Fonts for typography.

## Problems

I encountered many problems when building this website, especially with images overlapping each other or not aligning correctly, since it is a large project and I would find myself lost in the code. 
In the future, I will split my code into different folders to make debugging easier and make the projects more manageable.

Many times I had to go back and add containers around all images in order to position them how I wanted using flexbox, here is a code snippet which 
helped me: 
.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.image {
  margin: 10px;
}

