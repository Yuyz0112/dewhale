#!/bin/bash

TASK_FILE="scripts/build-task"

if [ ! -f "$TASK_FILE" ]; then
  echo "Error: $TASK_FILE does not exist."
  exit 1
fi

DIR=$(cat "$TASK_FILE")

if [ -z "$DIR" ]; then
  echo "Error: No directory specified in $TASK_FILE."
  exit 1
fi

cd "$DIR"

if [ $? -ne 0 ]; then
  echo "Error: Failed to enter directory $DIR."
  exit 1
fi

yarn && yarn build

if [ $? -ne 0 ]; then
  echo "Error: Failed to build in directory $DIR."
  exit 1
fi

cd -

cp -r "$DIR/dist" "dist"

if [ $? -ne 0 ]; then
  echo "Error: Failed to copy dist directory."
  exit 1
fi

echo "Build and copy completed successfully."
