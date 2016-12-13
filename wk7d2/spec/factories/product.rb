FactoryGirl.define do
  factory :product do
    name { Faker::Commerce.product_name }
    description { Faker::Lorem.sentence }
    price Faker::Commerce.price
    quantity { Faker::Number.between(1, 10)}
    association :category
  end
end
