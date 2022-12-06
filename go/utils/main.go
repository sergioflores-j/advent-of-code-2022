package utils

import (
	"io/ioutil"
	"strings"
)

func GetInputFile(filename string) []string {
	data, err := ioutil.ReadFile(filename)
	if err != nil {
		panic(err)
	}
	return strings.Split(string(data), "\n")
}
