# Detecting Emotional Tone of Text Using AI API

## Project Description

This project aims to detect the emotional tone of text inputs using AI-driven APIs. It provides an intuitive user interface for entering text and receiving emotional analysis, while the backend processes text through AI models and serves emotion detection results via APIs. To start playing with the tool, clone the repository with the command: `git clone`.

## Project Structure

### Prerequisites

Before setting up the project, ensure you have the following installed on your machine:

- Node.js (v14 or later): Download [Node.js](https://nodejs.org/en)
- yarn: If not installed, run `npm install --global yarn`
- Google Cloud Account: [Sign up](https://cloud.google.com/)

### Backend

The backend is built with Express.js and is responsible for integrating with the Google Cloud Natural Language API. It processes and parses the API's response, delivering the analyzed emotional tone data to the frontend.

#### Setup

#### 1. Google Cloud Setup

To interact with the Google Cloud Natural Language API, you need to set up a Google Cloud project and create service account credentials.

##### a. Create a Google Cloud Project

1. **Sign in** to the [Google Cloud Console](https://console.cloud.google.com/).
2. Click on the **Project** dropdown at the top and select **New Project**.
3. Enter a **Project Name** and click **Create**.

##### b. Enable the Natural Language API

1. In the [Google Cloud Console](https://console.cloud.google.com/), ensure your project is selected.
2. Navigate to **APIs & Services** > **Library**.
3. Search for **Natural Language API** and click on it.
4. Click **Enable** to activate the API for your project.

##### c. Create a Service Account

1. Go to **APIs & Services** > **Credentials**.
2. Click **Create Credentials** > **Service Account**.
3. Enter a **Service Account Name** and click **Create**.
4. Click **Continue** and then **Done**.

##### d. Generate a JSON Key File

1. In the **Service Accounts** section, find the service account you just created.
2. Click on the **Actions** (three dots) next to it and select **Manage Keys**.
3. Click **Add Key** > **Create New Key**.
4. Choose **JSON** as the key type and click **Create**.
5. A JSON file will be downloaded to your machine. **Store this file securely** as it contains sensitive credentials.

#### 2. Repository Setup

1. `cd Backend`
2. Rename the downloaded JSON file containing your Google Cloud credentials to `service-account.json` and move it to the root directory of the backend.
3. Create a `.env` file in the root with the following content: `PORT=5001`and `GOOGLE_APPLICATION_CREDENTIALS=./service-account.json`
4. Run `yarn` or `yarn start` to install all the dependencies
5. Run `yarn dev`(development) or `yarn build` and `yarn start`(production) to start the server

Note: You can customize the PORT value and the path to the JSON credentials file in the .env file. However, ensure that your private credentials are not exposed by updating the .gitignore file to prevent the credentials file from being pushed to the repository.


### Frontend

The frontend is a React application that provides an intuitive interface for users to input text and perform emotional analysis. It displays the analysis results in a clear and user-friendly manner, ensuring an engaging and seamless user experience.

#### Setup 

1. `cd Frontend`
2. Run `yarn` or `yarn install` to install all the dependencies
3. create a `.env` file in the root with the following content: `BACKEND_URL=http://localhost:5001/` or any other url
4. Run `yarn start` to run the application