// Package day1 implements functions to solve the first day's problem.
package day1

import (
	"sort"
	"strconv"
)

func GetChallengeInput(input []string) [][]int {
	var currentGroup []int
	var groups [][]int

	for _, line := range input {
		if line == "" {
			groups = append(groups, currentGroup)
			currentGroup = []int{}
		} else {
			lineInt, _ := strconv.Atoi(line)
			currentGroup = append(currentGroup, lineInt)
		}
	}

	return groups
}

// Returns the results of Calorie Counting for the top 1 and top 3 elves.
func CalculateCalories(elvesFoodList [][]int) (int, int) {
	var totalCaloriesByElf []int

	for _, foodList := range elvesFoodList {
		totalCalories := 0
		for _, calorie := range foodList {
			totalCalories += calorie
		}
		totalCaloriesByElf = append(totalCaloriesByElf, totalCalories)
	}

	sort.Sort(sort.Reverse(sort.IntSlice(totalCaloriesByElf)))

	return totalCaloriesByElf[0], totalCaloriesByElf[0] + totalCaloriesByElf[1] + totalCaloriesByElf[2]
}
