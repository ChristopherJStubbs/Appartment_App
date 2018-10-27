require_relative 'first_act'
require_relative 'second_act'
require_relative 'third_act'

story1 = First.new
story1.get_name

story2 = Second.new(story1.part_one)
story2.part_two

story3 = Third.new(story2.go_to_part_three)
story3.continue
