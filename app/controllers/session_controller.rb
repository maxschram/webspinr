class SessionController < ApplicationController
  def new
    render 'new'
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login_user(@user)
      redirect_to :root
    else
      flash.now[:errors] = ["Invalid username/password"]
      render 'new'
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    redirect_to :root
  end
end
