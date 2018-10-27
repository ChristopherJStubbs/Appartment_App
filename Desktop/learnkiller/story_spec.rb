require 'rspec'
require_relative 'story'

describe Story do
  it "has to be real" do
    expect{Story.new}.to_not raise_error
  end
  
end
