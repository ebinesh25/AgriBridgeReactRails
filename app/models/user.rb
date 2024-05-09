class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
        #  :api

  validates :phone, uniqueness: true

  has_one :profile
  has_many :listings

  # enum role: {farmer:0, business_owner: 1}

  def email_required?
    false
  end

  def email_changed?
    false
  end
end
