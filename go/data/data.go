package data

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
)

// Languages array
type Languages struct {
	Languages []Language `json:"languages"`
}

// Language struct
type Language struct {
    Value   string `json:"value"`
    Key   int `json:"key"`
}


func main() {
	// Open our jsonFile
	jsonFile, err := os.Open("./data/languages.json")
	// if we os.Open returns an error then handle it
	if err != nil {
		fmt.Println(err)
	}
	// defer the closing of our jsonFile so that we can parse it later on
	defer jsonFile.Close()


	fmt.Println("Successfully Opened languages.json")
	// read our opened jsonFile as a byte array.
	byteValue, _ := ioutil.ReadAll(jsonFile)
	// we initialize our Users array
	var languages Languages

	// we unmarshal our byteArray which contains our
	// jsonFile's content into 'users' which we defined above
	json.Unmarshal(byteValue, &languages)

	// we iterate through every user within our users array and
	// print out the user Type, their name, and their facebook url
	// as just an example
	for i := 0; i < len(languages.Languages); i++ {
		fmt.Printf("Key: %v, Value: %v", languages.Languages[i].Key, languages.Languages[i].Value)
	}
}