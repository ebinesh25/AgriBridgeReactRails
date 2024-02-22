class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :phone, uniqueness: true

  has_one :farmer_profile
  has_one :business_owner_profile

  def profile
    return farmer_profile if role == 0
    return business_owner_profile if role == 1
  end

  def email_required?
    false
  end

  def email_changed?
    false
  end
end
