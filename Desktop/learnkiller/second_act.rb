require_relative 'story'
require_relative 'first_act'

class Second < Story
  def initialize(info_arr)
    super()
    @murder_weapon = info_arr[0]
    @name = info_arr[1]
    @victim = info_arr[2]
    @murderer1 = ""
    @sent = 0
  end

  def part_two
    murderer1 = @staff[rand(8)]
    @murderer1 = murderer1
    puts "In a state of shock, you decide to ... "
    puts "1. Scream"
    puts "2. Pretend you didn\'t see anything and go home."
    puts "3. Call 911 and start your morning challenge."
    ans = gets.chomp.to_i
    if ans == 1
      puts "#{@name} screams deafening, blood-curdling scream and runs out of the room."

      puts "\"What happened!? What's wrong!? Who ded!?\" #{@murderer1} yells walking up to #{@name}."
      puts
      puts "#{@name} then explains what they found to #{@murderer1}."

      if @weapon[0].include?(@murder_weapon)
        first_arr_story()
      elsif @weapon[1].include?(@murder_weapon)
        second_arr_story()
      else
        third_arr_story()
      end
    elsif ans == 2
      end_game()
    elsif ans == 3
      @sent = 1
      go_to_part_three()
    else
      self.wrong_answer()
    end
  end

  def first_arr_story #keg, kombucha, fork
    puts "#{@name} thinks #{@murderer1} seems rather suspicious."
    puts
    puts "\"What were you doing here so early?\" #{@name} asks."
    puts
    puts "\"I...I... had to..um.. change the kombucha keg.\" #{@murderer1} stutters."
    puts
    puts "Do you believe #{@murderer1}? Y/N"
    ans = gets.chomp.capitalize
    if ans == "Y" || ans == "Yes"
      puts "\"Oh, finally! The kombucha keg has been empty all week!\" #{@name} stated. \"Let's find out who could\'ve done this.\""
      puts
      puts "#{@name} and #{@murderer1} go back in the room and begin to look around for more clues. They followed a set of bloody footprints leading to the bathroom."
      puts
      puts "Do you want to go into the bathroom? Y/N"
      ans = gets.chomp.capitalize
      if ans == "Y" || ans == "Yes"
        puts "#{@murderer1} shoves #{@name}'s head in the toilet and gives them a swirly. #{@name} is dead."
        end_game()
      else
        puts "#{@murderer1} stabs #{@name} from behind. #{@name} ded."
        end_game()
      end
    else
      puts "#{@murderer1} kills #{@name} for the insult."
      end_game()
    end
  end

  def second_arr_story #guitar, eraser, macbook
    puts "#{@murderer1} says that they saw someone come out of the Hopper classroom earlier that morning holding #{@murder_weapon}."
    puts
    puts "\"Who was it?\" #{@name} asks."
    puts
    puts "\"I could tell you... for a price...\" #{@murderer1} replies. \"I want $14,000 with a $500 non-refundable deposit.\""
    puts
    puts "Do you pay up? Y/N"
    ans = gets.chomp.capitalize
    if ans == "Y" || ans == "Yes"
      puts "#{@name} hands over their life savings to #{@murderer1}. #{@murderer1} takes your money and runs."
      puts
      puts "#{@name} is left alive, but broke."
      end_game()
    else
      puts "#{@murderer1} kills #{@name}. #{@name} ded."
    end
  end

  def third_arr_story #shovel, succulent, pen
    puts "\"What are you talking about? The LEARN academy is the safest place on earth,\" #{@murderer1} says."
    puts
    puts "They both go into the classroom, and to #{@name}'s shock #{@victim}'s body and #{@murder_weapon} are missing!"
    puts
    puts "What do you do?"
    puts "1. Fuhgeddaboudit and start your morning challenge."
    puts "2. Insist you saw something."
    ans = gets.chomp.to_i
    if ans == 1
      @sent = 1
      go_to_part_three()
    else
      murderer2 = get_another_murderer()
      puts "\"I know that I saw #{@victim}\'s dead body here next to #{@murder_weapon}!\" cried #{@name}. \"It was right here in front of the white board!\""
      puts
      puts "\"You crazy,\" says #{@murderer1}. \"I haven\'t seen anyone here all morning, except for #{murderer2}.\""
      puts
      puts "\"#{murderer2}?\" #{@name} thinks. #{murderer2} loves #{@murder_weapon}!\""
      puts
      puts "\"It had to have been #{murderer2}!\" #{@name} tells #{@murderer1}. \"#{murderer2} loves #{@murder_weapon}!\""
      puts
      puts "The two begin searching for #{murderer2}, but their search brings them to the staircase."
      puts
      puts "What do you want to do?"
      puts "1. Go upstairs."
      puts "2. Fuhgeddaboudit and start your morning challenge."
      ans = gets.chomp.to_i
      if ans == 1
        puts "#{murderer2} was waiting for #{@name}. #{@name} ded."
        end_game()
      else
        @sent = 1
        go_to_part_three()
      end
    end
  end

  def get_another_murderer
    num = rand(2)
      if num == 0
        while true do
          name = @staff[rand(8)]
          if name != @murderer1
            break
          end
        end
      else
        while true do
          name = @classmates[rand(15)]
          if name != @name
            break
          end
        end
      end
      return name
  end

  def go_to_part_three
    #return key variables
    return [@name,@sent]
  end

end
