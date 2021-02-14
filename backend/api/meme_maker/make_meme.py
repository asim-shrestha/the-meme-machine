from pathlib import Path

from PIL import Image
from PIL import ImageFont
from PIL import ImageDraw

from io import BytesIO

import deeppyer


COLORS = {
    'red': deeppyer.DefaultColours.red,
    'blue': deeppyer.DefaultColours.blue
}


def make_meme(filename, top_text, bottom_text):
    #get image and font
    img = Image.open(str(filename))
    if img.mode != 'RGB':
        img = img.convert('RGB')

    draw = ImageDraw.Draw(img)

    try:
        font_size = find_font_size(bottom_text, 'impact.ttf', img, 1/3)
        font = ImageFont.truetype('impact.ttf', font_size)
    except:
        font_size = find_font_size(bottom_text, '/usr/local/share/fonts/impact.ttf', img, 1/3)
        font = ImageFont.truetype('/usr/local/share/fonts/impact.ttf', 1/3)

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
    draw.text(((W-w)/2, H-60), bottom_text, font=font, fill=white, stroke_fill=black, stroke_width=stroke)

    #outputs to this file
    buf = BytesIO()
    img.save(buf, format='JPEG')

    return buf

def find_font_size(text, font, image, target_width_ratio):
    tested_font_size = 100
    tested_font = ImageFont.truetype(font, tested_font_size)
    observed_width, observed_height = get_text_size(text, image, tested_font)
    if (observed_width / image.width) == 0:
        return 32
    estimated_font_size = tested_font_size / (observed_width / image.width) * target_width_ratio
    return round(estimated_font_size)

def get_text_size(text, image, font):
    im = Image.new('RGB', (image.width, image.height))
    draw = ImageDraw.Draw(im)
    return draw.textsize(text, font)

async def fry_image(file, color: str = 'red'):
    img = Image.open(file)
    color = COLORS.get(color, deeppyer.DefaultColours.red)

    try:
        img = await deeppyer.deepfry(img, colours=color)
    except:
        img = await deeppyer.deepfry(img, colours=color, flares=False)

    buf = BytesIO()
    img.save(buf, format='JPEG')

    return buf
