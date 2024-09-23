# Detecting Emotional Tone of Text Using AI API

## Project Description

This project aims to detect the emotional tone of text inputs using AI-driven APIs. It provides an intuitive user interface for entering text and receiving real-time emotional analysis, while the backend processes text through AI models and serves emotion detection results via APIs.

## Project Structure

First of all clone the repo from github. After cloning `cd Emotional-Tone-Analyser`.

### Prerequisites

Before setting up the project, ensure you have the following installed on your machine:

- Node.js (v14 or later): Download [Node.js](https://nodejs.org/en)
- yarn: If not installed, run `npm install --global yarn`
- Google Cloud Account: [Sign up](https://cloud.google.com/)

### Backend

The backend is an Express.js application that is responsible for calling the Google Cloud Natural Language API. It parses and processes the response from Google Cloud before sending results to the frontend.

#### Setup

#### 1. Google Cloud Setup

To interact with the Google Cloud Natural Language API, you need to set up a Google Cloud project and create service account credentials.

##### a. Create a Google Cloud Project

1. **Sign in** to the [Google Cloud Console](https://console.cloud.google.com/).
2. Click on the **Project** dropdown at the top and select **New Project**.
3. Enter a **Project Name** (e.g., `emotion-detection-project`) and click **Create**.

##### b. Enable the Natural Language API

1. In the [Google Cloud Console](https://console.cloud.google.com/), ensure your project is selected.
2. Navigate to **APIs & Services** > **Library**.
3. Search for **Natural Language API** and click on it.
4. Click **Enable** to activate the API for your project.

##### c. Create a Service Account

1. Go to **APIs & Services** > **Credentials**.
2. Click **Create Credentials** > **Service Account**.
3. Enter a **Service Account Name** (e.g., `nlp-service-account`) and click **Create**.
4. (Optional) Assign roles if necessary, though for basic access, roles are not strictly required.
5. Click **Continue** and then **Done**.

##### d. Generate a JSON Key File

1. In the **Service Accounts** section, find the service account you just created.
2. Click on the **Actions** (three dots) next to it and select **Manage Keys**.
3. Click **Add Key** > **Create New Key**.
4. Choose **JSON** as the key type and click **Create**.
5. A JSON file will be downloaded to your machine. **Store this file securely** as it contains sensitive credentials.

#### 2. Repository Setup

1. Name this file `service-account.json` and put it into the root
2. Create a `.env` file with this content: `PORT=5001`and `GOOGLE_APPLICATION_CREDENTIALS=./service-account.json`
3. Run `yarn` or `yarn start` to install the dependencies
4. Run `yarn dev` (if in development) or `yarn start` to start the server


### Frontend

The frontend is a React application that offers an intuitive interface to insert a text and analyse text. It also display the results of the anaylisis in a user friendly way.

#### Setup 

1. `cd Frontend`
2. Run `yarn` or `yarn install` to install all the dependencies
3. create a `.env` file in the root with the following content: `BACKEND_URL=http://localhost:5001/` or any other url
4. Run `yarn start` to run the application