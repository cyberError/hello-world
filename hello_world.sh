#!/bin/bash
# script by CyberError
# output hello world
echo "Hello World"
if [ -z "$1" ]
# if there is no parameter passed ask for name
then
echo "Name:"
read name
echo "Hello $name"
else
#else print echo parameter (name)
echo "Hello $1"
fi
