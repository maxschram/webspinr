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
      redirect_to editor_url
    else
      flash[:errors] = ["Invalid username/password"]
      redirect_to :root
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    redirect_to :root
  end
end
