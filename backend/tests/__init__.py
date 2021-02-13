import os
import pathlib
import shutil

from pathlib import Path

TEST_DIR = pathlib.Path(__file__).parent

os.environ['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{str(TEST_DIR)}/.test.db?check_same_thread=False"
