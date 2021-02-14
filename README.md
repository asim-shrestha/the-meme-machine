<p align="center">
  <img src="https://raw.githubusercontent.com/asim-shrestha/mountain-madness-2021/master/frontend/public/hero.png" alt="The Meme Machine" height="300" />
</p>
<p align="center">
  <strong>Mountain Madness 2021 Submission</strong></br>
  <em>Team: Legacy Edition</em></br>
  <a href="https://mountain-madness-2021.vercel.app/" target="_blaank">Demo</a>
</p>
<p align="center">
<img alt="PyPI - Python Version" src="https://img.shields.io/pypi/pyversions/fastapi" />
<img alt="npm" src="https://img.shields.io/npm/v/npm" />
</p>

---
Built using python, fastapi, firebase, and next,  **The Meme Machine** is inspired by Susan Blackmore's book of the same name and seeks to bring her book to life. This webapp provides a platform for users to communicate solely in memes. Users can upload a meme template or use an existing one, create a new meme, view the memes of others in real time, and respond to memes with memes.

## Tech Stack and Deployment
Our backend is coded using [fastapi](https://fastapi.tiangolo.com/) and python 3.8. Our frontend is coded 
using [next.js](https://nextjs.org) (a React framework) and the React Bootstrap. Firebase is used to store data such as images and various python libraries are used to generate memes and also deep fry them 🔥.

### Running The Meme Machine
To install The Meme Machine, please follow the steps in order below.

**Backend**

Installing and running backend.  **Note**: python > 3.5 is required. 
```bash 
cd backend
pip install -r requirements.txt
python asgi.py
```
The backend should now be visible in a browser at `localhost:5000`.

**Frontend**
Installing and running frontend.  **Note**: nodejs lts is required.
```bash
cd frontend
npm install
npm run dev
```
The frontend should now be visible in a browser at `localhost:3000`.  The application should now be fully functional.
