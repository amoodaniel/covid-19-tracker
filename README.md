# COVID-19 Tracker: A Lockdown-Era Data Visualization Project

## Overview

This COVID-19 Tracker is a web application built during the global lockdown period to provide a clear, interactive, and up-to-date visualization of the pandemic's spread across the world. The project aims to transform raw COVID-19 data into an accessible format, allowing users to explore trends, compare countries, and understand the pandemic's impact through an intuitive interface.

*(Optional: Consider adding a screenshot or GIF of the application in action here. You can host it on GitHub or a service like Imgur and embed it.)*
<!-- ![App Screenshot](link-to-your-screenshot.png) -->

## Purpose & Motivation

Developed during a time of unprecedented global uncertainty, this project was born out of a desire to:
1.  **Make Sense of Data:** To take the overwhelming stream of pandemic statistics and present them in a way that is easy to comprehend and analyze.
2.  **Hone Technical Skills:** To apply and enhance web development, data handling, and visualization skills in a real-world, impactful scenario.
3.  **Contribute Information:** To provide a useful tool for individuals to track the pandemic's progression, fostering awareness and understanding.

This project showcases my ability to rapidly develop a data-driven application in response to a pressing global event, emphasizing data analysis and user-centric design.

## Features

*   **Global Data Overview:** Displays worldwide total cases, recoveries, and deaths.
*   **Country-Specific Statistics:** Users can select a country from a dropdown to view detailed statistics for that nation.
*   **Interactive Map Visualization:** A Leaflet map dynamically displays data for each country, with circle sizes proportional to the selected metric (cases, recovered, or deaths).
*   **Data-Rich Popups:** Clicking on a country on the map or table reveals detailed statistics and the country's flag.

## Data Analysis & Insights

This application processes and visualizes data from the [disease.sh API](https://disease.sh/) (Note: API status and data accuracy are subject to the provider). Key data analysis aspects include:

*   **Real-time Data Fetching:** The application fetches the latest global and historical COVID-19 data.
*   **Data Transformation:** Raw data is processed to calculate daily new cases/recoveries/deaths for the line graph.
*   **Proportional Visualization:** Circle sizes on the map are calculated based on `Math.sqrt(count) * multiplier` to provide a more balanced visual representation of varying data magnitudes. This involved iterative adjustments to the multipliers to ensure clarity and reduce overlap.
*   **User-Driven Data Exploration:** Users can switch between viewing total cases, recoveries, and deaths, allowing them to analyze different facets of the pandemic's impact.

## Technical Skills Demonstrated

*   **Frontend Development:**
    *   **React:** Core application structure, component-based architecture, hooks (`useState`, `useEffect`) for state management and side effects.
    *   **JavaScript (ES6+):** Modern JavaScript syntax for application logic, data manipulation, and asynchronous operations (`async/await`, Promises).
    *   **HTML5 & CSS3:** Semantic markup and styling for the user interface.
*   **Data Visualization:**
    *   **Chart.js (via react-chartjs-2):** Creating interactive line graphs to display historical data trends.
    *   **Leaflet (via react-leaflet):** Implementing an interactive map with custom markers and popups.
*   **API Integration:**
    *   Fetching data from a third-party REST API (`disease.sh`).
    *   Handling asynchronous API responses and updating the UI accordingly.
*   **Data Handling & Manipulation:**
    *   Processing JSON data.
    *   Sorting and transforming data for display (e.g., calculating daily differences, sorting country lists).
    *   Using libraries like `numeral.js` for formatting numbers.
*   **UI/UX:**
    *   **Material-UI:** Utilizing components like Cards, Dropdowns (Select), and Table for a clean and responsive user interface.
    *   Focus on creating an intuitive user experience for data exploration.
*   **Development & Build Tools:**
    *   **Node.js & npm:** Project setup, dependency management, and running development scripts.
    *   **Create React App:** Project scaffolding and build process.
*   **Problem Solving & Debugging:**
    *   Iteratively addressed numerous challenges, including dependency conflicts, API data structuring, cross-browser compatibility (implied by web development), and visual representation of dense data on the map.
    *   Resolved issues related to Node.js versions, package incompatibilities (`react-leaflet`, `chart.js`), and build tool configurations (e.g., OpenSSL legacy provider for Webpack).

## Setup & Installation

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/amoodaniel/covid-19-tracker.git
    cd covid-19-tracker
    ```
2.  **Install dependencies:**
    Ensure you have Node.js and npm installed.
    ```bash
    npm install
    ```
    *Note: During development, some permission issues with npm were encountered, occasionally requiring `sudo` for installations. Dependency versions have been pinned to ensure compatibility as of the last update.*
3.  **Start the development server:**
    ```bash
    # If you encounter issues related to OpenSSL/Webpack, you might need:
    NODE_OPTIONS=--openssl-legacy-provider npm start
    # Otherwise, simply:
    # npm start
    ```
4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Future Enhancements (Optional)

*   More granular data (e.g., by region/state).
*   Advanced filtering and sorting options.
*   User accounts to save preferred views or countries.
*   Improved mobile responsiveness.

---

This project represents a significant learning experience and a demonstration of my ability to build a meaningful application under challenging circumstances. It showcases my passion for data-driven insights and my proficiency in modern web technologies.
