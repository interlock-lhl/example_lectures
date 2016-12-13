FactoryGirl.define do
  factory :line_item do
    quantity { Faker::Number.between(1, 10) }
    item_price_cents { Faker::Number.between(100, 99999) }
    total_price_cents { Faker::Number.between(100, 99999) }
    association :product
    association :order
  end
end
