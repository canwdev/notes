# unlock your device, then erter the fastboot mode
# sudo fastboot flash recovery recovery.img 
# sudo fastboot flash boot recovery.img （有的设备没有recovery分区）

# enter recovery
# select "apply update from ADB sideload"
adb kill-server
sudo adb sideload A5FMB19_update.zip
