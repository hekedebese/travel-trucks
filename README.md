# TravelTrucks

Frontend for **TravelTrucks**, a camper van rental service. Users can browse the catalog, filter campers, open a camper's detail page with a photo gallery and reviews, and send a booking request.

**Live demo:** https://travel-trucks-roan-phi.vercel.app

**Backend API:** https://campers-api.goit.study

## Features

- **Home page** with a hero banner and a *View Now* button that leads to the catalog.
- **Catalog page** with a list of campers loaded from the backend.
- **Filtering on the backend** via query parameters:
  - location (text input, case-insensitive substring search);
  - camper form (one option);
  - engine type (one option);
  - transmission type (one option).
- **Load more pagination** built with `useInfiniteQuery`: each click loads 4 more campers, and new cards respect the active filters.
- **Loader and empty state**: a loading overlay during requests and a "No campers found" screen when nothing matches the filters.
- **Camper details page**, opened in a new tab from the *Show more* button:
  - full information and vehicle specifications;
  - image gallery with thumbnails (Swiper);
  - user reviews with a five-star rating;
  - booking form with validation and a success notification.

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) and TypeScript
- [TanStack Query](https://tanstack.com/query) (`useQuery`, `useInfiniteQuery`, `useMutation`)
- [Axios](https://axios-http.com/) for HTTP requests
- [Formik](https://formik.org/) and [Yup](https://github.com/jquense/yup) for the booking form
- [Swiper](https://swiperjs.com/) for the image gallery
- [react-hot-toast](https://react-hot-toast.com/) for notifications
- [React Icons](https://react-icons.github.io/react-icons/)
- CSS Modules for styling

## Getting started

### Requirements

- Node.js 20.9 or newer
- npm

### Installation

```bash
git clone https://github.com/hekedebese/travel-trucks.git
cd travel-trucks
npm install
```

### Run in development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

## Usage

1. On the home page, click **View Now** to open the catalog.
2. In the catalog, type a location and/or pick a camper form, engine and transmission, then click **Search**. Use **Clear filters** to reset everything.
3. Click **Load more** at the bottom of the list to load the next 4 campers.
4. Click **Show more** on a card to open the camper's page in a new tab.
5. On the details page, browse the gallery, read the reviews and fill in the booking form. After a successful request, a notification appears.

## API endpoints used

| Method | Endpoint                                | Purpose                              |
| ------ | --------------------------------------- | ------------------------------------ |
| GET    | `/campers`                              | Paginated and filtered list of campers |
| GET    | `/campers/filters`                      | Available filter options             |
| GET    | `/campers/{camperId}`                   | Single camper details                |
| GET    | `/campers/{camperId}/reviews`           | Reviews of a camper                  |
| POST   | `/campers/{camperId}/booking-requests`  | Create a booking request             |

## Project structure

```text
app/
  page.tsx                  # home page
  catalog/
    page.tsx                # catalog page
    [camperId]/             # camper details page
components/
  Catalog/                  # connects filters, list and pagination
  CamperFilter/             # filters sidebar
  CamperList/               # list of cards
  CamperItem/               # single camper card
  CamperGallery/            # Swiper gallery
  BookingForm/              # booking form (Formik + Yup)
  StarRating/               # five-star rating
  NoCampers/                # empty state
  Loader/                   # loading overlay
  Header/                   # site header
  TanStackProvider/         # React Query provider and toaster
src/lib/api.ts              # API requests
```

## Author

**Your Name**
GitHub: [@hekedebese](https://github.com/hekedebese)
