# Tic Tac Toe

#### Video Demo:  
[Watch the demo here](https://youtu.be/sWcTOej40RM)

#### Description:
Tic Tac Toe, is a classic board game that has entertained generations of players of all ages. This project is a web implementation of the game that allows users to play against another player on a 3x3 board. The simplicity of the game, combined with the competitive element, makes it a popular choice for passing the time.

The objective of the game is to get three symbols in a row, either horizontally, vertically, or diagonally. Players take turns choosing where to place their symbol (X or O) on the board. At the end of each round, the game announces the winner through a modal popup, providing an interactive and dynamic experience. Additionally, users can reset the game at any time, allowing for multiple rounds without the need to refresh the page.

#### File Structure:
This project consists of several essential files, detailed below:

1. **index.html**  
   This file contains the main structure of the webpage. It includes:
   - A dropdown menu to select the number of rounds to play.
   - The Tic Tac Toe game board made up of a 3x3 grid of cells.
   - Buttons to reset the game or the board.  
   It also loads external scripts (`script.js`) and styles (`styles.css`) necessary for the game to function.

2. **styles.css**  
   This file defines the layout and appearance of the game. It includes:
   - Styles for the game board and individual cells to ensure they are responsive across devices.
   - Custom CSS for the buttons and dropdown menu, enhancing the overall aesthetics of the game.
   - Modal popup styling to display winner announcements cleanly and effectively.

3. **script.js**  
   This file contains the core logic of the game. 
   - It handles user interactions with the board, registering click events to place X and O in the corresponding cells.
   - Implements the game logic to check for winning conditions (three in a row) and manages the game state, including tracking the current player, the number of rounds won, and detecting draws.
   - Utilizes the Modal component to display announcements of winners or draws, providing an intuitive user experience.

4. **/components/modal.js**  
   This file contains a reusable Modal component that handles:
   - Displaying popup messages when a player wins a round or the game ends in a draw.
   - Dynamically updating the modal content based on the current game state.
   - Closing the modal after the result is acknowledged, allowing players to continue with the next round or reset the game.

#### Design Decisions:
In developing this project, I made several key design decisions. First, I chose a clean, minimalist board design to ensure players focus on the game without unnecessary distractions. Using contrasting colors for X and O improves visibility and enhances the overall visual experience.

The decision to use a dropdown menu for selecting the number of rounds was based on the need for simplicity and efficiency. It allows players to easily set their preferences before starting the game. Additionally, using modal popups to announce results provides an interactive and engaging approach that enriches the player experience.

#### Technologies Used:
This project was built using standard web technologies, including:
- **HTML** for the content structure.
- **CSS** for design and presentation.
- **JavaScript** for game logic and interactivity.

No additional libraries or frameworks are used, keeping the project lightweight and easy to understand, even for those new to web development.

#### Getting Started:
To run this project locally:
1. Clone this repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Play and have fun challenging your friends to a game of Tic Tac Toe.

### Conclusion:
This Tic Tac Toe project is not only a fun way to play but also an excellent way to practice and improve your programming skills in JavaScript, HTML, and CSS. I hope you enjoy playing it as much as I enjoyed creating this implementation. Have fun, and may the best player win!

# Final-CS5-0-Project
