# Calculator Project

This is a simple calculator application built using HTML, CSS, and JavaScript, with a Flask backend. The project includes a user-friendly interface for performing basic arithmetic operations.

## Project Structure

```
calculator-project
├── static
│   ├── css
│   │   └── styles.css      # Styles for the calculator application
│   ├── js
│   │   └── script.js       # JavaScript code for calculator functionality
│   └── images              # Directory for images, including background image
├── templates
│   └── index.html          # Main HTML file for the application
├── .env                    # Environment variables for Flask application
├── app.py                  # Main entry point for the Flask application
└── README.md               # Documentation for the project
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd calculator-project
   ```

2. **Create a virtual environment**:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install the required packages**:
   ```
   pip install Flask
   ```

4. **Set up environment variables**:
   Create a `.env` file in the root directory and add your configuration settings. For example:
   ```
   SECRET_KEY=your_secret_key
   ```

5. **Run the application**:
   ```
   python app.py
   ```

6. **Open your browser**:
   Navigate to `http://127.0.0.1:5000` to view the calculator application.

## Usage

- Use the calculator interface to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.
- The application is responsive and should work on various screen sizes.

## Contributing

Feel free to submit issues or pull requests if you have suggestions for improvements or new features.