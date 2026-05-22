.PHONY: install dev update optimize_images

install:
	npm install

dev:
	npm run dev

update:
	npm update

optimize_images:
	node scripts/optimize-images.js
