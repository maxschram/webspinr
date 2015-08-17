class UsersController < ApplicationController
  def new
    render 'new'
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login_user(@user)
      redirect_to editor_url
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to :root
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
