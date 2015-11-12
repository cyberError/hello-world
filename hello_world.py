#! /usr/bin/env python3
__module__="hello_world"
__author__="CyberError"
## Example of Hello World program in python 3.
print("Hello World")
##
## A little bit more advanced re-usable hello world:
def hello_world(name="World"):
    print("Hello %s")

hello_world()
name=input("Your name please?")
hello_world(name)
