#!/bin/bash
protoc --go_out=. *.proto 
# protoc --go_out=. --go_opt=paths=source_relative msg.proto
# 延迟 2秒后 把msg.proto 文件和.msg/msg.pb.go 文件复制到对应目录
sleep 2

# 获取当前脚本所在目录（兼容 macOS 和 Linux）
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE}")" &>/dev/null && pwd -P)"

# 获取上一层目录
PARENT_DIR1="$(dirname "$SCRIPT_DIR")"

# 获取上一层目录
PARENT_DIR2="$(dirname "$PARENT_DIR1")"

echo "当前脚本目录: $SCRIPT_DIR"
echo "上一层目录  : $PARENT_DIR1"
echo "上两层目录  : $PARENT_DIR2"
# 定义源文件和目标目录
SOURCE_FILES=("$SCRIPT_DIR/msg.proto" "$SCRIPT_DIR/msg/msg.pb.go")
DEST_DIR="$PARENT_DIR2/zinx/goStudyIZinx/zinxStudy/myFirstGame/pb"

# # 检查目标目录是否存在
if [ ! -d "$DEST_DIR" ]; then
  mkdir -p "$DEST_DIR"
  echo "Created directory: $DEST_DIR"
fi

# # 复制文件
for file in "${SOURCE_FILES[@]}"; do
  if [ -e "$file" ]; then
    cp -v "$file" "$DEST_DIR"
  else
    echo "Warning: $file does not exist, skipping."
  fi
done

echo "Copy completed."