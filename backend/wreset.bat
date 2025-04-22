for /f "tokens=*" %%i in ('docker ps -aq') do docker stop %%i
for /f "tokens=*" %%i in ('docker ps -aq') do docker rm %%i
docker-compose up -d