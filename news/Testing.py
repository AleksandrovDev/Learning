import json
import os
import sys
from collections import defaultdict
from datetime import date, datetime
from random import randint

qoq = [{"created": "2020-02-09 14:15:10", "text": "Text of the news 1", "title": "News 1", "link": 1},
       {"created": "2020-02-10 14:15:10", "text": "Text of the news 2", "title": "News 2", "link": 2},
       {"created": "2020-02-09 16:15:10", "text": "Text of the news 3", "title": "News 3", "link": 3}]

for k in qoq:
       print(k["title"])
