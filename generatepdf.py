# from http.server import executable
import os
import io
import time
import json
from selenium import webdriver
# import undetected_chromedriver as webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from PIL import Image
# from io import BytesIO
import http.server
import socketserver
from threading import Thread, current_thread

PORT = 8000
# DIRECTORY = "."

# def createWebServer(PORT):
#     # Handler = http.server.SimpleHTTPRequestHandler
#     # with socketserver.TCPServer(("", PORT), Handler) as httpd:
#     #     print("serving at port", PORT)
#     #     httpd.serve_forever()
#     httpd = http.server.HTTPServer(("", PORT), http.server.SimpleHTTPRequestHandler)
#     print("serving at port", PORT)
#     httpd.serve_forever()

# thread = Thread(target=createWebServer, args=(PORT, ))
# thread.start()
print('continue running')
#URL = "https://twitter.com/i/flow/login"
URL = f"http://localhost:{PORT}"
# Determine the operating system and set the path to the ChromeDriver accordingly
driver_path = './chromedrive/chromedriver.exe'
if os.name == 'nt':  # Windows OS
    driver_path = './chromedrive/chromedriver.exe'
else:  # Linux OS
    driver_path = './chromedrive/chromedriver'

# Set up Chrome options for headless mode
chrome_options = webdriver.ChromeOptions()
# chrome_options.binary_location = driver_path

user_agent = """Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"""
chrome_options.add_argument(f"user-agent={user_agent}")
# chrome_options.add_argument('user-data-dir=./UserData')
# chrome_options.add_argument('profile-directory=Profile1')
chrome_options.add_argument("--no-sandbox"); # Bypass OS security model
chrome_options.add_argument("--headless")
# chrome_options.add_argument("--remote-debugging-port=9222")
chrome_options.add_argument("start-maximized"); # open Browser in maximized mode
chrome_options.add_argument('--start-fullscreen');
chrome_options.add_argument("disable-infobars"); # disabling infobars
chrome_options.add_argument("--hide-scrollbars");
chrome_options.add_argument("--disable-extensions"); # disabling extensions
chrome_options.add_argument("--disable-gpu"); # applicable to windows os only
chrome_options.add_argument("--disable-dev-shm-usage"); # overcome limited resource problems
chrome_options.add_argument("--window-size=1024x768") # Optional
chrome_options.headless = True
chrome_options.log_level = "TRACE"
# print(1);
#setting for printing
# settings = {
#     "appState": {
#         "recentDestinations": [{
#             "id": "Save as PDF",
#             "origin": "local"
#         }],
#         "selectedDestinationId": "Save as PDF",
#         "version": 2
#     }  
# }
# prefs = {'printing.print_preview_sticky_settings': json.dumps(settings)}
# chrome_options = webdriver.ChromeOptions()
# chrome_options.add_experimental_option('prefs', prefs)
# chrome_options.add_argument('--kiosk-printing')

# Initialize Chrome WebDriver with the provided path and options
browser = webdriver.Chrome(driver_path,options=chrome_options)
# browser = webdriver.Chrome(chrome_options,browser_executable_path=driver_path)

def remove_non_alphanumeric(text):
  """Replaces all characters that are not alphanumeric with an empty string"""
  return ''.join(c for c in text if c.isalnum())  # isalnum() checks alphanumeric

def Login(name,cname,dob,sex,email):
    name_elem = WebDriverWait(browser, 10).until(
        EC.presence_of_element_located((By.ID, "name"))
    )
    name_elem.send_keys(name)
    cname_elem = WebDriverWait(browser, 10).until(
        EC.presence_of_element_located((By.ID, "cname"))
    )
    cname_elem.send_keys(cname)
    dob_elem = WebDriverWait(browser, 10).until(
        EC.presence_of_element_located((By.ID, "birthday"))
    )
    dob_elem.send_keys(dob)
    sex_elem = WebDriverWait(browser, 10).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, "input[type=radio][name=gender][id="+sex+"]"))
    )
    sex_elem.click()
    email_elem = WebDriverWait(browser, 10).until(
        EC.presence_of_element_located((By.ID, "email"))
    )
    email_elem.send_keys(email)
    btnCalculate_elem = WebDriverWait(browser, 10).until(
        EC.presence_of_element_located((By.ID, "btnCalculate"))
    )
    btnCalculate_elem.click()
    time.sleep(2)
    browser.save_screenshot(f"./screenshot/{remove_non_alphanumeric(name)}{remove_non_alphanumeric(dob)}.png")
    take_full_page_screenshot(browser,f'./screenshot/{remove_non_alphanumeric(name)}{remove_non_alphanumeric(dob)}.pdf')
    # browser.execute_script('window.print();')
def take_full_page_screenshot(driver, destination):
    """Takes a full-page screenshot of the current webpage and saves it"""
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    total_width = driver.execute_script("return document.body.offsetWidth")
    height = driver.execute_script("return document.body.parentNode.scrollHeight")
    screenshot = Image.new('RGB', (total_width, height))
    y = 0
    while y < height:
        driver.execute_script(f"window.scrollTo(0, {y})")
        part_screenshot = driver.get_screenshot_as_png()
        part_image = Image.open(io.BytesIO(part_screenshot))#Image.frombytes('RGB', part_screenshot.size, part_screenshot)
        screenshot.paste(part_image, (0, y))
        y += part_image.size[1]
    screenshot.save(destination)

browser.get(URL)
time.sleep(3)
Login('Dao Manh Thang', 'Thang', '10/02/1986', 'male', 'thang@mail.com')
# if 'login' in browser.current_url:
#     Login()
# time.sleep(3)
# article_elem = WebDriverWait(browser, 60).until(
#     EC.presence_of_element_located((By.TAG_NAME, "article"))
#     #EC.presence_of_element_located((By.XPATH, '/html/body/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div/div[5]/label/div/div[2]/div/input'))
# )
# print(len(article_elem.text))
# ProcessArticle()
time.sleep(1)

# Close the browser
browser.quit()
