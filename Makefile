build:
	npm run build
	go build -o build/main main.go

frontend:
	npm run dev

backend:
	mkdir -p build/client
	go tool air

live: 
	@echo "Starting live development server..."
	${MAKE} -j 2 frontend backend
	