# Adour River Height Widget (Dax)

This is a small page that shows the latest river height for **Adour in Dax** (station `Q312003001`).
It updates automatically.

## Simple explanation (non-technical)

## How to download the 4 files

Choose one method below.

### Method 1 (easiest): Download ZIP from GitHub

1. Open the project page in your browser.
2. Click the green **Code** button.
3. Click **Download ZIP**.
4. Unzip it.
5. Open the unzipped folder: this is your project folder (repo folder).

You should see these 4 files inside:
- `index.html`
- `style.css`
- `widget.js`
- `README.md`

### Method 2: Copy/paste each file manually

If someone sent you the code in chat, create a new folder named `Adour`, then create and save these files:

- `index.html`
- `style.css`
- `widget.js`
- `README.md`

Make sure the names are exactly the same (including `.html`, `.css`, `.js`, `.md`).

---

- Think of this project as a **small mini-website**.
- The **“repo folder”** just means the folder on your computer that contains these files:
  - `index.html`
  - `style.css`
  - `widget.js`
  - `README.md`
- You run one command in that folder, then open a local web address in your browser.

## Direct download (single file)

If you want one-click download, use `adour-widget-files.zip` from this repository.

- On GitHub, click `adour-widget-files.zip`.
- Click **Download raw file**.
- Unzip it to get:
  - `index.html`
  - `style.css`
  - `widget.js`
  - `README.md`

---

## If GitHub shows only `.gitkeep`

That means your 4 widget files are **not uploaded yet**.

GitHub currently has just one placeholder file (`.gitkeep`).
You need to upload these files to the same repository:

- `index.html`
- `style.css`
- `widget.js`
- `README.md`

### Important: you cannot download files from GitHub if they are not there yet

If your GitHub repository only shows `.gitkeep`, there is nothing to download from GitHub yet.
You must first create/upload the 4 files from your computer.

### Manual method (create files directly on GitHub website)

Use this if you do not want to use git commands.

1. Open your repository on GitHub.
2. Click **Add file** → **Create new file**.
3. Name it `index.html`.
4. Paste the `index.html` content.
5. Click **Commit changes**.
6. Repeat the same steps for:
   - `style.css`
   - `widget.js`
   - `README.md`

When done, the repository will contain all 4 files.

### Alternative manual method (upload files from your PC)

1. Create a folder on your computer named `Adour`.
2. Inside it, create these files and paste their content:
   - `index.html`
   - `style.css`
   - `widget.js`
   - `README.md`
3. Save all files.
4. On GitHub: **Add file** → **Upload files**.
5. Drag and drop the 4 files.
6. Click **Commit changes**.

### Fastest way (GitHub website, no command line)

1. Open your repository on GitHub.
2. Click **Add file** → **Upload files**.
3. Drag and drop:
   - `index.html`
   - `style.css`
   - `widget.js`
   - `README.md`
4. Scroll down and click **Commit changes**.

After that, your repository will show all files (not only `.gitkeep`).

### Command-line way (if you use git locally)

Run these commands in your project folder:

```bash
git add index.html style.css widget.js README.md
git commit -m "Add Adour widget files"
git push
```

If `git push` asks for authentication, sign in with your GitHub account/token.

---

## Before you start

You need:

1. A browser (Chrome / Edge / Firefox)
2. Python installed (most computers already have it; if not, install Python 3)

## Step-by-step (copy exactly)

### 1) Open the project folder

Open Terminal (or Command Prompt) and go to the folder where you saved these files.

Example command (replace with your real path):

```bash
cd /path/to/Adour
```

On Windows it may look like:

```bash
cd C:\Users\YourName\Downloads\Adour
```

### 2) Start the local server

Run:

```bash
python3 -m http.server 8080
```

If your computer says `python3` is not found, try:

```bash
python -m http.server 8080
```

Keep this terminal window open.

### 3) Open the widget

In your browser, open:

```text
http://localhost:8080
```

You should now see the Adour widget with the current height in meters.

---

## Put it on your desktop (easy methods)

### Option A (best): Install as an app window

This makes it feel like a desktop widget.

1. Open `http://localhost:8080` in Chrome or Edge.
2. Install as app:
   - **Chrome**: Menu (`⋮`) → **Cast, save, and share** → **Install page as app**
   - **Edge**: Menu (`⋯`) → **Apps** → **Install this site as an app**
3. Open that app and resize it small.
4. Move it to a corner of your screen.

### Option B: Keep browser window always on top

- Open `http://localhost:8080` in a small browser window.
- Use an “Always on top” tool:
  - **Windows**: PowerToys → Always On Top (`Win + Ctrl + T`)
  - **Linux**: window menu → Always on Top
  - **macOS**: use a small “always on top” utility

---

## What if I close things?

- If you close the terminal running `http.server`, the widget stops.
- To start again, repeat Step 2 and Step 3.

## Optional: start automatically at login

If you want this every day:

1. Add the server command to startup:
   - `python3 -m http.server 8080` (in this folder)
2. Add your browser app/window (`http://localhost:8080`) to startup.

## How updates work

- The widget tries to fetch official public data for station `Q312003001`.
- It refreshes every **60 seconds**.
- If one data source fails temporarily, it tries another one automatically.
