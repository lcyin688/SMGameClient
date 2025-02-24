#!/bin/bash

ip=$1
pf=$2
zf=$pf.tar.gz
ROOT_PATH=../../

cd ${ROOT_PATH}/build
scp -r web-desktop game@$ip:/data/


# tar -czf $zf $pf
# ::scp -r $zf x1game:~/client
# ssh -Tq x1game << EOF
#	cd ~/client
#	./publish.sh $ip $pf
# EOF

# rm $zf
