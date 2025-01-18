# Tambola Game

Tambola Game is a web application that allows users to play the popular Tambola game. The game includes features such as automated number calling, customizable time intervals, and dark mode support.

## Features

- Automated number calling with customizable time intervals
- Pause, resume, and restart game functionality
- Dark mode support
- Responsive design with a mobile-friendly navigation menu
- Leaderboard to display top players

## Technologies Used

- React
- Next.js
- Zustand for state management
- Tailwind CSS for styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/tambola-game.git
   cd tambola-game
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

### Project Structure

- `src/app/game/page.tsx`: Main game page component that handles the game logic and state management.
- `src/app/game/GameBoard.tsx`: Game board component that displays the called numbers and game grid.
- `src/app/leaderboard/LeaderBoard.tsx`: Leaderboard component that displays the top players.
- `src/components/navbar.tsx`: Navbar component with navigation links and theme toggle.
- `src/components/toggle-theme.tsx`: Theme toggle component for switching between light and dark modes.
- `src/store/gameStore.ts`: Zustand store for managing the game state.
- `src/store/slices/gameSlice.ts`: Zustand slice for the game state.

### Customization

You can customize the game settings and appearance by modifying the following files:

- `src/app/game/page.tsx`: Adjust the default interval time and game logic.
- `src/components/navbar.tsx`: Update the navigation links and theme toggle.
- `tailwind.config.js`: Customize the Tailwind CSS configuration.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
