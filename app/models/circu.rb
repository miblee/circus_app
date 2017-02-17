# == Schema Information
#
# Table name: circus
#
#  id         :integer          not null, primary key
#  location   :string
#  starts_on  :string
#  ends_on    :string
#  num_of_tix :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Circu < ApplicationRecord
  has_many :clowns
end
