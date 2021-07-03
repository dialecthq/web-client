package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net/http"
	"strconv"
	"time"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go"

	"google.golang.org/api/option"
)
var App, Firestore = initializeApp()

func main() {
	defer Firestore.Close()

	// /user - all user endpoints
	http.HandleFunc("/user/check/email", handleCheckEmail)
	http.HandleFunc("/user/check/username", handleCheckUsername)

    log.Println("Listing for requests at http://localhost:9000/")
	log.Fatal(http.ListenAndServe(":9000", nil))
}

func initializeApp()(*firebase.App, *firestore.Client) {
	ctx := context.Background()
	opt := option.WithCredentialsFile("./service.json")
	app, err :=firebase.NewApp(ctx, nil, opt)
	if err != nil {
		panic(err)
	}

	firestore, err := app.Firestore(ctx)
	if err != nil {
		panic(err)
	}

	return app, firestore
}

// Set headers for request
func ValidateReq(w *http.ResponseWriter, req *http.Request, route string)(string, error){
	year, month, day := time.Now().Date()
	hour, minute, second := time.Now().Clock()
	timeString := strconv.Itoa(int(month)) + "/" + strconv.Itoa(day) + "/" + strconv.Itoa(year) + " " + strconv.Itoa(hour) + ":" + strconv.Itoa(minute) + ":" + strconv.Itoa(second)

	(*w).Header().Set("Content-Type", "application/json")
    if origin := req.Header.Get("Origin"); origin != "" {
		(*w).Header().Set("Access-Control-Allow-Origin", origin)
		(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		(*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
	} else {
		return fmt.Sprintf("[%v] - ERRROR - Could not validate request", timeString), errors.New("Could not identify origin")
	}

	fmt.Printf("[%v] - %v\n", timeString, route)
	return "Successfully validated request", nil
}

func handleCheckEmail(w http.ResponseWriter, req *http.Request) {
	message, err := ValidateReq(&w, req, "/user/check/email")
	if err != nil {
		fmt.Printf(message)
		return 
	}

	type messageJSON struct {
		Message string `json:"message"`
		Available bool `json:"available"`
	}

	email, ok := req.URL.Query()["email"]
	if !ok {
		return 
	}
	
	iter := Firestore.Collection("users").Where("email", "==", email[0]).Documents(context.Background())
	documents, err := iter.GetAll()
	if err != nil {
		jsonData, _ := json.Marshal(messageJSON{Message: "Email was not given", Available: false})
		w.WriteHeader(http.StatusOK)
		w.Write(jsonData)
	}

	if len(documents) > 0 {
		jsonData, _ := json.Marshal(messageJSON{Message: "Email is not available", Available: false})
		w.WriteHeader(http.StatusOK)
		w.Write(jsonData)
	} else {
		jsonData, _ := json.Marshal(messageJSON{Message: "Email is available", Available: true})
		w.WriteHeader(http.StatusOK)
		w.Write(jsonData)
	}
}

func handleCheckUsername(w http.ResponseWriter, req *http.Request) {
	message, err := ValidateReq(&w, req, "/user/check/username")
	if err != nil {
		fmt.Printf(message)
		return 
	}

	type messageJSON struct {
		Message string `json:"message"`
		Available bool `json:"available"`
	}

	username, ok := req.URL.Query()["username"]
	if !ok {
		return 
	}
	
	iter := Firestore.Collection("users").Where("username", "==", username[0]).Documents(context.Background())
	documents, err := iter.GetAll()
	if err != nil {
		jsonData, _ := json.Marshal(messageJSON{Message: "Username was not given", Available: false})
		w.WriteHeader(http.StatusOK)
		w.Write(jsonData)
	}

	if len(documents) > 0 {
		jsonData, _ := json.Marshal(messageJSON{Message: "Username is not available", Available: false})
		w.WriteHeader(http.StatusOK)
		w.Write(jsonData)
	} else {
		jsonData, _ := json.Marshal(messageJSON{Message: "Username is available", Available: true})
		w.WriteHeader(http.StatusOK)
		w.Write(jsonData)
	}
}