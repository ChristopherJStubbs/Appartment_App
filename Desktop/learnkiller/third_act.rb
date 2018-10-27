require_relative 'story'
require_relative 'first_act'
require_relative 'second_act'

class Third < Story
  def initialize(info_arr)
    @name = info_arr[0]
    @sent = info_arr[1]
  end

  def continue
    if @sent == 1
      part_three()
    end
  end

  def part_three
    puts "#{@name} goes to his station to pull up the LEARN site. The challenge for the day is to perform a math function of 1+2 in Ruby."
    puts
    puts "Can you add 1 + 2 in Ruby? Y/N"
    ans = gets.chomp.capitalize
    if ans == "Y" || ans == "Yes"
      puts "irb: 1 + 2 = #{1+2}"
      puts
      puts "Good job, #{@name}!"
      puts
      puts "#{@name} decides to do the stretch goal. #{@name} starts to read it aloud:"
      puts
      puts "I have buttons but I’m not a shirt,"
      puts "I have doors but I’m not a house,"
      puts "I go up and down but I’m not an umbrella,"
      puts "I need at least two stories but I’m not a book of fairytales,"
      puts "I’m found in tall buildings but I’m not a penthouse."
      puts
      puts "What am I?"
      gets
      puts "It's the elevator challenge. #{@name} dies from a migraine."
      end_game()
    else
      puts "Math has killed #{@name}. #{@name} ded."
      end_game()
    end
  end
end
