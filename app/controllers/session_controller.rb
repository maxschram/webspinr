class SessionController < ApplicationController
  def new
    render 'new'
  end

  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if user
      login_user(user)
      redirect_to :root
    else
      flash.now[:errors] = ["Invalid username/password"]
      render 'new'
    end
  end

  def destroy
    session[:session_token] = nil
    user.reset_session_token!
    redirect_to :root
  end
end
