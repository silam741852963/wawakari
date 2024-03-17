# wawakari

Welcome to [wawakari](https://wawakari.web.app/) - a web application designed to parse Japanese sentences and evaluate their politeness levels. At the heart of wawakari, we integrate the power of [Next.js](https://nextjs.org/) for the web frontend and [GiNZA](https://github.com/megagonlabs/ginza?tab=readme-ov-file) for our API that performs dependency parsing and politeness level evaluation of Japanese text.

## Features

- Dependency Parsing: Break down Japanese sentences to understand their grammatical structure using the GiNZA library.
- Politeness Evaluation: Assess the politeness level of Japanese sentences, providing insights for language learners and professionals.
- Interactive Web Interface: Powered by Next.js, wawakari offers a seamless user experience to input and analyze Japanese text.
- Real-time Analysis: Get instant feedback on the structure and politeness of your Japanese sentences.

## Getting Started

### Prerequisites

- Node.js (v21.0 or later)
- npm (v10.2 or later)
- Python (v3.11 or later)
- pip (v24.0)

### Installation

1. Clone the repository   

```
gh repo clone silam741852963/wawakari
cd wawakari
```

2. Set up the Python backend

```
# Navigate to the backend directory from the root
cd wawakari-server

# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Windows
venv\Scripts\activate
# On Unix or MacOS
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the backend server
python app.py
```

3. Set up the Next.js frontend
   
Be sure to set up .env.local file in wawakari/wawakari-client with SERVER_URL

```
# Navigate to the frontend directory
cd wawakari-client

# Install dependencies
npm install

# Start the development server
npm run dev
```
## Usage

After setting up both the frontend and backend, navigate to http://localhost:3000 (default for Nextjs app) on your web browser to use wawakari. Input a Japanese sentence, and the web app will display its dependency structure and politeness level shortly.

## Development

Want to contribute? Great! There are many ways how you can contribute to wawakari:

- Submitting bug reports and feature requests
- Improving documentation
- Submitting pull requests with code fixes and enhancements

## License

wawakari is released under the MIT License. See the LICENSE file for more details.

