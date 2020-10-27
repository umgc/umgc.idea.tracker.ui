
VERSION:=1.0.$(shell git rev-list HEAD | wc -l)
APP_NAME=project-tracker-ui
APP_TAG=$(VERSION)
APP_IMG=$(APP_NAME):$(APP_TAG)
REMOTE_IMG:=docker.io/umgccaps/$(APP_IMG)
BUILD_IMG=docker.io/umgccaps/advance-development-factory:latest

all:
	docker build -f ./docker/Dockerfile -t $(APP_IMG) .


push:
	docker tag $(APP_IMG) $(REMOTE_IMG)
	docker push $(REMOTE_IMG)


start:
	docker run -d --rm -p 4200:4200 --name project-tracker-ui $(APP_IMG)

stop:
	docker stop project-tracker-ui

deploy:
	docker run -v $(PWD)/:/repo --entrypoint '/bin/bash' $(BUILD_IMG) \
			-c 'cd /repo && az login && az group create --name devTestGroup --location eastus && \
					az deployment group create --resource-group devTestGroup \
					--template-file azure/deploy-template.json \
					--parameter azure/deploy-parameters.json \
					--parameter imageName=$(REMOTE_IMG) \
					--parameter dnsNameLabel=project-tracker'

	@$(info $(REMOTE_IMG) deployed to project-tracker.eastus.azurecontainer.io)
	@$(info This may take a few minutes to respond)

stop-deploy:
	docker run -v $(PWD)/:/repo --entrypoint '/bin/bash' $(BUILD_IMG) \
			-c 'cd /repo && az login && az group delete --name devTestGroup --yes'