
VERSION:=1.0.$(shell git rev-list HEAD | wc -l)
APP_NAME=project-tracker-ui
APP_TAG=$(VERSION)
APP_IMG=$(APP_NAME):$(APP_TAG)
REMOTE_IMG:=docker.io/umgccaps/$(APP_IMG)


all:
	docker build -f ./docker/Dockerfile -t $(APP_IMG) .


push:
	docker tag $(APP_IMG) $(REMOTE_IMG)
	docker push $(REMOTE_IMG)


start:
	docker run -d --rm -p 4200:4200 --name project-tracker-ui $(APP_IMG)

stop:
	docker stop project-tracker-ui