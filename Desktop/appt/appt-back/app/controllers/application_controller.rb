class ApplicationController < ActionController::API
  before_action :authenticate_user!
  respond_to :json  # <- Add this line
  include ActionController::MimeResponds # <- Add this line
end
