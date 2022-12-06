package day1

import (
	"testing"

	"github.com/sergioflores-j/advent-of-code-2022/utils"
)

func TestCalculateCalories(t *testing.T) {
	mock := utils.GetInputFile("mock.txt")
	challengeInput := utils.GetInputFile("input.txt")

	cases := []struct {
		in    []string
		want1 int
		want2 int
	}{
		{mock, 24000, 45000},
		{challengeInput, 70764, 203905},
	}
	for _, c := range cases {
		input := GetChallengeInput(c.in)
		got1, got2 := CalculateCalories(input)

		if got1 != c.want1 {
			t.Errorf("CalculateCalories(%q) == %q, want %q", c.in, got1, c.want1)
		}

		if got2 != c.want2 {
			t.Errorf("CalculateCalories(%q) == %q, want %q", c.in, got2, c.want2)
		}
	}
}
