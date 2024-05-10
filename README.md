# Requirement
- Python 3.8
- Chrome 124.0.6367.202 (or same major version)
# Install
- Install virtualenv if not
`pip install virtualenv`
- Init .env environment
`virtualenv .env`
- Active virtual env
`.env\Scripts\activate.bat`
or .ps1 if using powershell
if Linux:
`source .env/scripts/activate`
- Install packages:
`pip install -r requirements.txt`
- Start webserver:
`python -m http.server`
or
`python createwebserver.py`
- Change csv file list
- Create screenshot folder:
`mkdir screenshot`
- Run script to generate pdf
`python generatepdf.py`
Wait & enjoy file created in screenshot!