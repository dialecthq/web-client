package main

import (
	"context"
	"fmt"
	"log"
	"net/http"

	firebase "firebase.google.com/go"

	"google.golang.org/api/option"
)
  

func main() {
	ctx := context.Background()
	opt := option.WithCredentialsFile("./service.json")
  	app, err := firebase.NewApp(ctx, nil, opt)
  	if err != nil {
		panic(err)
	}
	  
	firestore, err := app.Firestore(ctx)
	if err != nil {
		panic(err)
	}
	defer firestore.Close()
	  

	http.HandleFunc("/", func(w http.ResponseWriter, req *http.Request) {
		dsnap, err := firestore.Collection("users").Doc("A24rYmC41QMvRegENtZfsUGNeo63").Get(ctx)
		if err != nil {
			panic(err)
		}
		data := dsnap.Data()
		fmt.Printf("data: %v\n", data)
	})
	
    log.Println("Listing for requests at http://localhost:8000/")
	log.Fatal(http.ListenAndServe(":8000", nil))
}