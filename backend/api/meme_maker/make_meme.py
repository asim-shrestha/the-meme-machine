from pathlib import Path

from PIL import Image
from PIL import ImageFont
from PIL import ImageDraw

from io import BytesIO

import deeppyer


def make_meme(filename, top_text, bottom_text):
    #get image and font
    img = Image.open(str(filename))
    if img.mode != 'RGB':
        img = img.convert('RGB')

    draw = ImageDraw.Draw(img)

    try:
        font = ImageFont.truetype('impact.ttf', 64)
    except:
        font = ImageFont.truetype('/usr/local/share/fonts/impact.ttf', 64)

    #set some variables
    white = (255, 255, 255)
    black = (0, 0, 0)
    stroke = 2
    W, H = img.size

    #calculate size and add top text
    w, h = draw.textsize(top_text, font=font)
    draw.text(((W-w)/2, 0), top_text, font=font, fill=white, stroke_fill=black, stroke_width=stroke)

    #calculate size and add bottom text
    w, h = draw.textsize(bottom_text, font=font)
    draw.text(((W-w)/2, H-90), bottom_text, font=font, fill=white, stroke_fill=black, stroke_width=stroke)
    
    #outputs to this file
    buf = BytesIO()
    img.save(buf, format='JPEG')

    return buf


async def fry_image(file):
    img = Image.open(file)

    try:
        img = await deeppyer.deepfry(img)
    except:
        print('Flares failed')
        img = await deeppyer.deepfry(img, flares=False)

    buf = BytesIO()
    img.save(buf, format='JPEG')

    return buf
