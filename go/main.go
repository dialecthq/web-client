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
	"firebase.google.com/go/auth"

	"google.golang.org/api/option"
)
var App, Firestore, Auth = initializeApp()

func main() {
	defer Firestore.Close()

	// /user - all user endpoints
	http.HandleFunc("/user/check/email", handleCheckEmail)
	http.HandleFunc("/user/check/username", handleCheckUsername)
	http.HandleFunc("/user/register", handleRegister)

    log.Println("Listing for requests at http://localhost:9000/")
	log.Fatal(http.ListenAndServe(":9000", nil))
}

func initializeApp()(*firebase.App, *firestore.Client, *auth.Client) {
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

	auth, err := app.Auth(ctx)

	return app, firestore, auth
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

func handleRegister(w http.ResponseWriter, req *http.Request) {
	message, err := ValidateReq(&w, req, "/user/register")
	if err != nil {
		fmt.Printf(message)
		return 
	}

	type language struct {
		Key int `json:"key"`
		Level int `json:"level"`
	}

	type newUser struct {
		Country int `json:"country"`
		Email string `json:"email"`
		Name string `json:"name"`
		Password string `json:"password"`
		Timezone int `json:"timezone"`
		Username string `json:"username"`
		Languages []language `json:"languages"`

	}

	type resultJson struct {
		Message string `json:"message"`
		User newUser `json:"user"`
	}

	var user newUser

	err = json.NewDecoder(req.Body).Decode(&user)
    if err != nil {
		jsonData, _ := json.Marshal(resultJson{Message: "Successfully created user", User: user})
		w.WriteHeader(http.StatusOK)
		w.Write(jsonData)
        return
	}
	
	params := (&auth.UserToCreate{}).
        Email(user.Email).
		Password(user.Password)
		
	u, err := Auth.CreateUser(context.Background(), params)

	if err != nil {
		jsonData, _ := json.Marshal(resultJson{Message: "Successfully created user"})
		w.WriteHeader(http.StatusOK)
		w.Write(jsonData)
		return
	}

	_, err = Firestore.Collection("users").Doc(u.UID).Set(context.Background(), map[string]interface{}{
		"name": user.Name,
		"email": user.Email,
		"timezone": user.Timezone,
		"country": user.Country,
		"languages": user.Languages,
		"username": user.Username,
	})

	if err != nil {
		jsonData, _ := json.Marshal(resultJson{Message: "Successfully created user"})
		w.WriteHeader(http.StatusOK)
		w.Write(jsonData)
        return 
	}

	jsonData, _ := json.Marshal(resultJson{Message: "Successfully created user", User: user})
	w.WriteHeader(http.StatusOK)
	w.Write(jsonData)
}