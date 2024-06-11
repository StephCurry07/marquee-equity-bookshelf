# Personal Bookshelf

This is a React-based Book Library application that allows users to search for books, add them to their personal bookshelf, and remove them from it. The app integrates with an external book API to fetch book details based on user queries.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)

## Features

- **Search Books**: Search for books by name using Open Library API.
- **Add to Bookshelf**: Add selected books to your personal bookshelf.
- **Remove from Bookshelf**: Remove books from your bookshelf.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies

- **React**: JavaScript library for building user interfaces.
- **CSS**: For styling and making responsive design.
- **Axios**: Promise-based HTTP client for making API requests.

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/StephCurry07/marquee-equity-bookshelf.git
    cd marquee-equity-bookshelf
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Start the development server**:
    ```sh
    npm start
    ```

4. **Build for production**:
    ```sh
    npm run build
    ```

## Usage

1. **Search for Books**:
    - Enter the name of a book in the search input. Wait for sometime after typing.
    - The app fetches and displays a list of books matching the search query in realtime as you type. The delay caused is due to the API Response time.

2. **Add to Bookshelf**:
    - Click the "Add to Bookshelf" button on a book card to save it to your personal bookshelf.
    - Bookshelf data is stored in local storage.

3. **View Bookshelf**:
    - Navigate to your bookshelf by clicking the "My bookshelf" button.

4. **Remove from Bookshelf**:
    - Click the "Remove from Bookshelf" button on a book card in your bookshelf to remove it.
---
