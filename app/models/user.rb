class User < ActiveRecord::Base
  validates :email, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token
  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by({ email: email })
    return nil unless user && user.has_password?(password)
  end

  def has_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    session_token
  end

  private

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token
    reset_session_token! unless session_token
  end
end
