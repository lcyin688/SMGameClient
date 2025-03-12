#!/bin/bash
protoc --go_out=. *.proto
# protoc --go_out=. --go_opt=paths=source_relative msg.proto