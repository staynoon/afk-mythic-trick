from flask import Flask

app = Flask(__name__)

import gspread
from oauth2client.service_account import ServiceAccountCredentials
credential = ServiceAccountCredentials.from_json_keyfile_name("credentials.json", ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/spreadsheets","https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive"])

client = gspread.authorize(credential)
gsheet = client.open("Stage Idle Rewards")
stageidle = gsheet.get_worksheet(2)

chapterStage = [12,28]
chapterStage.extend([36]*2)
chapterStage.extend([40]*15)
chapterStage.extend([60]*21)

def convertchapt2stage(chapter):
    return sum(chapterStage[0:chapter])

@app.route('/progression/<int:chapter>/<int:stage>',methods=["GET"])
def idletime(chapter,stage):
    gearvalue = 0
    stonevalue = 0
    emblemvalue = 0

    if chapter < 35:
        rowvalue = convertchapt2stage(chapter-1) + stage + 2
    else:
        rowvalue = 1614
    timer_list = stageidle.row_values(rowvalue)
    gearvalue = timer_list[(timer_list.index("Mythic Gear")) + 1]
    if chapter >= 20:
        emblemvalue = timer_list[(timer_list.index("Faction Emblems")) + 1]
    if chapter >= 21:
        stonevalue = timer_list[(timer_list.index("Mythic+ Stone")) + 1]

    return {'Mythic Gear': gearvalue, 'Faction Emblems': emblemvalue, 'Mythic+ Stone': stonevalue}