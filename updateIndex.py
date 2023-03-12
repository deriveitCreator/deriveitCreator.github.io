import os 
from bs4 import BeautifulSoup

timeModified = [0,0,0,0]
fileModified = ["","","",""]
timeCreated = [0,0,0,0]
fileCreated = ["","","",""]

def setArr(curTime,timeArr,fileArr):
    if(curTime>timeArr[-1]):
        timeArr[-1] = curTime
        fileArr[-1] = topic+"/"+subTopic+"/"+article
        for i in [2,3,4]:
            if(timeArr[1-i]>timeArr[-i]):
                temp = timeArr[-i]
                timeArr[-i] = timeArr[1-i]
                timeArr[1-i] = temp
                temp = fileArr[-i]
                fileArr[-i] = fileArr[1-i]
                fileArr[1-i] = temp
            else: break

cwd = os.getcwd() 
names = os.listdir()
topics = ['algebra','geometry','astronomy','biology','chemistry','calculus','dismaths','mechanics','linear_algebra','electricity','trigonometry','ps']
for topic in names:
    if topic in topics:
        for subTopic in os.listdir(path= cwd + "/" + topic):
            if not "." in subTopic:
                for article in os.listdir(path= cwd + "/" + topic + "/" + subTopic):
                    if ".html" in article:
                        setArr(os.stat(cwd+"/"+topic+"/"+subTopic+"/"+article).st_mtime_ns,timeModified,fileModified)
                        setArr(os.stat(cwd+"/"+topic+"/"+subTopic+"/"+article).st_ctime_ns,timeCreated,fileCreated)

indexFile = open("index.html","r")
indexText = BeautifulSoup(indexFile.read(), 'html.parser')
indexFile.close()

def setTable(id,file):
    num = 0
    for tda in indexText.select(id+ " .ttext a"):
        tda['href'] = file[num]
        tda.string = BeautifulSoup(open(file[num],"r").read(), 'html.parser').select("title")[0].string
        num += 1

setTable("#tableadded",fileCreated)
setTable("#tableedit",fileModified)

indexFile = open("index.html","w")
indexFile.write(str(indexText.prettify(formatter='html')))
indexFile.close()