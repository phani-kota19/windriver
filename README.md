Prerequisites:
Docker Installed

Build:
sudo docker build -t code-challenge .

Start:
sudo docker run --name code-challenge -p 8080:8080 code-challenge

apis:

/api/health (GET API)
/api/encrypt (POST API)

Request:
{
    "input": "foo"
}

Response:

{
    "Input": "foo",
    "Output": "somefooencryption",
    "status": "Success",
    "message": "Encryption Completed"
}


/api/decrypt (POST API)


Request:

{
    "input": "somefooencryption"
}


Response:

{
    "Input": "somefooencryption",
    "Output": "foo",
    "status": "Success",
    "message": "Encryption Completed"
}