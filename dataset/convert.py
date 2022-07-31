import json


import json

from black import out

filename='word.txt'
dict1={}
dict1["word"]=[]
with open(filename) as fh:
    for line in fh:
        a=line.strip()
        dict1["word"].append(a)

out_file=open("words.json","w")
json.dump(dict1,out_file,indent=4,sort_keys=False)
out_file.close()
