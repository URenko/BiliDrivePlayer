from pprint import pprint
from CDNDrive.drivers import *
from CDNDrive.encoders import *
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("audiofile")
args = parser.parse_args()

api = drivers['bili']
print(api.get_user_info())

ret = []
encoder = PngEncoder()
def up(data):
    j = api.image_upload(encoder.encode(data))
    pprint(j)
    ret.append(j['data'])

with open(args.audiofile, 'rb') as f:
    content = f.read()

cutlen = 10*1024*1024
cutps = len(content)//cutlen+1
cutlen = len(content)//cutps+1
for t in range(len(content)//cutlen):
    print(t)
    with open(f'{t}.flac', 'wb') as f:
        up(content[t*cutlen:(t+1)*cutlen])

t += 1
with open(f'{t}.flac', 'wb') as f:
    up(content[t*cutlen:])
print(ret)