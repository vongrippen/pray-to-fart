all:
	DISPLAY=:0 sudo google-chrome --pack-extension=Source --pack-extension-key=PrayToFart.pem --user-data-dir=/tmp/foooo
	sudo chown vongrippen:vongrippen Source.crx
	mv Source.crx PrayToFart.crx
