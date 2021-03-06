#!/bin/sh
prefix="/root/mail/new"
numPath="/root/mail"

if [ ! -f $numPath/emailNumbers ]; then
echo "0" > $numPath/emailNumbers
fi
emailNumbers=`cat $numPath/emailNumbers`
emailNumbers=$(($emailNumbers + 1))
echo $emailNumbers > $numPath/emailNumbers
name="$prefix/letter_$emailNumbers.eml"
while IFS= read line
do
echo "$line" >> $name
done
chmod 777 $name
/bin/true
